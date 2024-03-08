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
    <Students></Students>
    <Devoloper></Devoloper>
   
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
const  Students = () => {
  return( 
   <div className='studentid'>
    <h3>ki obosta mona</h3>
    <p>name:</p>
    <p>age:</p>
  
  </div>
  )
}
const Devoloper = () => {
  const  Devoloperstyle ={
    marginTop:"10px",
    backgroundColor:"green",
    padding :'10px',
    borderRadius: "10px"

  }
  return (
    <div style={Devoloperstyle}>
      <h3>hello how are you</h3>
    </div>
  )
}


export default App
