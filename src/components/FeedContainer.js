export default function FeedContainer({ children }) {
  return (
    <div className="w-full max-h-[80%] overflow-y-scroll space-y-4 pt-6">
      {children}
    </div>
  );
}
