import { useState } from "react";
import { login } from "../../config/firebase";

function Signin() {
  const [userinfo, setUserInfo] = useState({});

  const signin = () => {
    const { email, password } = userinfo;

    login(email, password);
  };

  const updateForm = (e, key) => {
    setUserInfo({ ...userinfo, [key]: e.target.value });
  };

  return (
    <div style={{ background: "gray", height: 300, width: 300 }}>
      <h1>Login</h1>

      
      <input
        type={"email"}
        onChange={(e) => updateForm(e, "email")}
        placeholder="Email"
      />
      <input
        type={"password"}
        onChange={(e) => updateForm(e, "password")}
        placeholder="Password"
      />
      <br />
      
      <button onClick={signin}>Login</button>
    </div>
  );
}
export default Signin;