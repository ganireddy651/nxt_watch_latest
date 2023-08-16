import React from 'react'

const ThemeContext = React.createContext({
  isDark: false,
  changeTheme: () => {},
  onSave: false,
  onSaveVideo: () => {},
  savedVideo: [],
})

export default ThemeContext
