import axios from "axios";
import {useState} from "react";

type Item = {
     description: string,
     status: string
}

export default function AddTodo() {

    const [post, setPost] = useState<Item>({description: "", status:"OPEN"});

    const addTodo = () => {
        axios.post("api/todo",post)
    }

    return(
        <>
            <h3>Add a new Todo</h3>
            <label>Description: </label>
            <input type="text" onChange={(event) => {setPost({...post,description:event.target.value})}}/>
            <button onClick={() => addTodo()}>Add</button>
        </>
    )
}