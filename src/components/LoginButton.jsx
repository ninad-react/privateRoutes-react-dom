import { useState } from 'react'

const USER_DUMMY1 = {
    id: 1,
    name: "John",
    permissions: ["admin", "dashboard"],
    roles: ["admin"],
}

const USER_DUMMY2 = {
    id: 2,
    name: "John",
    permissions: ["admin"],
    roles: ["admin"],
}

const USER_DUMMY3 = {
    id: 3,
    name: "John",
    permissions: ["dashboard"],
    roles: [],
}

const LoginButton = ({user, setUser}) => {

    const[userLogged, setUserLogged] = useState(null);

    const handleLogin = () => {
        setUser(userLogged)
    }

    const handleLogOut = () => {
        setUser(null);
        setUserLogged(null);
    }

  return (
    <div>
        {!user ? 
         <button onClick={handleLogin}>Login</button> : 
         <button onClick={handleLogOut}>Logout</button>
        }

        {!user && (
            <div>

                <button
                 className={userLogged?.id === 1 && "active"}
                 onClick={() => {setUserLogged(USER_DUMMY1)
                }}
                >
                    User 1
                </button>

                <button 
                 className={userLogged?.id === 2 && "active"}
                 onClick={() => {setUserLogged(USER_DUMMY2)
                }}
                >
                    User 2
                </button>

                <button
                 className={userLogged?.id === 3 && "active"}
                 onClick={() => {setUserLogged(USER_DUMMY3)
                }}
                >
                    User 3
                </button>
            </div>
        )}

    </div>
  )
}

export default LoginButton