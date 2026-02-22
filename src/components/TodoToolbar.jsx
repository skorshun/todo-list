const FILTERS = [
    { key: "all", label: "All" },
    { key: "active", label: "Active" },
    { key: "completed", label: "Completed" },
];

const TodoToolbar = ({filter, onFilterChange, onClearCompleted, canClearCompleted}) => {
    return (
        <div className="toolbar">
            <div className="filters" role="tablist" aria-label="Filter">
                {FILTERS.map((f) => (
                    <button
                        key={f.key}
                        onClick={() => onFilterChange(f.key)}
                        className={`chip ${filter === f.key ? "chip--active" : ""}`}
                        type="button"
                    >
                        {f.label}
                    </button>
                ))}
            </div>

            <button
                onClick={onClearCompleted}
                className="btn btn--ghost"
                type="button"
                disabled={!canClearCompleted}
            >
                Clear completed
            </button>
        </div>
    )
}

export default TodoToolbar