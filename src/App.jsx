import { useCallback, useEffect, useState } from "react";

function App() {
  const [lenght, setLenght] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [specialCharacters, setSpecialCharacters] = useState(false);
  let [password, setPassword] = useState();

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let srt = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) {
      srt += "0123456789";
    }
    if (specialCharacters) {
      srt += "!@#$%^&*>?|~-_";
    }

    for (let i = 0; i <= lenght; i++) {
      let char = Math.floor(Math.random * srt + 1);
      pass += srt.charAt(char);
      console.log(pass);
    }
    setPassword(pass);
  }, [lenght, numberAllowed, specialCharacters, setPassword]);

  useEffect(
    () => passwordGenerator(),
    [lenght, numberAllowed, specialCharacters, setPassword]
  );

  return (
    <>
      <h1 className="text-white text-4xl font-semibold text-center py-8 ">
        Random Password Generator
      </h1>
      <div className="flex justify-center py-5">
        <input
          type="text"
          placeholder="Password"
          className="input input-bordered input-accent w-full max-w-xs"
        />
        <button className="btn btn-outline btn-accent ml-1">Accent</button>
      </div>
      <div>
        <div>
          <input
            type="range"
            min={8}
            max={16}
            value={lenght}
            onChange={(e) => {
              setLenght(e.target.value);
            }}
            className="input-accent cursor-pointer  max-w-xs"
          />
          <span>Lenght: {lenght}</span>
        </div>
        <div>
          <input type="checkbox" checked />
        </div>
      </div>
    </>
  );
}

export default App;
