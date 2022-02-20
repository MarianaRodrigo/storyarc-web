export default function FeedContainer({ children }) {
  return (
    <div className="flex-1 w-full space-y-4 pb-6 overflow-y-scroll overscroll-y-contain scroll-smooth">
      {children}
    </div>
  );
}
