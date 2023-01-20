import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

export default function Home(){
    
    const [characters, setCharacters] = useState([])
    
    const fetching = ()=> {
        fetch('https://rickandmortyapi.com/api/character/1,2,3,4',{
            method: 'GET',
            // headers: {
            //     'Content-Type': 'application/json'
            //   },
            //   body: JSON.stringify({
            //     title: 'foo',
            //     body: 'bar',
            //     userId: 1
            //   })
        })
        .then(response => response.json())
        .then(data => setCharacters([...characters,...data.map((item) => item.name)]))
    }

    useEffect(()=>{
        fetching();
    }, [])

    return<>
        <div className="home">
            <h1>Soy el Home</h1>
            <button>  <Link to="/login"> Click Me</Link> </button>
            { characters===[] ? "Hola Charlytoc gracias por la ayuda" : 
            characters.map((item,index) =>
                <li key={index} >
                    {item}
                </li>
            )
            }
        </div>
    </>
}