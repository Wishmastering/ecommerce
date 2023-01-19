import { useState } from "react"
export default function Home(){
    
let arr = [100,21,33,432,55]
const [active, setActive] = useState(0)

const updateActive = () =>{
    if(active === (arr.length-1)){
        console.log(active)
        setActive(0)
        console.log("Ya")
        
    }else{    
        setActive (active + 1)
    }
}

    return<>
        <h1>Soy el Home</h1>
        <p>{arr[active]}</p>
        <button onClick={()=> updateActive()}> Click Me </button>
    </>
}