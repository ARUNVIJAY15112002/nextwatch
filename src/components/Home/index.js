import {Component} from 'react'
import Header from '../Header'
import SideHeader from '../SideHeader'
import {BgContainer} from './StyledComponents'
import FileContext from '../../context/FileContext'

class Home extends Component {
  renderHome = () => (
    <FileContext.Consumer>
      {value => {
        const {siteTheme} = value
        const isLight = siteTheme === 'Light' ? 'true' : 'false'
        return (
          <BgContainer isLight={isLight}>
            <Header />
            <SideHeader />
          </BgContainer>
        )
      }}
    </FileContext.Consumer>
  )

  render() {
    return this.renderHome()
  }
}

export default Home
