import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

type Item = {
    id: string,
    description: string,
    status: string
}

export default function Detail() {


    const [data, setData] = useState<Item>({});
    const [todo, setTodo] = useState<Item>({});
    const params = useParams()

    console.log(todo)
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

    const inputs = ["OPEN", "IN_PROGRESS", "DONE"]

    return (
        <>
            <div className="detailsContainer">
                <p>Id: {data.id}</p>
                <p>Description: {data.description}</p>
                <p>Status: {data.status}</p>
            </div>
            <h2>Update Data</h2>
            <div className="detailsContainer">
                <label>Description: </label>
                <input type="text" value={data.description} onChange={(event)=>{setTodo({...data,description: event.target.value})}}/>
                <label>Status: </label>
                <div className="status-radio">
                    {
                        inputs.map(input => (
                            <div key={input}> <label> {input}</label>
                                <input type="radio" name="status" value={input} checked={input === data.status}
                                       onChange={(event)=> {setTodo({...data,status: event.target.value})}} />
                            </div>
                        )
                        )
                    }


                </div>
                <button>Update</button>
            </div>
        </>
    )
}