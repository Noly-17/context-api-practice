import React, { useContext } from 'react'
import { SettingsContext } from '../Context'

const useSettings = () => useContext(SettingsContext)
const Settings = () => {
    const { login, setLogin } = useSettings()
  console.log(login)
  return (
    <button onClick={() => setLogin(true)}>Settings</button>
  )
}

export default Settings