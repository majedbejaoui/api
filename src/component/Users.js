import React, { Fragment, useEffect, useState } from 'react';
import axios from "axios";
const Users = () => {
    const [users, setusers] = useState([]);
    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then((res) => {
    setusers(res.data);
} )
    
}, []);
return (
   <Fragment>
       <h1>List of users</h1>
       {users.map((users)=>(
       <div>{users.name}</div>

       )
       )}
   </Fragment>
);
};

export default Users;