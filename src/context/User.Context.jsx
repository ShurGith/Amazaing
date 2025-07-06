import { createContext, useState } from "react";

const UserContext = createContext()

function UserProvider(props){
    const [user, setUser] = useState("Juan")
    return(
        <UserContext.Provider value={{
            user, setUser,
         }}>
            {props.children}
        </UserContext.Provider>
    )
}

export {UserContext, UserProvider}