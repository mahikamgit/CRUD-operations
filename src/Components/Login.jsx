import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
    const uname = useRef(null);
    const pword = useRef(null);
    const navigate = useNavigate();

    const Check = ()=> {
        uname.current.value === "Mahendra" &&
        pword.current.value === "Mahi@1234"?navigate("/Register"):navigate("/Error");
    }

    return (
        <div className="container">
           <h1>Enter Username</h1>
           <input type="text" placeholder="Enter Username"  ref={uname}/> <br />
           <h1>Enter Password</h1>
           <input type="password" placeholder="Enter Password" ref={pword}/> <br />
           <button onClick={Check}>Signin</button>
        </div>
    )
};
export default Login;