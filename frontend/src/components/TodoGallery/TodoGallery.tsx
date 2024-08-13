import "./TodoGallery.css"
import TodoItem from "../TodoItem/TodoItem.tsx";

type Item = {
    id: string,
    description: string,
    status: string
}

type TodoItemProps = {
 items: Item[];
}

export default function TodoGallery(props: TodoItemProps) {

    const openItems = props.items.filter((item) => item.status === "OPEN")
                                                .map((item) => <TodoItem key={item.id} item={item} />);

    const doingItems = props.items.filter((item) => item.status === "IN_PROGRESS")
                                                .map((item) => <TodoItem key={item.id} item={item} />);

    const doneItems = props.items.filter((item) => item.status === "DONE")
                                                .map((item) => <TodoItem key={item.id} item={item} />);


    return(
        <div className="gallery-container">
            <div className="open">
                <h2>OPEN</h2>
                {openItems}
            </div>
            <div className="doing">
                <h2>DOING</h2>
                {doingItems}
            </div>
            <div className="done">
                <h2>DONE</h2>
                {doneItems}
            </div>
        </div>


    )
}