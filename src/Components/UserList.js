import axios from 'axios'
import React, { useEffect, useState } from 'react'
import UserCard from './UserCard'

const UserList = () => {
    const [users, setUsers] = useState([])
    // .get: Tjib biha 7aja mawjoda
    useEffect(() => {
        axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((res) => setUsers(res.data))
        .catch((err) => console.log(err))
    }, [])
    
    return (
        <div className="UserList">
            <div>
                {
                users.map(
                    (el) => (
                            <UserCard user={el} key={el.id} />
                             )
                        )
                }
            </div>
        </div>
    )
}

export default UserList