import {useEffect, useState} from "react";
import axios from "axios";
import AddTodo from "../components/AddTodo/AddTodo.tsx";
import SingleGallery from "../components/SingleGallery/SingleGallery.tsx";

type Item = {
    id: string,
    description: string,
    status: string
}

export default function Open() {
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

    const filtered = data.filter((item:Item) => item.status === "OPEN")

    return(
        <>
            <h1>OPEN</h1>
            <SingleGallery items={filtered}/>
            <AddTodo/>
        </>
    )
}