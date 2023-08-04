import UserComponent from "../UserComponent/UserComponent";
import {useEffect, useState} from "react";
//import {users,users1} from "../../assets/users";

export const UserContainer = () => {
   //const allUsers = [...users, ...users1]
    const [users, setUsers] = useState([])
    const [errors,setErrors] = useState([])

    useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
        .then((res)=>res.json())
        .then((users) =>  setUsers(users))
        .catch((errors)=>setErrors(errors))
    },[])
    const handleClick =(value)=>{
        alert(`user id is ${value}`);
    }
    const handleDelete = (id)=>{
        setUsers([...users].filter((user) => user.id !== id))
    }

    return (
        <div>
            {users?.map((user, id) =>{
                user.phone = '+' + user.phone
                return(
                    <UserComponent
                    key={id}
                    user={user}
                    handleClick={handleClick}
                    handleDelete={handleDelete}
                    />
                )
            })}
        </div>
    );
};
