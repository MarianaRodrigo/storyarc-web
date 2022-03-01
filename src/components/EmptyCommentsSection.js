import { FiAlertCircle } from "react-icons/fi";

export function EmptyCommentsSection({ text }) {
  return (
    <div className="flex flex-col items-center space-y-2 pt-2">
      <FiAlertCircle className="w-8 h-8" />
      <p className="text-sm">{text}</p>
    </div>
  );
}
