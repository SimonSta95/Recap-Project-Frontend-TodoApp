import TodoItem from "../TodoItem/TodoItem.tsx";

type Item = {
    id: string,
    description: string,
    status: string
}

type TodoItemProps = {
    items: Item[];
}

export default function SingleGallery(props: TodoItemProps) {
    const openItems = props.items.map((item) => <TodoItem key={item.id} item={item} />);

    return(
        <>
            {openItems}
        </>

    )
}