import {Component} from 'react'
import FileContext from './context/FileContext'
import Home from './components/Home'
import Trending from './components/Trending'
import './App.css'
import Login from './components/Login'

// Replace your code here
class App extends Component {
  state = {siteTheme: 'Light', ChangeTheme: true}

  changeTheme = () => {
    const {ChangeTheme} = this.state
    this.setState(prevState => ({ChangeTheme: !prevState.ChangeTheme}))
    if (ChangeTheme) {
      this.setState({siteTheme: 'Light'})
    } else {
      this.setState({siteTheme: 'Dark'})
    }
  }

  render() {
    const {siteTheme, ChangeTheme} = this.state

    return (
      <FileContext.Provider value={{siteTheme, changeTheme: this.changeTheme}}>
        <Home />
      </FileContext.Provider>
    )
  }
}

export default App
