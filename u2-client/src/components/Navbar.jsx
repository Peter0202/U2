import { AppBar, Button } from "@mui/material";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router";
import { useEffect } from "react";
import { createUser, getUserByUsername } from "../api/userApi";
import { Link } from "react-router-dom";

function Navbar() {

    const { user, getIdTokenClaims, getAccessTokenSilently } = useAuth0();
    console.log(user);
    if (user) {
        let claims = getIdTokenClaims();
        localStorage.setItem("roles", user["http://www.u2.com/roles"]);
        localStorage.setItem("newUser", user["http://www.u2.com/newUser"]);
    }

    const newUser = localStorage.getItem("newUser");
    const role = localStorage.getItem("roles");
    const token = getAccessTokenSilently();
    console.log(token);
    console.log(role);
    console.log(localStorage.getItem("newUser"));

    const registerNewUser = async () => {
        await createUser(user.nickname).then(localStorage.removeItem("newUser"));
    }

    const getUserFromDatabase = async () => {
        await getUserByUsername(user.nickname).then(res => {
            localStorage.setItem("Id", res.id);
            console.log("The id is " 
                + localStorage.getItem("Id"));
        }
        );
    }

    if(newUser !== 'undefined' && role === ''){
        registerNewUser();
        console.log('registered new user')
    }

    if(user){
        getUserFromDatabase();
    }


    if (role === "Admin") {
        return (
            <div className=".d-flex flex-row">
                <Navigate to="/admin" />
                <AppBar position="static" sx={{ bgcolor: '#696969' }}>
                    <LoginButton />
                    <LogoutButton />
                    <p>Admin</p>
                </AppBar>
            </div>
        );
    }
    else if (role === "User") {
        return (
            <div className=".d-flex flex-row">
                <Navigate to="/user" />
                <AppBar position="static" sx={{ bgcolor: '#222222' }}>
                    <LoginButton />
                    <LogoutButton />
                    <Link to="/user"><Button style={{width:"100%"}} variant="outlined">Home</Button></Link>
                    <Link to="/upload"><Button style={{width:"100%"}} variant="outlined">Upload</Button></Link>
                    <Link to="/videos"><Button style={{width:"100%"}} variant="outlined">My Videos</Button></Link>
                    <Link to="/profile"><Button style={{width:"100%"}} variant="outlined">Profile</Button></Link>
                </AppBar>
            </div>
        )
    }
    else {
        return (
            <div className=".d-flex flex-row">
                <AppBar position="static" sx={{ bgcolor: '#222222' }}>
                    <LoginButton />
                    <LogoutButton />
                </AppBar>
            </div>
        )
    }

}

export default Navbar;