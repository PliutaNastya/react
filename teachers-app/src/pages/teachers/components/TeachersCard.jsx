import frontRoutes from "@/routes/frontRoutes"
import { Link, useNavigate } from "react-router"

function TeachersCard({ teacher, onSelect, isSelected, onDelete }) {
	const navigate = useNavigate()

	return (
		<li className="card">
			<div className="card__body">
				<img src={teacher.photo} alt="Teacher Photo" className="card__image" />
				<div className="card__content">
					<Link to={frontRoutes.navigate.teachers.detail(teacher.id)}>{teacher.name} | <span>Detail</span></Link>
					<div>Subject: <span>{teacher.subject}</span></div>
				</div>
				{onSelect &&
					<button type="button" className="button" onClick={() => onSelect(teacher.id)}>{isSelected ? 'Deselect' : 'Select'}</button>
				}
			</div>
			{onSelect &&
				<div className="card__actions">
					<button type="button" className="button button--edit" onClick={() => navigate(frontRoutes.navigate.teachers.edit(teacher.id))}>Edit</button>
					<button type="button" className="button button--delete" onClick={() => onDelete(teacher.id)}>Delete</button>
				</div>
			}
		</li>
	)
}

export default TeachersCard