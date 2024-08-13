import TodoGallery from "../components/TodoGallery/TodoGallery.tsx";
import AddTodo from "../components/AddTodo/AddTodo.tsx";
import {useEffect, useState} from "react";
import axios from "axios";

export default function Home() {
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

    return(
        <>
            <TodoGallery items={data}/>
            <AddTodo/>
        </>
    )
}