const FilterNoMatches = ({filter}) => {
    return (
        <div className="empty">
            <p className="empty__title">No matches</p>
            <p className="empty__text">Nothing for filter: <b>{filter}</b></p>
        </div>
        )
}

export default FilterNoMatches