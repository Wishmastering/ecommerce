import React, {useState, useEffect} from "react"
import axios from 'axios';

// =============================
// =============================
// ESTE ES EL COMPONENTE QUE TENDRA UN TERNARIO QUE MOSTRARA
// LOGIN O SIGNUP DEPENDIENDO DEL VALOR METHOD
// =============================
// =============================

export default function Method({method}){
    return<>
        { method == "signup" ? <Signup method={method} /> : <Login method={method} /> }
    </>
}



// =============================
// =============================
// ESTE ES EL COMPONENTE SIGNUP
// =============================
// =============================

 function Signup({method}){


    // Creamos un objeto que almacenara "todos los datos del form"
    // el objeto contiene los 3 datos que debemos enviar en el POST request
    const [post, setPost] = useState(
        { 
            username: '',
            email: '', 
            password: '' 
        });
    
    const updateEmail = newValue => {
        setPost({ ...post, email: newValue });
    };
    
    const updateUsername = newValue => {
        setPost({ ...post, username: newValue });
    };

    const updatePassword = newValue => {
        setPost({ ...post, password: newValue });
    };

    // Asumimos que el usuario "pondra un correo valido"
    let [isEmail, setIsEmail] =   useState(true)

    
    // Esta funcion valida si es un correo o no, y "practicamos" un callback 
    // llamandola en "submit"

    function validateEmail(){
        if(  post.email.indexOf("@")>-1 && post.email.indexOf(".com">-1)){
            axios.post('https://charlytocapi.onrender.com/api/register/', {
                "username": post.username,
                "email": post.email,
                "password": post.password
              })
              .then(function (response) {
                console.log(response.data.user);
              })
              .catch(function (error) {
                console.log(error);
              });
            return
        }
         setIsEmail(false)
    }

    
    // Esta funcion es para el boton submit y enviar el post al back de charlie
    // Se hace un callback
     function submit(e){
        // e.preventDefault() ayuda a que "la pagina no se renderice de nuevo"
        // Entonces por eso hacemos esto para evitar el 
        // "default del Form de renderizar de nuevo"
        
        e.preventDefault()
        validateEmail(post.email)
        
        setTimeout(() => {
            setIsEmail(true)
        }, 4000);   
    }

    return<>
        <h1>Welcome to the {method}</h1>
        <div className="login">
            <form>
                {/* Username en este div a continuacion */}
                <div>
                    <h1>Username</h1>
                    <input placeholder="Username" value={post.userbane} onChange={(e)=> updateUsername(e.target.value)}  />
                </div>

                {/* eMail en este div a continuacion */}
                <div>    
                <h1>Email</h1>
                    <input placeholder="e-Mail" value={post.email} onChange={(e)=> updateEmail(e.target.value)} type="email"  />
                </div>

                {/* Password en este div a continuacion */}
                <div>    
                <h1>Password</h1>
                    <input placeholder="Password" value={post.password} onChange={(e)=> updatePassword(e.target.value)} type="password"  />
                </div>

                {/* Button */}
                <button onClick={(e)=>submit(e)} type="submit">
                    Submit
                </button>
            </form>
            <button onClick={()=> console.log(post)}>
                SEE THE POST OBJECT
            </button>
            {isEmail ? null : <Validate/>}
        </div>
    </>
}

// =============================
// =============================
// ESTO ES EL COMPONENTE LOGIN 
// =============================
// =============================
function Login(props){
    return<>
        <p>Soy el {props.method}</p>
    </>
}

// =============================
// =============================
// ESTO ES EL COMPONENTE DE VALIDACION DE CORREO
// =============================
// =============================
function Validate(){
    return<>
        <p>Porfavor Ingresa Un Correo Valido</p>
    </>
}

