import './home.css'

const  Home = ()  =>{
    function anything(){
        // alert('Please enter')
        const service = document.getElementById('service-combo');
        service.innerText ="hello i am new"
    }
    return (
        <div>
            <h1 id='service-combo'>i am from chittagong</h1>
            <button onClick={anything} className='clickbtn'>click me</button>

    
        </div>
            
        
    )
}
export default Home;