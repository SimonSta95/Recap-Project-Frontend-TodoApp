import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

type Item = {
    id: string,
    description: string,
    status: string
}

export default function Detail() {

    const [data, setData] = useState<Item>();
    const params = useParams()

    console.log(data)
    useEffect(() => {
        loadTodo()
    }, [])

    function loadTodo() {
        axios.get("/api/todo/" + params.id)
            .then((response) => {
                setData(response.data)
            })
            .catch((error) => {
                alert(error.message)
            })

    }

    return (
        <>
            <div className="detailsContainer">
                <p>Id: {data.id}</p>
                <p>Description: {data.description}</p>
                <p>Status: {data.status}</p>
            </div>
        </>
    )
}