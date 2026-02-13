import { BaggageClaim, TreePalm } from "lucide-react";
import { useState } from "react";
import { List } from "./assets/components/List";

function App() {
  const [input, setInput] = useState({ name: "", quantity: 1 });
  const [items, setItems] = useState([]);

  function addItem() {
    if (!input.name.trim()) return;
    setItems((prev) => [
      ...prev,
      {
        id: Date.now(),
        name: input.name,
        quantity: input.quantity,
        packed: false,
      },
    ]);
    setInput({ name: "", quantity: 1 });
  }

  function handleSubmit(e) {
    e.preventDefault();
    addItem();
  }

  function changeHandler(e) {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: name === "quantity" ? Number(value) : value,
    }));
  }

  function togglePacked(id) {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item,
      ),
    );
  }

  function deleteItem(id) {
    setItems((prev) => prev.filter((item) => item.id !== id));
  }

  return (
    <div>
      <span className="bg-amber-500 flex justify-center py-5 items-center gap-4">
        <TreePalm size={40} color="green" />
        <h1 className="text-5xl font-extrabold text-center">FAR AWAY</h1>
        <BaggageClaim size={40} color="brown" />
      </span>
      <form
        onSubmit={handleSubmit}
        className="bg-amber-600 p-5 flex flex-col sm:flex-row gap-4 items-center justify-center"
      >
        <label htmlFor="name" className="text-amber-50">
          What do you need for 😍 your trip?
        </label>
        <input
          id="quantity"
          className="bg-amber-100 rounded-2xl p-2 w-20"
          type="number"
          name="quantity"
          min="1"
          onChange={changeHandler}
          value={input.quantity}
        />
        <input
          id="name"
          type="text"
          className="bg-amber-100 rounded-2xl p-2 flex-1"
          placeholder="item..."
          name="name"
          onChange={changeHandler}
          value={input.name}
        />
        <button
          type="submit"
          className="bg-cyan-500 py-2 px-4 rounded-2xl uppercase cursor-pointer"
        >
          Add
        </button>
      </form>
      <List items={items} onToggle={togglePacked} onDelete={deleteItem} />
    </div>
  );
}

export default App;
