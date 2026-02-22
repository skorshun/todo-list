import {useRef, useState} from "react";

const TodoForm = ({onAdd}) => {
    const [text, setText] = useState("")
    const inputRef = useRef(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        const value = text.trim()

        if (!value) return

        onAdd(value)
        setText("")
        inputRef.current?.focus()
    }

    return (
        <form onSubmit={handleSubmit} className="todo-form" autoComplete="off">
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
                disabled={!text.trim()}
            >
                Add task
            </button>
        </form>
    )
}

export default TodoForm