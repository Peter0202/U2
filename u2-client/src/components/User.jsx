import { deleteUser } from "../api/userApi";
import { Button } from "react-bootstrap";

function User (props){

    const handleSubmit = () =>{
        deleteUser(props.user.id);
    }
    return (
        <tr style={{border: "1px solid black"}}>
            <td><b>{props.user.id}</b></td>
            <td> {props.user.username} </td>
            <td><Button variant="dark" onClick={handleSubmit}>Delete</Button></td>
        </tr>
    )
}

export default User;