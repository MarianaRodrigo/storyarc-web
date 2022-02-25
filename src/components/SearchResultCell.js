import Link from "next/link";

export default function SearchResultCell({ name, ref }) {
  console.log(ref);
  return (
    <Link
      href={{
        pathname: `/search/${name}`,
        query: {
          rua: name,
        },
      }}
      as={`/search/${name}`}
      passHref
    >
      <p className="cursor-pointer px-3 py-2 hover:bg-gray-100 border-t-[0.5px] border-opacity-60">
        {name}
      </p>
    </Link>
  );
}
