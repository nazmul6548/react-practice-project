import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './home/home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Home></Home>
    <Argument></Argument>
    <Argument></Argument>
    <Argument></Argument>
    </>
   
    
  )
}

function Argument () {
  
   const age = 25;
   const money = 20;
   const person = {
    name: 'John',
    age:12
   }
   return (
    <h3>i am {person.name} i am {age} years old,i have more {money} money </h3>
   )

}

export default App
