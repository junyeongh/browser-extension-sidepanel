interface BottomSheetProps {
  children: React.ReactNode;
}

export default function BottomSheet({ children }: BottomSheetProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Sheet */}
      <div
        className={`absolute left-0 right-0 bottom-0 bg-white rounded-t-2xl shadow-lg transition-transform duration-300 ease-out ${
          isOpen ? "translate-y-0" : "translate-y-[calc(100%-2rem)]"
        }`}
      >
        {/* Handle bar */}
        <button
          className="w-full flex justify-center py-3 cursor-grab active:cursor-grabbing"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? "Close panel" : "Open panel"}
        >
          <div className="w-10 h-1 bg-gray-300 rounded-full" />
        </button>

        {/* Content */}
        <div className="px-2 pb-4 max-h-[60vh] overflow-y-auto">{children}</div>
      </div>
    </>
  );
}
