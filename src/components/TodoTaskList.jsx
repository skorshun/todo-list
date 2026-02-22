import EmptyList from "./EmptyList.jsx";
import TaskItem from "./TaskItem.jsx";
import FilterNoMatches from "./FilterNoMatches.jsx";

const TodoTaskList = ({tasks, filteredTasks, filter, onToggle, onDelete}) => {
    if (tasks.length === 0) return <EmptyList />;
    if (!filteredTasks.length) return <FilterNoMatches filter={filter} />

    return (
        <ul className="list" aria-label="Tasks list">
            {filteredTasks.map(task => (
                <TaskItem
                    key={task.id}
                    task={task}
                    onDelete={onDelete}
                    onChange={onToggle}
                />
            ))}
        </ul>
    )
}

export default TodoTaskList