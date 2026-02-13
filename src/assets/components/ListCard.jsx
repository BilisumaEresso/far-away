import { X } from "lucide-react";

export function ListCard({ item, onToggle, onDelete }) {
  return (
    <div className="bg-amber-700 p-3 rounded-lg flex items-center gap-2">
      <input
        type="checkbox"
        checked={item.packed}
        onChange={() => onToggle(item.id)}
      />
      <span
        className={`text-amber-50 flex-1 ${
          item.packed ? "line-through opacity-50" : ""
        }`}
      >
        {item.quantity} {item.name}
      </span>
      <button
        onClick={() => onDelete(item.id)}
        className="text-red-500 hover:text-red-700"
      >
        {item.packed && <X />}
      </button>
    </div>
  );
}
