import { BaggageClaim, TreePalm } from "lucide-react";
import { useState } from "react";

function App() {
  const [input, setInput] = useState({ name: "", quantity: 1,checked:false });
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
    
  }
  console.log(item);
  return (
    <div>
      <span className=" bg-amber-500 flex justify-center py-5 items-center gap-4">
        <TreePalm size={40} color="green" />
        <h1 className="text-5xl p-6font-extrabold text-center">FAR AWAY</h1>
        <BaggageClaim size={40} color="brown" />
      </span>
      <form
        onSubmit={submitHandler}
        className="bg-amber-600 p-5 sm:flex grid grid-cols-2 justify-around px-2 gap-2 items-center"
      >
        <label className="col-span-2" htmlFor="name">
          What do you need for 😍 your trip?
        </label>
        <input
          className="bg-amber-100 rounded-2xl p-2"
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
          className="bg-cyan-500  py-2 px-4  rounded-2xl uppercase cursor-pointer"
          value="Add"
        />
      </form>
      <div className="grid grid-cols-3">
        {item.map((i, idx) => (
          <span className="text-amber-50 flex items-center py-3 gap-2" key={idx}>
            <input type="checkbox" />
            <p className="text-amber-50">{i.quantity}</p>
            <p className="">{i.name}</p>
          </span>
        ))}
      </div>
    </div>
  );
}

export default App;
