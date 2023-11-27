import { useState } from "react";

function App() {
  const [style, setStyle] = useState({
    color: "black",
    fontSize: "100px",
    text:"who ?",
  });
  

  return (
    <>
      <h1 style={{ color: style.color, fontSize: style.fontSize }}>{style.text}</h1>

      <button onClick={() => setStyle({ color: "red", fontSize: "50px", text:"Abhijit"})}>
        Abhijit
      </button>
      <button onClick={() => setStyle({ color: "yellow", fontSize: "60px", text:"Anirban sir"})}>
        Anirban Chaterjee
      </button>

      <butoon></butoon>
    </>
  );
}

export default App;
