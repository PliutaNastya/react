import styles from "./MessengerManager.module.css"

function MessageItem({ id, text, likes, dislikes, onLikes, onDislikes }) {
	return (
		<div>
			<p>{text}</p>
			<div className={styles.actions}>
				<button type="button" onClick={() => onLikes(id, 'likes')} >
					❤️
					<span>{likes}</span>
				</button>
				<button type="button" onClick={() => onDislikes(id, 'dislikes')}>
					👎
					<span>{dislikes}</span>
				</button>
			</div>
		</div>
	)
}

export default MessageItem