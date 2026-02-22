import {useRef, useState} from "react"
import TaskItem from "./TaskItem.jsx"
import EmptyList from "./EmptyList.jsx"
import Footer from "./Footer.jsx"
import "./css/todo.css"

const Todo = () => {
    const [tasks, setTasks] = useState([])
    const [filter, setFilter] = useState("all")
    const [text, setText] = useState("")
    const inputRef = useRef(null) // only for focus

    const filteredTasks = tasks.filter(task => {
        if (filter === "completed") return task.completed
        if (filter === "active") return !task.completed
        return true;
    })

    const addTask = (e) => {
        e.preventDefault()
        const value = text.trim()

        if (value) {
            setTasks(prev => [...prev, {
                id: crypto.randomUUID(),
                text: value,
                completed: false
            }])

            inputRef.current?.focus();
            setText("")
        }
    }

    const removeTaskFromList = id => setTasks(
        prevTasks => prevTasks.filter(task => task.id !== id)
    )

    const toggleTaskStatus = id => {
        setTasks(prevTasks =>
            prevTasks.map(task =>
                task.id === id ? {...task, completed: !task.completed } : task
            )
        );
    }

    const completedTasks = tasks.filter(task => task.completed)

    const removeCompletedTasks = () => {
        setTasks(prevTasks => prevTasks.filter(task => !task.completed))
    }

    return (
        <main className="app">
            <header className="app__header">
                <h1 className="app__title">Todo</h1>
            </header>

            <section className="card">
                <form onSubmit={addTask} className="todo-form" autoComplete="off">
                    <label className="sr-only" htmlFor="todo">New task</label>
                    <input
                        ref={inputRef}
                        onChange={(e) => setText(e.target.value)}
                        id="todo"
                        className="input"
                        placeholder="For example: learn useEffect"
                        value={text}
                    />
                    <button
                        className="btn btn--primary"
                        type="submit"
                        disabled={!text}
                    >
                        Add task
                    </button>
                </form>

                <div className="toolbar">
                    <div className="filters" role="tablist" aria-label="Фильтр">
                        <button
                            onClick={() => setFilter('all')}
                            className={`chip ${filter === "all" ? "chip--active" : ""}`}
                            type="button"
                        >
                            All
                        </button>
                        <button
                            onClick={() => setFilter('active')}
                            className={`chip ${filter === "active" ? "chip--active" : ""}`}
                            type="button"
                        >
                            Active
                        </button>
                        <button
                            onClick={() => setFilter('completed')}
                            className={`chip ${filter === "completed" ? "chip--active" : ""}`}
                            type="button"
                        >
                            Completed
                        </button>
                    </div>

                    <button
                        onClick={removeCompletedTasks}
                        className="btn btn--ghost"
                        type="button"
                        disabled={completedTasks.length === 0}
                    >
                        Clear completed
                    </button>
                </div>

                <ul className="list" aria-label="Tasks list">
                    {filteredTasks.map(task => {
                        return <TaskItem
                            key={task.id}
                            task={task}
                            onDelete={removeTaskFromList}
                            onChange={toggleTaskStatus}
                        />
                    })}
                </ul>

                {!filteredTasks.length ? <EmptyList/> : null}

                <Footer
                    totalTasks={tasks.length}
                    completedTasks={completedTasks.length}
                />
            </section>
        </main>
    )
}

export default Todo