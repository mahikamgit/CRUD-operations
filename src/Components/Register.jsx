import {Link } from "react-router-dom";

const Register = () => {

    return (
        <div>
           <h1>Welcome to Registation page</h1>
           <Link to="/Product" style={{marginRight:30}} className="link">Product</Link>
            <Link to="/Props" style={{marginRight:30}} className="link">Props</Link>
            <Link to="/DataAPI" style={{marginRight:30}} className="link">DataAPI</Link>
            
        </div>
    )
};
export default Register;