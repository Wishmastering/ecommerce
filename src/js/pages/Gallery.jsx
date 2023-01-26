import React, {useState} from "react"

export default function Gallery(){
    
    let arr = [
        {url: "bla", 
        descripcion: "Hello"}, 
        
        {url: "bla 2", 
        descripcion: "Hello 2"}, 
        
        {url: "bla 3", 
        descripcion: "Hello 3"}, 
        
        {url: "bla 4", 
        descripcion: "Hello 4"}
    ]

    let [counter, setCounter] = useState(0)

    function next(next){
        console.log(counter)
        if(next){
            if( counter === (arr.length-1)){
                return setCounter (0)
            }
            return setCounter(counter + 1)
        }
        
        if( counter === 0){
            return setCounter (arr.length-1)
        }
        return setCounter(counter - 1)
    
    }
    
    return<>
        <h1>{arr[counter].url}</h1>
        <div>
            <button onClick={()=>next()}> Previous </button>
            <button onClick={()=>next("Next")}> Next </button>
        </div>
    </>
}