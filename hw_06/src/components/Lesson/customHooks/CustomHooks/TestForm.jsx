import useInput from './useInput'
function TestForm() {
  const emailInput = useInput('')
  const passwordInput = useInput('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Email:', emailInput.value)
    console.log('Password:', passwordInput.value)
    emailInput.clear()
    passwordInput.clear()
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" {...emailInput} placeholder="Email" />
      <input type="password" {...passwordInput} placeholder="Password" />
      <button type="submit">Submit</button>
    </form>
  )
}

export default TestForm
