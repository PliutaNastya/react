// Створіть компонент, який відображає поточні розміри вікна браузера(ширина x висота), використовуючи useWindowSize.На основі розмірів відображати іконки монітора, планшета або телефона.

import useWindowSize from "../../../../hooks/useWindowSize"
import desktopImage from "../../../../assets/img/desktop.png"
import tabletImage from "../../../../assets/img/tablet.png"
import phoneImage from "../../../../assets/img/phone.png"
import { useDeferredValue, useMemo } from "react"

function WindowSize() {
	console.log('Resize')

	// Отримую поточні значення ширини і висоти вікна браузера з кастомного хуку useWindowSize
	const windowSize = useWindowSize()
	// useDeferredValue для відкладення обчислень
	const deferredWidth = useDeferredValue(windowSize.windowWidth)
	const deferredHeight = useDeferredValue(windowSize.windowHeight)

	// Отримання потрібного зображення відповідно до розміру вікна браузера
	const deviceImage = useMemo(() => {
		let deviceImage
		if (deferredWidth > 998) {
			deviceImage = desktopImage
		} else if (deferredWidth < 768) {
			deviceImage = phoneImage
		} else deviceImage = tabletImage

		return deviceImage
	}, [deferredWidth])

	return (
		<div className="main-cnt">
			<div className="task-cnt">
				<h2>useWindowSize – розмір вікна браузера</h2>
				<p>Створіть кастомний хук useWindowSize, який повертає поточну ширину та висоту вікна браузера. Він повинен оновлюватися при зміні розміру вікна.</p>
				<p>Створіть компонент, який відображає поточні розміри вікна браузера (ширина x висота), використовуючи useWindowSize. На основі розмірів відображати іконки монітора, планшета або телефона.</p>
			</div>
			<div className="result">
				<p>{deferredWidth}px x {deferredHeight}px</p>
				<div className="img-cnt">
					<img src={deviceImage} alt="Device" />
				</div>
			</div>
		</div>
	)
}

export default WindowSize