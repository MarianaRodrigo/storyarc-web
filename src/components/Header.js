import Image from "next/image";

function Header() {
  return (
    <div className="h-9 w-40 relative flex-none">
      <Image
        src="/images/logo.png"
        alt="Storyarc Logo"
        layout="fill"
        priority
      />
    </div>
  );
}

export default Header;
