import { useEffect, useState } from "react"
import FriendsN from "./friend"

const Friends = () => {
const [friends, setfriends] = useState([])
useEffect( () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then (data => setfriends(data))
},[])


    const friendsstyle = {
        border : '1px solid red',
        padding : '10px',
        backgroundColor : 'gray',
        color : 'white',
        borderRadius : '10px'   
    }
return (
    <div style={friendsstyle}>
        <h4>Friends : {friends.length}</h4>
        {
            friends.map(friend => <FriendsN friend={friend}></FriendsN>)
        }
    </div>
)
}
export default Friends