import Chai from "./Chai";

function App() {
  const changeColor = () => {
    document.querySelector("body").style.backgroundColor = "#666";
  };

  const changeDefaultColor = () => {
    document.querySelector("body").style.backgroundColor = "#fff";
  };

  return (
    <>
      <Chai />
      <h1>My name is Rajendra Thapa</h1>
      <button onClick={changeColor}>changebgcolor</button>
      <button onClick={changeDefaultColor}>changedefaultcolor</button>
    </>
  );
}

export default App;
