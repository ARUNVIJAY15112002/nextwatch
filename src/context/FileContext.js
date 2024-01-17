import React from 'react'

const FileContext = React.createContext({
  siteTheme: 'Light',
  changeTheme: () => {},
})

export default FileContext
