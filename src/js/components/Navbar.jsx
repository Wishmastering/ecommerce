import "../../styles/index.css"
import { Link } from "react-router-dom"
import { useContext } from "react"
import ThemeContext from "../context/context"


    
export default function Navbar(){
    
    const [mode,methods] = useContext(ThemeContext)
    
    return<>
    <nav className="nav">  
            
            <h1>  <Link to="/"> Logo Here </Link>  </h1> 
            <div>
                <Link to="/login">  <h3>Login</h3>  </Link>
                <Link to="/signup"> <h3>Signup</h3> </Link>
                <button className={`button ${mode.theme}`} 
                 onClick={methods.setTheme}> 
                    Change {mode.theme} Mode 
                </button>
                
                {/* Ambas classname son formas de concatenar strings */}
                {/* <button className={"button " + {mode}} onClick={changeMode}> Change {mode} Mode </button> */}
            </div>
        
    </nav>
        
    </>
}