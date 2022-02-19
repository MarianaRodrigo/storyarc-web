export default function FeedContainer({ children }) {
  return (
    <div className="flex-1 w-full h-full space-y-4 mt-6 pb-20 overflow-y-scroll overscroll-y-contain scroll-smooth">
      {children}
    </div>
  );
}
