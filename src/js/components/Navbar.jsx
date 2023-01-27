import "../../styles/index.css"
import { Link } from "react-router-dom"

export default function Navbar(){
    return<>
    <nav className="nav">  
            
                <h1>  <Link to="/"> Logo Here  </Link>  </h1> 
            <div>
                <Link to="/login">  <h3>Login</h3>  </Link>
                <Link to="/signup"> <h3>Signup</h3> </Link>
            </div>
        
    </nav>
        
    </>
}