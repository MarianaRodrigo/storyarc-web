export default function FeedContainer({ children }) {
  return (
    <div className="w-full h-[75.5%] space-y-4 mt-6 pb-6 overflow-y-scroll scroll-smooth">
      {children}
    </div>
  );
}
