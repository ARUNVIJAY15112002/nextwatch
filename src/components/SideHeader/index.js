import {IoMdHome} from 'react-icons/io'
import {FaFire} from 'react-icons/fa'
import {SiYoutubegaming} from 'react-icons/si'
import {Component} from 'react'
import FileContext from '../../context/FileContext'
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
} from './StyledComponent'

const navitems = [
  {
    id: 1,
    text: 'Home',
    image: <IoMdHome />,
  },
  {
    id: 2,
    text: 'Trending',
    image: <FaFire />,
  },
  {
    id: 3,
    text: 'Gaming',
    image: <SiYoutubegaming />,
  },
  {
    id: 4,
    text: 'Saved videos',
    image: <IoMdHome />,
  },
]

class SideHeader extends Component {
  render() {
    return (
      <FileContext.Consumer>
        {value => {
          const {siteTheme, changeTheme} = value
          const isLight = siteTheme === 'Light' ? 'true' : 'false'

          const getItems = x => (
            <li>
              <Card>
                <ListItem>{x.image}</ListItem>
                <li>{x.text}</li>
              </Card>
            </li>
          )

          return (
            <HeaderContainer isLight={isLight}>
              <ListContainer>{navitems.map(x => getItems(x))}</ListContainer>
              <FootContainer>
                <ContactUsHead>CONTACT US</ContactUsHead>
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
                <p>Enjoy! Now to see your channels and recommendations!</p>
              </FootContainer>
            </HeaderContainer>
          )
        }}
      </FileContext.Consumer>
    )
  }
}

export default SideHeader
