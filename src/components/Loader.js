import Lottie from "lottie-react";
import searchAnimation from "../animations/feed.json";

export function Loader() {
  return (
    <div className="flex justify-center w-full">
      <Lottie animationData={searchAnimation} loop />
    </div>
  );
}
