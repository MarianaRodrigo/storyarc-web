import { useState, useRef } from "react";
import { useClickOutside } from "@mantine/hooks";
import SearchLoading from "./SearchLoading";
import SearchResultCell from "./SearchResultCell";
import SearchResultsContainer from "./SearchResultsContainer";
import db from "../../db.json";

export default function Search() {
  const searchRef = useRef("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const clickedOutside = useClickOutside(
    () => setIsSearching(false),
    ["mouseup", "touchend"]
  );

  function handleTyping() {
    if (searchRef.current.value.length > 0) {
      setSearchResults(
        db.locations.filter((location) => {
          const regex = new RegExp(`^${searchRef.current.value}`, "gi");
          return location.name.match(regex);
        })
      );
    } else {
      setSearchResults([]);
    }
  }

  return (
    <div
      ref={clickedOutside}
      className={
        "flex-grow h-14 shadow-md border-[0.5px] transition-all duration-50 ease-in " +
        (isSearching ? "rounded-t-lg" : "ml-2 rounded-lg")
      }
    >
      <div
        className={
          "w-full h-full bg-white transition-all duration-50 ease-in " +
          (isSearching ? "rounded-t-lg" : "rounded-lg")
        }
      >
        <input
          ref={searchRef}
          type="text"
          onChange={handleTyping}
          placeholder="Pesquisar por locais"
          className="w-full h-full rounded-lg px-4 text-sm font-light tracking-wider outline-none"
          onFocus={() => setIsSearching(true)}
        />
      </div>
      {isSearching && (
        <SearchResultsContainer>
          {searchResults.length === 0 && <SearchLoading />}
          {searchResults.map((item) => (
            <SearchResultCell key={item.id} name={item.name} />
          ))}
        </SearchResultsContainer>
      )}
    </div>
  );
}
