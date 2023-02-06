import React, {useState, useEffect, useContext} from "react"
import axios from 'axios';
import ThemeContext from "../context/context";

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

    const [mode, methods] = useContext(ThemeContext)

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
                methods.setId(response.data.user.id)
                console.log(response.status)
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

        // practicando un callback, aunque TODO podria ir en misma funcion
        validateEmail(post.email)
        
        setTimeout(() => {
            setIsEmail(true)
        }, 4000);   
    }

    return<>
        <h1>Welcome to the {method}</h1>
        <div className="signup">
            <form>
                {/* Username en este div a continuacion */}
                <div>
                    <h1>Username</h1>
                    <input placeholder="Username" value={post.username} onChange={(e)=> updateUsername(e.target.value)}  />
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
            <button onClick={()=> console.log(mode.id)}>
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
    
    const [mode, methods] = useContext(ThemeContext)

    return<>
        <p onClick={methods.setTheme}>{mode.theme}</p>
        <p>Soy el {props.method}</p>
        <p className={mode.theme}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta quam ratione, minus vel natus similique animi quaerat consectetur? Ad necessitatibus recusandae ipsa possimus quae vitae nesciunt! Beatae eligendi commodi nam, voluptatum illo reiciendis. Consequatur illo neque inventore dolorem, in ut perspiciatis nam aut voluptates temporibus vero esse aliquid suscipit! Ducimus dolor possimus quidem recusandae pariatur provident rem dolorum quaerat perferendis! Aperiam ipsam omnis eos provident atque sit quae! Ducimus placeat mollitia dolor voluptatem repellendus minus suscipit quaerat quis veritatis qui magni, voluptatibus numquam ipsum iste quam autem omnis aperiam nemo! Enim cumque pariatur maxime adipisci repudiandae veniam accusantium officia. Aliquam iusto delectus error, eaque nisi quo amet animi debitis fuga similique odio eos voluptas fugit rem impedit perferendis facilis, assumenda, sed mollitia? Suscipit debitis corrupti dolore explicabo doloribus quam accusantium, iste soluta id. Sapiente voluptatem perferendis dolor ullam explicabo beatae eos doloremque voluptates expedita placeat, quod iure tempore quis, mollitia esse nemo, aspernatur deserunt debitis obcaecati animi ex autem! A illum minima sequi deleniti quae nobis recusandae quidem? Tenetur possimus accusantium facilis quia perferendis quisquam consequatur commodi, alias corporis recusandae atque aspernatur maiores numquam error, accusamus, officia ab eligendi dolor culpa ex aperiam dignissimos animi? Repellat non voluptates corrupti consectetur alias quas iure odio voluptatum aut delectus, ratione fugit accusamus voluptate officiis quae fuga est exercitationem libero explicabo possimus distinctio. Mollitia at, rem incidunt quidem obcaecati debitis reiciendis aperiam delectus ipsum laboriosam et facilis odio nobis veritatis perferendis placeat quo commodi sed nihil quibusdam cum qui explicabo voluptates! At, minima minus nihil perspiciatis vel doloribus voluptatem nostrum eum exercitationem iste dolorum nesciunt tempore fugiat doloremque voluptatibus sunt similique sed. Debitis neque repellendus totam molestiae quaerat esse inventore accusantium sequi assumenda recusandae, quis voluptatum voluptates quasi quos mollitia laudantium reiciendis! Ut, unde error libero temporibus suscipit inventore doloribus necessitatibus sequi sit aspernatur praesentium eos illo modi rem esse aut corrupti perspiciatis mollitia aliquid nostrum soluta laborum ullam sint voluptatum? Ratione illum voluptas fugiat nam porro facere odit deserunt. Doloribus possimus voluptates asperiores ad repudiandae quos odio explicabo odit ipsum. Ex quam distinctio, saepe rerum fuga facilis iusto dolore dignissimos atque possimus quis recusandae est consectetur ratione praesentium consequatur hic debitis nam ducimus facere. Ullam quisquam ut cumque dolorem ipsam? Expedita et autem ipsam enim sapiente ratione eos, nihil, omnis nemo, nostrum atque tempora blanditiis ea sed! Maxime quas est voluptate delectus, assumenda culpa temporibus dicta doloremque eos laborum tempora nam neque repudiandae aspernatur voluptatum accusantium necessitatibus quaerat magni debitis voluptas tenetur ipsa sint! Porro error provident excepturi optio maiores, quos accusantium natus? Similique, veniam. Enim impedit facere alias officiis harum eum deserunt, sint vero vel aspernatur quasi, itaque a ullam amet obcaecati quis dolorum, dolor atque eligendi! Soluta, sed cupiditate odit consequatur architecto cum placeat quam? Officia accusamus, minima debitis expedita repellat nobis quidem eum fugit animi tenetur rem molestias esse, veritatis dolore odio repellendus impedit assumenda eligendi placeat amet, beatae tempora culpa asperiores quas? Magnam eius iste inventore amet aspernatur doloremque laboriosam expedita itaque, deleniti corporis recusandae! Vel, aspernatur qui!</p>
    </>
}

// =============================
// =============================
// ESTO ES EL COMPONENTE DE VALIDACION DE CORREO
// =============================
// =============================
function Validate(){
    return<>
        <p>Porfavor Ingresa Un Correo Valido Aca</p>
    </>
}

