import Image from "next/image";
import Link from "next/link";

function Logo() {
  return (
    <Link href="/" passHref>
      <div className="h-12 w-48 sm:h-[2.2rem] sm:w-36 relative flex-none cursor-pointer">
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
