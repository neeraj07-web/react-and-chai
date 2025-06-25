import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
    <h1 className="text-center ">Background Color Changer</h1>
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed bottom-12 left-1/2 transform -translate-x-1/2  w-3/5 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button 
          onClick={() => (setColor("red"))}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg text-black"style={{ backgroundColor: "red" }}
          >Red
          </button>

           <button 
            onClick={() => (setColor("Blue"))}
           className="outline-none px-4 py-1 rounded-full text-white shadow-lg "style={{ backgroundColor: "Blue" }}
          >Blue
          </button>

           <button
            onClick={() => (setColor("yellow"))}
           className="outline-none px-4 py-1 rounded-full text-white shadow-lg text-black"style={{ backgroundColor: "yellow" }}
          >Yellow
          </button>

           <button 
            onClick={() => (setColor("purple"))}
           className="outline-none px-4 py-1 rounded-full text-white shadow-lg "style={{ backgroundColor: "purple" }}
          >Purple
          </button>

           <button
            onClick={() => (setColor("pink"))}
           className="outline-none px-4 py-1 rounded-full text-white shadow-lg text-black"style={{ backgroundColor: "pink" }}
          >Pink
          </button>

           <button 
            onClick={() => (setColor("orange"))}
           className="outline-none px-4 py-1 rounded-full text-white shadow-lg text-black"style={{ backgroundColor: "orange" }}
          >Orange
          </button>

        </div>
      </div>
    </div>
    </>
  );
}

export default App;
