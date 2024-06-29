import { useState } from "react";

function App() {
  const [color, setColor] = useState("black");
  return (
    <>
      <div
        className="w-full h-screen flex justify-center"
        style={{ backgroundColor: color }}
      >
        <div className="flex justify-center gap-3 bg-white p-5 fixed bottom-5 rounded-xl ">
          <button
            onClick={() => setColor("red")}
            className="rounded-xl outline-none px-3 py-2 text-white"
            style={{
              backgroundColor: "red",
            }}
          >
            Red
          </button>

          <button
            onClick={() => setColor("gray")}
            className="rounded-xl outline-none px-3 py-2 text-white"
            style={{
              backgroundColor: "gray",
            }}
          >
            Gray
          </button>

          <button
            onClick={() => setColor("pink")}
            className="rounded-xl outline-none px-3 py-2 text-white"
            style={{
              backgroundColor: "pink",
            }}
          >
            Pink
          </button>

          <button
            onClick={() => setColor("blue")}
            className="rounded-xl outline-none px-3 py-2 text-white"
            style={{
              backgroundColor: "blue",
            }}
          >
            Blue
          </button>

          <button
            onClick={() => setColor("yellow")}
            className="rounded-xl outline-none px-3 py-2 text-white"
            style={{
              backgroundColor: "yellow",
            }}
          >
            Yellow
          </button>

          <button
            onClick={() => setColor("violet")}
            className="rounded-xl outline-none px-3 py-2 text-white"
            style={{
              backgroundColor: "violet",
            }}
          >
            Violet
          </button>

          <button
            onClick={() => setColor("tan")}
            className="rounded-xl outline-none px-3 py-2 text-white"
            style={{
              backgroundColor: "tan",
            }}
          >
            Tan
          </button>

          <button
            onClick={() => setColor("maroon")}
            className="rounded-xl outline-none px-3 py-2 text-white"
            style={{
              backgroundColor: "maroon",
            }}
          >
            Maroon
          </button>

          <button
            onClick={() => setColor("teal")}
            className="rounded-xl outline-none px-3 py-2 text-white"
            style={{
              backgroundColor: "teal",
            }}
          >
            Teal
          </button>

          <button
            onClick={() => setColor("indigo")}
            className="rounded-xl outline-none px-3 py-2 text-white"
            style={{
              backgroundColor: "indigo",
            }}
          >
            Indigo
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
