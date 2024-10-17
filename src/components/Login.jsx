import { useContext, useState } from "react"
import { userContext } from "../App"

export default function Login(){
const {user, setUser} = useContext(userContext);
const [value, setValue] = useState("");

function handleSubmit(e){
e.preventDefault();
setUser(value);
}
return (
    <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={(e)=>setValue(e.target.value)} placeholder="Enter your name"/>
        <button type="submit">Submit</button>
    </form>
)
}