import { useRouter } from "next/router";

export default function Post() {
  const router = useRouter();
  console.log(router);

  return <div className="flex-1">post</div>;
}
