function PaginationBlock({ currentPageNumber, totalPagesAmount, onPageChange }) {

	return (
		<div className="pagination">
			{
				totalPagesAmount > 1 && <button type="button" disabled={currentPageNumber === 1} onClick={() => onPageChange(currentPageNumber - 1)} >&lt;</button>
			}
			{
				Array.from({ length: totalPagesAmount }).map((_, index) => (
					<button className={index + 1 === currentPageNumber ? 'active' : ''} type="button" key={index} onClick={() => onPageChange(index + 1)}>{index + 1}</button>
				))
			}
			{
				totalPagesAmount > 1 && <button type="button" disabled={currentPageNumber === totalPagesAmount} onClick={() => onPageChange(currentPageNumber + 1)}>&gt;</button>
			}
		</div>
	)
}

export default PaginationBlock