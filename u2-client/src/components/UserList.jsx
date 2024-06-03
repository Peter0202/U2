import User from "./User";
import React from "react";

function UserList(props) {
    return (
        <table style={{ border: "1px solid black" }}>
            <thead>
                <tr style={{ border: "1px solid black" }}>
                    <th>id</th>
                    <th>username</th>
                </tr>
            </thead>
            <tbody style={{ border: "1px solid black" }}>
                {props.users.map(user => (
                    <User key={user.id} user={user} />
                ))}
            </tbody>
        </table>
    )
}

export default UserList;