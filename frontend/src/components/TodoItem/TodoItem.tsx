import "./TodoItem.css"
import axios from "axios";
import {Link} from "react-router-dom";

type Item = {
    id: string,
    description: string,
    status: string
}

type TodoItemProps = {
    item: Item;
}

export default function TodoItem(props: TodoItemProps) {

    const deleteItem= (id:string) => {
        axios.delete("api/todo/" + id)
    }

    return(
        <Link to={"/detail/" + props.item.id}>
            <div className="card">
                <p>Id: {props.item.id}</p>
                <p>Description: {props.item.description}</p>
                <p>Status: {props.item.status}</p>
                <button onClick={()=>deleteItem(props.item.id)}>Delete</button>
            </div>
        </Link>
    )
}