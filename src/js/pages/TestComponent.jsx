import React, {useContext} from "react";
import ThemeContext from "../context/context";


export default function Test(){

    const [mode, methods] = useContext(ThemeContext)

    return<>
        <input value={mode.id} onChange={(e)=> methods.setId(e.target.value)}  />
        <p>Testing Bitch</p>
        <button onClick={methods.displayId}> Display Id</button>
    </>
}