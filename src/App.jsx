import { useCallback, useEffect, useRef, useState } from "react";
import Footer from "./Footer";

function App() {
  // useState Hook
  const [lenght, setLenght] = useState(10);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [specialCharacters, setSpecialCharacters] = useState(false);
  let [password, setPassword] = useState();

  // useCallback Hook
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) {
      str += "0123456789";
    }
    if (specialCharacters) {
      str += "!@#$%^&*>?|~-_";
    }

    for (let i = 1; i <= lenght; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [lenght, numberAllowed, specialCharacters, setPassword]);

  // useEffect Hook
  useEffect(() => {
    passwordGenerator();
  }, [lenght, numberAllowed, specialCharacters, setPassword]);

  const passwordRefe = useRef(null);

  // useRef Hook
  const copyPasswordClipboard = useCallback(() => {
    passwordRefe.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);
  return (
    <div className="h-screen">
      <h1 className="text-white text-4xl font-semibold text-center py-8 ">
        Random Password Generator
      </h1>
      <div className="px-2">
        <div className="flex justify-center py-5">
          <input
            type="text"
            value={password}
            placeholder="Password"
            ref={passwordRefe}
            className="input input-bordered input-accent w-full max-w-xs"
          />
          <button
            onClick={copyPasswordClipboard}
            className="btn btn-outline btn-accent ml-1 px-6 tooltip"
          >
            Copy
          </button>
          <button
            onClick={() => passwordGenerator()}
            className="btn btn-outline btn-accent ml-1 px-6"
          >
            Regenerate
          </button>
        </div>
        <div className="flex justify-center gap-x-6 items-center ">
          <div className="flex items-center gap-x-3">
            <input
              type="range"
              min={10}
              max={20}
              value={lenght}
              readOnly
              onChange={(e) => {
                setLenght(e.target.value);
              }}
              className="input-accent cursor-pointer  max-w-xs"
            />
            <span>Lenght: {lenght}</span>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <span>Number</span>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={specialCharacters}
              onChange={() => {
                setSpecialCharacters((prev) => !prev);
              }}
            />
            <span>Special Characters </span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
