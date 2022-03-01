import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { setIsSearching } from "../features/search/searchSlice";

export default function SearchResultCell({ name, ref }) {
  const dispatch = useDispatch();
  const router = useRouter();

  function handleClick(e) {
    e.preventDefault();
    dispatch(setIsSearching(false));
    router.push(
      {
        pathname: `/search/${name}`,
        query: {
          rua: name,
        },
      },
      `/search/${name}`
    );
  }

  return (
    <li
      onClick={(e) => handleClick(e)}
      className="cursor-pointer px-3 py-2 hover:bg-gray-100 border-t-[0.5px] border-opacity-60"
    >
      {name}
    </li>
  );
}
