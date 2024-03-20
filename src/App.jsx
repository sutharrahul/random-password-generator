import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="bg-black text-white px-2 py-4 rounded-md">
        Random password
      </h1>
    </>
  );
}

export default App;
