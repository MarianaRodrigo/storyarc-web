import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

function Logo() {
  const [temp, setTemp] = useState(false);
  return (
    <Link href="/" passHref>
      <div
        className={
          "h-12 w-48 sm:h-[2.2rem] sm:w-36 relative flex-none cursor-pointer transition-all duration-300 ease-out" +
          (temp ? "sm:h-[2.2rem] sm:w-0" : "sm:h-[2.2rem] sm:w-36")
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
