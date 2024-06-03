import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { useNavigate } from "react-router";


function LandingPage(){

    useEffect(()=>{
        const { user, getIdTokenClaims } = useAuth0();
        const navigate = useNavigate();
        if (user) {
            localStorage.setItem("role", user["http://www.u2.com/roles"])
        }
    
        if(localStorage.getItem("role") === "Admin"){
            navigate("/admin", {replace: true});
        }
        else{
            navigate("/user", {replace: true})
        }
    }, [])
    

    return(<div></div>);
}

export default LandingPage;