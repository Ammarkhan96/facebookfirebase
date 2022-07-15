import { useState } from "react";
import { signUp } from '../../config/firebase'

function Signup() {
    const [userinfo, setUserInfo] = useState ({})

    const signup = () => {
        signUp(userinfo)
    }

    const updateForm = (e, key) => {
        setUserInfo({...userinfo, [key]: e.target.value})
    }

    return (
        <div style={{background: 'gray', height: 300, width: 300}}>
            <h1>Sign Up</h1>

            <input
            type={"text"}
            onChange={(e) => updateForm(e, "name")}
            placeholder='Enter Name'
            />

            <input
            type={"email"}
            onChange={(e) => updateForm(e, "email")}
            placeholder='Enter email'
            />

            <input
            type={"password"}
            onChange={(e) => updateForm(e, "password")}
            placeholder='Enter password'
            />

            <br/>
            <button onClick={signup}>Sign Up</button>
        </div>
    )
}

export default Signup