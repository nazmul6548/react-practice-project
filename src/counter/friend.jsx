const FriendsN = ({friend}) => {
    // console.log(friend);
    const {name , email} = friend;
    return (
        <div style={'friendsstyle'}>
            <h4>name: {name}</h4>
            <h6>email: {email}</h6>
        </div>
    )
}
export default FriendsN