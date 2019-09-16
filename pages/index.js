import {useState} from "react"
export default () => {
    const [value, setValue] = useState({message: "Getting data, please wait..."})
    
    const getData = async event => {
        const response = await fetch ("/api/api")
    
        setValue(await response.json())
    }

    return (
    <div>
    <div>{value.message}</div>
    <button 
    style={{ color: 'orange' }}
    onClick={getData}>Get Data</button> 
    </div>
    )
}