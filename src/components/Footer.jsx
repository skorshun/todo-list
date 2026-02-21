const Footer = ({totalTasks, completedTasks}) => (
    <footer className="footer">
        <span className="muted">Total: {totalTasks}</span>
        <span className="muted">Completed: {completedTasks}</span>
    </footer>
)

export default Footer