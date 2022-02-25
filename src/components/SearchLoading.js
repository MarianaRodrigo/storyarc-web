import Lottie from "lottie-react";
import searchAnimation from "../animations/searching.json";

export default function SearchLoading() {
  return (
    <div className="flex justify-center w-full border-t-[0.5px]">
      <Lottie animationData={searchAnimation} loop className="w-48 h-28" />
    </div>
  );
}
