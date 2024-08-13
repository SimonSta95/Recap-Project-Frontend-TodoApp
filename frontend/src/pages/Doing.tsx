import {useEffect, useState} from "react";
import axios from "axios";
import SingleGallery from "../components/SingleGallery/SingleGallery.tsx";
import AddTodo from "../components/AddTodo/AddTodo.tsx";

type Item = {
    id: string,
    description: string,
    status: string
}

export default function Doing() {
    const [data, setData] = useState([])

    useEffect(() => {
        loadTodos()
    }, [])

    function loadTodos() {
        axios.get("api/todo")
            .then((response) => {
                setData(response.data)
            })
            .catch((error) => {
                alert(error.message)
            })
    }

    const filtered = data.filter((item:Item) => item.status === "IN_PROGRESS")

    return(
        <>
            <h1>DOING</h1>
            <SingleGallery items={filtered}/>
            <AddTodo/>
        </>
    )
}