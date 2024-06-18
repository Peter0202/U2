
import { useAuth0 } from "@auth0/auth0-react";
import { getAllUsers } from "../api/userApi";
import UserList from "../components/UserList";
import { useState } from "react";
import { useEffect } from "react";
import { deleteUser } from "../api/userApi";

function AdminHome() {
    const [users, setUsers] = useState([]);

    const refreshUserList = () => {
        getAllUsers().then(usersList => {
            setUsers(usersList);

        }).catch(error => console.log(error));
    }



    useEffect(() => {
        refreshUserList();
    }, [users]);


    return (
        <div>
            <h1>Welcome to admin page</h1>
            <div className="inner">
                <UserList users={users} />
            </div>
        </div>

    )
}

export default AdminHome;