import React, { createContext, useState } from 'react';

export const SettingsContext = createContext()

const SettingProvider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(false)
  const [hide, setHide] = useState(false)
  const [login, setLogin] = useState(false)

 
  return (
    <SettingsContext.Provider value={{ login, setLogin, darkTheme, setDarkTheme, hide, setHide }}>{children}</SettingsContext.Provider>
  )
}

export default SettingProvider;