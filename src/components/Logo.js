import Image from "next/image";

function Logo() {
  return (
    <div className="h-8 w-32 sm:h-7 sm:w-28 relative flex-none">
      <Image
        src="/images/logo.png"
        alt="Storyarc Logo"
        layout="fill"
        priority
      />
    </div>
  );
}

export default Logo;
