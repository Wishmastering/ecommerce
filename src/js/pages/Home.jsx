import { useState, useEffect } from "react"

export default function Home({color, setColor}){
    
    // Ejemplo de un Carrusel
// let arr = [100,21,33,432,55]
// const [active, setActive] = useState(0)

// const updateActive = () =>{
//     if(active === (arr.length-1)){
//         console.log(active)
//         setActive(0)
//         console.log("Ya")
        
//     }else{    
//         setActive (active + 1)
//     }
// }
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

    const changeColor = ()=>{
        color === "Verde" ? setColor("Blue") : setColor("Verde")
    }

    useEffect(()=>{
        fetching();
    }, [])

    return<>
        <h1 onClick={()=> changeColor()}>{color} , Clickeame y cambio entre VERDE y AZUL</h1>
        <h1>Soy el Home</h1>
        <p>Hey</p>
        <button onClick={()=>console.log(characters)}> Click Me </button>
        { characters===[] ? "Hola Charlytoc gracias por la ayuda" : 
        characters.map((item,index) =>
            <li key={index} >
                {item}
            </li>
        )
        }
    </>
}