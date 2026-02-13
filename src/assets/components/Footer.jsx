export function Footer({items}) {
  console.log(items.length);
  Math.round
  return (
    <div className="bg-cyan-400 fixed bottom-0 py-4 w-full items-center text-center">
      {items && (
        <p>
          There Are {items.length} items on your List, and you already packed{" "}
          {items.filter((item) => item.packed).length} (
          {Math.round((items.filter((item) => item.packed).length / items.length)*100)||0}%)
        </p>
      )}
    </div>
  );
}
