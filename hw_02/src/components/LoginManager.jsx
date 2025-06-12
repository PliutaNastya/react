// Вводимо логіна і пароль.Якщо логін вірний відображаємо смайл.Якщо ні, то:
// - якщо логін = Іван – колір повідомлення про помилку синій
// - якщо хтось інший, то колір повідомлення червоний
import { useState } from 'react';
import floralImg from '../assets/img/floral.png';
import smile from '../assets/img/smile.png';

function LoginManager() {
	const [login, setLogin] = useState(null)
	const [correctLogin, setCorrectLogin] = useState('')

	const usersDataList = [
		{
			login: 'login01',
			password: 'password01'
		},
		{
			login: 'login02',
			password: 'password02'
		},
		{
			login: 'login03',
			password: 'password03'
		},
	]

	function getErrorColor(name) {
		return login.toLowerCase() === name.toLowerCase() ? 'blue' : 'red'
	}

	function isCorrectLogin(data) {
		const isCorrect = data.some(userData => userData.login.toLowerCase() === login.toLowerCase())
		
		isCorrect ? setCorrectLogin('yes') : setCorrectLogin('no')
	}

	function handleSubmit(e) {
		e.preventDefault()
		isCorrectLogin(usersDataList)
	}

	return (
		<>
			<div className="task">
				<h2>Умова</h2>
				<div className="task-inner">
					<p>Вводимо логін і пароль. Якщо логін вірний відображаємо смайл. Якщо ні, то:</p>
					<ul>
						<li>якщо логін = Іван – колір повідомлення про помилку синій</li>
						<li>якщо хтось інший, то колір повідомлення червоний</li>
					</ul>
				</div>
				<pre>
					<code>{`
const usersDataList = [
{
	login: 'login01',
	password: 'password01'
},
{
	login: 'login02',
	password: 'password02'
},
{
	login: 'login03',
	password: 'password03'
},
]
					`}
					</code>
				</pre>
			</div>
			<div className="form-cnt">
				<form className="form" onSubmit={handleSubmit}>
					<div>
						<label htmlFor="username">UserName</label>
						<input type="text" name="username" id="username" onChange={(e) => setLogin(e.target.value)} />
					</div>
					<div>
						<label htmlFor="password">Password</label>
						<input type="password" name="password" id="password" />
					</div>
					<button type="submit" className="button"><span>Увійти</span></button>
					{correctLogin === 'no' && <p style={{ color: `${getErrorColor('Іван')}` }}>Введіть правильний логін.</p>}
				</form>
				<div className="image-cnt">
					{correctLogin === 'yes' ? <img src={smile} alt="" /> : <img src={floralImg} alt="" />}
				</div>
			</div>
		</>
	)
}

export default LoginManager