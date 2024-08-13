import './App.css'
import Header from "./components/Header/Header.tsx";
import TodoGallery from "./components/TodoGallery/TodoGallery.tsx";
import AddTodo from "./components/AddTodo/AddTodo.tsx";

function App() {


  return (
    <>
        <Header/>
        <TodoGallery/>
        <AddTodo/>
    </>
  )
}

export default App
