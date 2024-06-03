

function User (props){
    return (
        <tr style={{border: "1px solid black"}}>
            <td><b>{props.user.id}</b></td>
            <td> {props.user.username} </td>
        </tr>
    )
}

export default User;