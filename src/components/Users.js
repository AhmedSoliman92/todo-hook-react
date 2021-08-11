import useResource from "./useResources";

const Users= ()=>{
    const users= useResource('users')
    return(
        <ul>
            {users.map( user =>(
                <li key={user.id}>{user.name}</li>
            ))}
        </ul> 
    )
    }
export default Users;