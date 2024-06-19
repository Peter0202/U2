import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@mui/material";
import { deleteUser } from "../api/userApi";

function UserProfile (){
    const {user, logout} = useAuth0();
    const role = localStorage.getItem("roles");
    const userId = localStorage.getItem("Id");

    const handleSubmit = async () => {
        await deleteUser(userId).then( () => {
            logout({ logoutParams: { returnTo: window.location.origin } });
            window.localStorage.clear();
        }
        );
    }

    return(
        <div style={{border: "1px solid", borderRadius:"25px",display:"flex", alignItems:"center", flexDirection:"column"}}>
            <h2>User Profile</h2>
            <h3>Role: {role}</h3>
            <h3>Username: {user.nickname}</h3>
            <h3>Email: {user.email}</h3>
            <Button variant="outlined" onClick={handleSubmit}>Delete Account</Button>
        </div>
    )
}

export default UserProfile;