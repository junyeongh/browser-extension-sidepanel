interface BottomSheetProps {
  children: React.ReactNode;
  open: boolean;
  onToggle: () => void;
  onClose: () => void;
}

export default function BottomSheet({
  children,
  open,
  onToggle,
  onClose,
}: BottomSheetProps) {
  return (
    <>
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Sheet */}
      <div
        className={`absolute left-0 right-0 bottom-0 bg-white rounded-t-2xl shadow-lg transition-transform duration-300 ease-out overflow-hidden ${
          open ? "translate-y-0" : "translate-y-[calc(100%-2rem)]"
        }`}
      >
        {/* Handle bar */}
        <button
          className="w-full flex justify-center py-3 cursor-grab active:cursor-grabbing"
          onClick={onToggle}
          aria-label={open ? "Close panel" : "Open panel"}
        >
          <div className="w-10 h-1 bg-gray-300 rounded-full" />
        </button>

        {/* Content */}
        <div className="px-2 pb-4">{children}</div>
      </div>
    </>
  );
}
