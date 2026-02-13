import { BaggageClaim, TreePalm } from "lucide-react";
import { useState } from "react";

function App() {
  const [input, setInput] = useState({ name: "", quantity: 1 });
  const [item, setItem] = useState([]);

  function changeHandler(e) {
    setInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    console.log(input);
  }

  function submitHandler(e) {
    e.preventDefault();
    setItem((prev) => [...prev, input]);
    console.log(item);
  }
  return (
    <div>
      <span className=" bg-amber-500 flex justify-center py-5 items-center gap-4">
        <TreePalm size={40} color="green" />
        <h1 className="text-5xl p-6font-extrabold text-center">FAR AWAY</h1>
        <BaggageClaim size={40} color="brown" />
      </span>
      <form
        onSubmit={submitHandler}
        className="bg-amber-600 p-5 md:flex justify-around px-2 md:gap-2 items-center"
      >
        <label className="" htmlFor="name">
          What do you need for 😍 your trip?
        </label>
        <input
          className="bg-amber-100 rounded-2xl p-2 max-w-30"
          type="number"
          name="quantity"
          onChange={changeHandler}
          value={input.quantity}
        />
        <input
          type="text"
          className="bg-amber-100 rounded-2xl p-2 focus:outline-0"
          placeholder="item..."
          name="name"
          onChange={changeHandler}
          value={input.name}
        />
        <input
          type="submit"
          className="bg-cyan-500 py-2 px-4 rounded-2xl uppercase cursor-pointer"
          value="Add"
        />
      </form>
      <div>
        
      </div>
    </div>
  );
}

export default App;
