
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {

const [username, setUsername] = useState("")
const [password, setPassword] = useState("")
const [error, setError] = useState("")

function handleLoginBtn(){
    if(!username || !password){
      setError("Both username and password are required")
    }
}

  return (
    <div>
        {/* Do not remove the main div */}
        Username: <input type="text" onChange={(e)=>setUsername(e.target.value)} value={username}/><br/><br/>
        password: <input type="password" onChange={(e)=>setPassword(e.target.value)} value={password} />
        <p id="errorMessage" style={{color:"red"  }}>{error}</p>
        <button onClick={handleLoginBtn}>Login</button>
    </div>
  )
}

export default App
