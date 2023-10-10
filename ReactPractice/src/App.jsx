import { useState } from 'react'

import PasswordGenerator from './Components/PasswordGenerator';

function App() {

  let [color, setColor] = useState("orange");
  const handleColor = (e) => {
    console.log(e.target.value)
    switch (e.target.value) {
      
      case "red":
        console.log(e.target.value)
        setColor("red")
        break;
      case "green":
        console.log(e.target.value + "greeeen")
        setColor("green")
        break;
      case "blue":
        console.log(e.target.value)
        setColor("blue")
        break;
      case "pink":
        setColor("pink")
        break;
      case "lime":
        setColor("lime")
        break;
      default:
        break;
    }
  }
  return (
    <>
      
      <div className='bar p-5 w-screen h-screen' style={{ backgroundColor: color }}>
            <PasswordGenerator/>
      <div className='flex flex-wrap gap-5 bottom-12 fixed justify-center inset-x-0 rounded-full bg-slate-600 px-5 py-5 mr-12
        ml-12 '>
          <button className='rounded-lg px-3 py-2 bg-red-600 font-bold text-blue-50 text-3xl' value="red" onClick={handleColor}>RED</button>
          <button className='rounded-lg px-3 py-2 bg-green-600 font-bold text-blue-50 text-3xl' value="green" onClick={handleColor}>GREEN</button>
          <button className='rounded-lg px-3 py-2 bg-blue-600 font-bold text-blue-50 text-3xl' value="blue" onClick={handleColor}>BLUE</button>
          <button className='rounded-lg px-3 py-2 bg-pink-600 font-bold text-blue-50 text-3xl' value="pink" onClick={handleColor}>PINK</button>
          <button className='rounded-lg px-3 py-2 bg-lime-600 font-bold text-blue-50 text-3xl' value="lime" onClick={handleColor}>LIME</button>
          
        </div>

      </div>

       


   
    </>
  )
}

export default App
