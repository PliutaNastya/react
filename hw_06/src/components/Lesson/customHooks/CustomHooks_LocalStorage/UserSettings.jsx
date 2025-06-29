import useLocalStorage from './useLocalStorage'
function UserSettings() {
  const [theme, setTheme] = useLocalStorage('appTheme', 'light')

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  return (
    <div>
      <p>Current Theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  )
}

export default UserSettings
