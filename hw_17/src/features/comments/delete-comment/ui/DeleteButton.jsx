function DeleteButton({handleDelete, isDeleting}) {
	return ( 
		<button
			onClick={handleDelete} disabled={isDeleting} style={{ marginLeft: 10 }}>
			Видалити
		</button>
	 )
}

export default DeleteButton