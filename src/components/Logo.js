import Image from "next/image";

function Logo() {
  return (
    <div className="h-7 w-28 relative flex-none">
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
