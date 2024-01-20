import React from 'react'

const FileContext = React.createContext({
  siteTheme: 'Light',
  changeTheme: () => {},
  activeTab: 1,
  changeActiveTab: () => {},
  showPremiumCard: true,
  closePremeiumCard: () => {},
})

export default FileContext
