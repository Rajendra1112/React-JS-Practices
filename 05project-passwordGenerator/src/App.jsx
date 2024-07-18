import { useCallback, useEffect, useRef, useState } from "react";

import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let psw = "";
    let originalValue = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) originalValue += "0123456789";

    if (charAllowed) originalValue += "~!#$%^&*()-_=+{}[]/";

    for (let i = 1; i <= length; i++) {
      let indexNo = Math.floor(Math.random() * originalValue.length + 1);
      psw += originalValue.charAt(indexNo);
    }
    setPassword(psw);
  }, [length, numberAllowed, charAllowed, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  // useRef hook
  let passwordRef = useRef(null);

  // function to copy password to clipboard
  const copyPasswordToClipboard = useCallback(() => {
    // to select whole pasaword
    passwordRef.current?.select();

    // to select range of password
    // passwordRef.current?.setSelectionRange(0, 4);

    // to copy password and write in clipboard
    window.navigator.clipboard.writeText(password);
  }, [password]);

  return (
    <>
      {/* main outer div */}
      <div className="rounded-md bg-gray-800 p-5 w-3/4 m-auto my-5 text-white">
        <h1 className="text-2xl text-center text-white">Password Generator</h1>
        {/* outer div for input field and copy button */}
        <div className="flex my-5 rounded-md overflow-hidden text-xl">
          <input
            className="p-2 outline-none w-3/4 text-black"
            type="text"
            value={password}
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button
            className="bg-blue-600 p-2 text-white w-1/4"
            onClick={copyPasswordToClipboard}
          >
            Copy
          </button>
        </div>
        {/* outer div for dependencies */}
        <div className="flex gap-x-10 text-xl">
          {/* outer div for range of value */}
          <div className="flex gap-x-2">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => setLength(e.target.value)}
            />
            <label>Length: {length}</label>
          </div>

          {/* outer div for check boxes */}
          <div className="flex gap-x-5">
            {/* outer div for number check box  */}
            <div className="flex gap-x-2 items-center">
              <input
                type="checkbox"
                id="number-checkbox"
                defaultChecked={numberAllowed}
                onChange={() => {
                  setNumberAllowed((prev) => !prev);
                }}
              />
              <label htmlFor="number-checkbox">Number</label>
            </div>

            {/* outer div for character check box  */}
            <div className="flex gap-x-2 items-center">
              <input
                type="checkbox"
                id="character-checkbox"
                defaultChecked={charAllowed}
                onChange={() => {
                  setCharAllowed((prev) => !prev);
                }}
              />
              <label htmlFor="character-checkbox">Character</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
