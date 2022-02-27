//next imports
import Image from "next/image";
import Link from "next/link";
//redux
import { useSelector } from "react-redux";
import { isSearchingState } from "../features/search/searchSlice";

function Logo() {
  const isSearching = useSelector(isSearchingState);

  return (
    <Link href="/" passHref>
      <div
        className={
          "h-12 w-48 sm:h-[2.2rem] sm:w-36 relative flex-none cursor-pointer transition-all duration-300 ease-out" +
          (isSearching ? "sm:h-[2.2rem] sm:w-0" : "sm:h-[2.2rem] sm:w-36")
        }
      >
        <Image
          src="/images/logo.png"
          alt="Storyarc Logo"
          layout="fill"
          priority
        />
      </div>
    </Link>
  );
}

export default Logo;
