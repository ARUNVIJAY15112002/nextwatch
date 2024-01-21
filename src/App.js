import {Component} from 'react'
import {Switch, Route, BrowserRouter} from 'react-router-dom'
import FileContext from './context/FileContext'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import VideoItem from './components/VideoItem'
import './App.css'
import Login from './components/Login'
import Header from './components/Header'

class App extends Component {
  state = {
    siteTheme: 'Light',
    ChangeTheme: true,
    activeTab: 1,
    showPremiumCard: true,
  }

  changeTheme = () => {
    const {ChangeTheme} = this.state
    this.setState(prevState => ({ChangeTheme: !prevState.ChangeTheme}))
    if (ChangeTheme) {
      this.setState({siteTheme: 'Light'})
    } else {
      this.setState({siteTheme: 'Dark'})
    }
  }

  changeActiveTab = id => {
    this.setState({activeTab: id})
  }

  closePremiumCard = () => {
    this.setState({showPremiumCard: false})
  }

  render() {
    const {siteTheme, ChangeTheme, activeTab, showPremiumCard} = this.state

    return (
      <FileContext.Provider
        value={{
          siteTheme,
          activeTab,
          showPremiumCard,
          changeTheme: this.changeTheme,
          changeActiveTab: this.changeActiveTab,
          closePremiumCard: this.closePremiumCard,
        }}
      >
        <Header />
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/trending" component={Trending} />
          <Route exact path="/" component={Home} />
          <Route exact path="/gaming" component={Gaming} />
          <Route exact path="/videos/:id" component={VideoItem} />
        </Switch>
      </FileContext.Provider>
    )
  }
}

export default App
