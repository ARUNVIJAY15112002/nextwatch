import {IoMdHome} from 'react-icons/io'
import {Link} from 'react-router-dom'
import {FaFire} from 'react-icons/fa'
import {SiYoutubegaming} from 'react-icons/si'
import {CgPlayListAdd} from 'react-icons/cg'
import {Component} from 'react'
import FileContext from '../../context/FileContext'
import './index.css'

import {
  HeaderButton,
  HeaderContainer,
  ListContainer,
  ContactImage,
  ListContainer2,
  FootContainer,
  ContactUsHead,
  Card,
  ListItem,
  ListPara,
  FootPara,
} from './StyledComponent'

const navitems = [
  {
    id: 1,
    text: 'Home',
    image: <IoMdHome />,
    link: '/',
  },
  {
    id: 2,
    text: 'Trending',
    image: <FaFire />,
    link: '/Trending',
  },
  {
    id: 3,
    text: 'Gaming',
    image: <SiYoutubegaming />,
    link: '/Gaming',
  },
  {
    id: 4,
    text: 'Saved videos',
    image: <CgPlayListAdd />,
    link: '/Savedvideos',
  },
]

class SideHeader extends Component {
  render() {
    return (
      <FileContext.Consumer>
        {value => {
          const {siteTheme, changeTheme, activeTab, changeActiveTab} = value
          const isLight = siteTheme === 'Light' ? 'true' : 'false'

          const getStatus = id => {
            changeActiveTab(id)
          }

          const getItems = x => {
            const Cardbg1 = activeTab === x.id ? '#f1f5f9' : ''
            const Cardbg2 = activeTab === x.id ? '#424242' : ''
            const Cardbg = siteTheme === 'Light' ? Cardbg1 : Cardbg2
            const iconTheme = activeTab === x.id ? ' #ff0000' : '#606060'
            const fontWeight = activeTab === x.id ? '700' : ''

            return (
              <Link to={x.link} className="link">
                <li>
                  <Card onClick={() => getStatus(x.id)} Cardbg={Cardbg}>
                    <ListItem iconTheme={iconTheme}>{x.image}</ListItem>
                    <ListPara isLight={isLight} fontWeight={fontWeight}>
                      {x.text}
                    </ListPara>
                  </Card>
                </li>
              </Link>
            )
          }
          return (
            <HeaderContainer isLight={isLight}>
              <ListContainer>{navitems.map(x => getItems(x))}</ListContainer>
              <FootContainer>
                <ContactUsHead isLight={isLight}>CONTACT US</ContactUsHead>
                <ListContainer2>
                  <li>
                    <ContactImage
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                      alt="facebook"
                    />
                  </li>
                  <li>
                    <ContactImage
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                      alt="twitter logo"
                    />
                  </li>
                  <li>
                    <ContactImage
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                      alt="linked in logo"
                    />
                  </li>
                </ListContainer2>
                <FootPara isLight={isLight}>
                  Enjoy! Now to see your channels and recommendations!
                </FootPara>
              </FootContainer>
            </HeaderContainer>
          )
        }}
      </FileContext.Consumer>
    )
  }
}

export default SideHeader
