import "../../styles/index.css"

export default function Navbar(props){
    return<>
    <nav className="nav">  
            
                <h1> Logo </h1> 
            <div>
                <h3>Login</h3>
                <h3>Signup</h3>
                <h3>{props.color}</h3>
            </div>
        
    </nav>
        
    </>
}