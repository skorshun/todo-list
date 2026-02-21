const TaskItem = ({task, onDelete, onChange}) => {
    return (
        <li className={`item ${task.completed ? 'item--done' : ''}`}>
            <label className="item__left">
                <input
                    onChange={() => onChange(task.id)}
                    type="checkbox"
                    checked={task.completed}
                    className="checkbox"
                />
                <span className="item__text">{task.text}</span>
            </label>
            <div className="item__right">
                <span className={`badge ${task.completed  ? 'badge--done' : ''}`}>
                    {task.completed ? 'completed' : 'todo'}
                </span>
                <button
                    onClick={() => onDelete(task.id)}
                    className="icon-btn"
                    type="button"
                    aria-label="Remove">✕
                </button>
            </div>
        </li>
    )
}

export default TaskItem