import {useState} from "react"
import Footer from "./Footer.jsx"
import "./css/todo.css"
import TodoForm from "./TodoForm.jsx";
import TodoToolbar from "./TodoToolbar.jsx";
import TodoTaskList from "./TodoTaskList.jsx";

const Todo = () => {
    const [tasks, setTasks] = useState([])
    const [filter, setFilter] = useState("all")

    const addTask = (value) => {
        const text = value.trim();

        if (!text) return;

        setTasks(prev => [...prev, {
            id: crypto?.randomUUID?.() ?? String(Date.now()),
            text: text,
            completed: false
        }])
    }

    const filteredTasks = tasks.filter(task => {
        if (filter === "completed") return task.completed
        if (filter === "active") return !task.completed
        return true;
    })

    const removeTaskFromList = id =>
        setTasks(prevTasks => prevTasks.filter(task => task.id !== id))

    const toggleTaskStatus = id =>
        setTasks(prevTasks =>
            prevTasks.map(task =>
                task.id === id ? {...task, completed: !task.completed } : task
            )
        );

    const removeCompletedTasks = () =>
        setTasks(prevTasks => prevTasks.filter(task => !task.completed))

    const completedTasksCount = tasks.reduce((n, t) => n + (t.completed ? 1 : 0), 0)

    return (
        <main className="app">
            <header className="app__header">
                <h1 className="app__title">Todo</h1>
            </header>

            <section className="card">
                <TodoForm onAdd={addTask} />
                <TodoToolbar
                    filter={filter}
                    onFilterChange={setFilter}
                    onClearCompleted={removeCompletedTasks}
                    canClearCompleted={completedTasksCount > 0}
                />

                <TodoTaskList
                    tasks={tasks}
                    filter={filter}
                    filteredTasks={filteredTasks}
                    onToggle={toggleTaskStatus}
                    onDelete={removeTaskFromList}
                />

                <Footer
                    totalTasks={tasks.length}
                    completedTasks={completedTasksCount}
                />
            </section>
        </main>
    )
}

export default Todo