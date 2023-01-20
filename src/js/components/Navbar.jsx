import "../../styles/index.css"
import { Link } from "react-router-dom"

export default function Navbar(){
    return<>
    <nav className="nav">  
            
                <h1>  <Link to="/"> Logo </Link>  </h1> 
            <div>
                <h3>Login</h3>
                <h3>Signup</h3>
            </div>
        
    </nav>
        
    </>
}