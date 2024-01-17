import {Component} from 'react'
import FileContext from './context/FileContext'

import './App.css'
import Login from './components/Login'

// Replace your code here
class App extends Component {
  state = {siteTheme: 'Dark'}

  changeTheme = () => 1

  render() {
    const {siteTheme} = this.state

    return (
      <FileContext.Provider value={{siteTheme, changeTheme: this.changeTheme}}>
        <Login />
      </FileContext.Provider>
    )
  }
}

export default App
