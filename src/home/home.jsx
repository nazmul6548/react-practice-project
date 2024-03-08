import Countername from '../counter/counter';
import './home.css'

const  Home = ()  =>{
    function anything(){
        // alert('Please enter')
        const service = document.getElementById('service-combo');
        service.innerText ="hello i am new"
    }
    const click2 = () =>{
        alert("mew mew")
    }
    const click4 = (num) =>{
        alert( num +5);
    }
    return (
        <div>
            <h1 id='service-combo'>i am from chittagong</h1>
            <button onClick={anything} className='clickbtn'>click me</button>
            <button onClick={click2}>click2</button>
            <Countername></Countername>
            <button onClick={() => {alert('gew gew')}}>click3</button>
            <button onClick={() => click4(2)}>click4</button>

    
        </div>
            
        
    )
}
export default Home;