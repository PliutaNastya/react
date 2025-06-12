function KitchenMenu() {
	const menu = [
		{
			id: 1,
			name: "Борщ український з пампушками",
			price: 95
		},
		{
			id: 2,
			name: "Вареники з картоплею і смаженою цибулею",
			price: 80
		},
		{
			id: 3,
			name: "Голубці з м’ясом та рисом",
			price: 110
		},
		{
			id: 4,
			name: "Деруни зі сметаною",
			price: 75
		},
		{
			id: 5,
			name: "Котлета по-київськи з пюре",
			price: 120
		},
		{
			id: 6,
			name: "Сало з чорним хлібом та часником",
			price: 60
		},
		{
			id: 7,
			name: "Солянка м’ясна",
			price: 100
		},
		{
			id: 8,
			name: "Оселедець під шубою",
			price: 70
		},
		{
			id: 9,
			name: "Млинці з домашнім творогом",
			price: 65
		},
		{
			id: 10,
			name: "Узвар з сухофруктів",
			price: 40
		}
	]
	return (
		<>
			<ul className="kitchen-menu">
				{
					menu.map(item => (
						<li key={item.id}>
							<h4>{item.name}</h4>
							<span>{item.price}</span>
						</li>
					))
				}
			</ul>
		</>
	)
}

export default KitchenMenu;