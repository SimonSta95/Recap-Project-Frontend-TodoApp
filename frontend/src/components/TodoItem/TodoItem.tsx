import "./TodoItem.css"

type Item = {
    id: string,
    description: string,
    status: string
}

type TodoItemProps = {
    item: Item;
}

export default function TodoItem(props: TodoItemProps) {

    return(
        <div className="card">
            <p>Id: {props.item.id}</p>
            <p>Description: {props.item.description}</p>
            <p>Status: {props.item.status}</p>
        </div>
    )
}