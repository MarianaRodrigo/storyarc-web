import Image from "next/image";

export function ProfileHeader({ user }) {
  return (
    <div className="mt-6 h-72 relative">
      <Image
        src={
          "https://images.unsplash.com/photo-1559681584-03c381b53ed1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
        }
        alt="Moliceiro na ria de Aveiro"
        layout="fill"
      />
      <div className="absolute flex flex-row w-full h-full bg-gradient-to-t from-white to-transparent" />

      <div className="absolute w-24 h-24 top-[30%] left-8 border-4 rounded-full">
        <Image
          src={user.avatar ? user.avatar : "/images/user_img.png"}
          alt={user.name}
          layout="fill"
          className="rounded-full"
        />
      </div>
      <h1 className="absolute bottom-[18%] left-8 font-medium tracking-wide text-xl">
        {user.name}
      </h1>
      <div className="absolute bottom-[8%] left-7 flex mt-2">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          ></path>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          ></path>
        </svg>
        <p className="ml-1 font-light">Aveiro, Portugal</p>
      </div>
    </div>
  );
}
