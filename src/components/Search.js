import { useState, useRef, useEffect } from "react";
import { useClickOutside, useHotkeys } from "@mantine/hooks";
import SearchLoading from "./SearchLoading";
import SearchResultCell from "./SearchResultCell";
import SearchResultsContainer from "./SearchResultsContainer";
import { useSelector, useDispatch } from "react-redux";
import {
  isSearchingState,
  setIsSearching,
} from "../features/search/searchSlice";
import db from "../../db.json";

export default function Search() {
  const dispatch = useDispatch();
  const searchRef = useRef("");
  const [searchResults, setSearchResults] = useState([]);
  const isSearching = useSelector(isSearchingState);

  useEffect(() => {
    searchRef.current.value = "";
    setSearchResults([]);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isSearching]);

  function onKeyDown(e) {
    if (e.key === "Escape") {
      dispatch(setIsSearching(false));
      searchRef.current.blur();
    }
  }

  const clickedOutside = useClickOutside(
    () => dispatch(setIsSearching(false)),
    ["mouseup", "touchend"]
  );
  useHotkeys([["ESC", () => dispatch(setIsSearching(false))]]);

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
        (isSearching ? "rounded-t-lg" : "sm:ml-2 rounded-lg")
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
          onFocus={() => dispatch(setIsSearching(true))}
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
