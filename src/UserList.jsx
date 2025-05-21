import React, { useEffect, useState } from 'react';

function UserList(){
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((data) => {
                setUsers(data)
                setLoading(false)
            })
            
            .catch((err) => {
                console.error("occured failed", err);
                setLoading(false)
            })
    },[])

    if(loading){
        return <p>Load data ...</p>
    }

    return(
        <>
           <h2>List Users</h2>
                <ul>
                    {users.map((data) => (
                        <li key={data.id}>
                            {data.name} {data.email} 
                        </li>
                    ))}   
                </ul>
        </> 
    )
}

export default UserList