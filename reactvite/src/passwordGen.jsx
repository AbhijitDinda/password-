import { useState, useCallback , useEffect, useRef} from "react";
// , useEffect, useRef


function Passwordgen() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState('')

  const passwordHandler = useCallback(()=>{
    let password="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed){str+="0123456789"}
    if(charAllowed){str+="!@#$%^&*()_+"}

    for (let index = 1; index <= length; index++) {
      const element = Math.floor(Math.random()*str.length);
      
      password += str.charAt(element);
      
    }
    setPassword(password)


  },[length,numberAllowed,charAllowed])

  const passwordCopy= useRef(null);

  const copyFunction = (e) => {
    window.navigator.clipboard.writeText(password);
    passwordCopy.current?.select()
    e.target.style.backgroundColor = 'red';
    e.target.innerHTML = 'Copied';
  
    setTimeout(() => {
      e.target.style.backgroundColor = '';
      e.target.innerHTML = 'Copy';
      passwordCopy.current.focus();
    }, 500);
  };



  useEffect(()=>{
    passwordHandler()
 
  }, [length, numberAllowed, charAllowed])





  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className="text-white text-center my-3">Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="Password"
          readOnly
          ref={passwordCopy}
        />
        <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0" 
        onClick={copyFunction}>
          copy
        </button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e) => setLength(e.target.value)}
            name=""
            id=""
          />
          <label htmlFor="length">Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            onChange={() => setNumberAllowed((prev) => !prev)}
            name=""
            id=""
          />
          <label htmlFor="number">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            onChange={() => setCharAllowed((prev) => !prev)}
            name=""
            id=""
          />
          <label htmlFor="charInput">Character</label>
        </div>
      </div>
    </div>
  );
}

export default Passwordgen;
