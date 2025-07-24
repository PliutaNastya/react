function ShowMoreButton({ currentPageNumber, totalPagesAmount, onPageChange }) {

	return (
		<>
			{(totalPagesAmount > 1 && currentPageNumber < totalPagesAmount) &&  <button type="button" className="button button--show-more" onClick={() => onPageChange(currentPageNumber + 1)}>Показати більше</button>}
		</>
	)
}

export default ShowMoreButton