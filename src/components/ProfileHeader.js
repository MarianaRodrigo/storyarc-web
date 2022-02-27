import Image from "next/image";

export default function ProfileHeader({ user }) {
  return (
    <div className="mt-6 h-64 relative">
      <Image src="/images/profile.png" alt="Moliceiro" layout="fill" />
      <div className="absolute w-full h-full bg-gradient-to-t from-white to-transparent" />
      <div className="absolute w-24 h-24 top-[30%] left-8">
        <Image
          src={user.avatar}
          alt={user.name}
          layout="fill"
          className="rounded-full"
        />
      </div>
    </div>
  );
}
