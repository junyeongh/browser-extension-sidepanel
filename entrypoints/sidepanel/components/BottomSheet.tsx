interface BottomSheetProps {
  children: React.ReactNode;
}

export default function BottomSheet({ children }: BottomSheetProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="self-center border bg-amber-200 my-4">
        <button onClick={() => setIsOpen((prev) => !prev)}>bottom sheet</button>
      </div>
      <div className={isOpen ? "border" : "hidden"}>{children}</div>
    </>
  );
}
