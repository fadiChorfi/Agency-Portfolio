import { X } from "lucide-react";

export default function Modal({
  children,
  onClose,
}: {
  children: React.ReactNode;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center">
      <div className="relative bg-white rounded-lg p-4 max-w-3xl w-full max-h-[90vh] overflow-auto">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-600 hover:text-black">
          <X />
        </button>
        {children}
      </div>
    </div>
  );
}
