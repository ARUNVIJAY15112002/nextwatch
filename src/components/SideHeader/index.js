import {IoMdHome} from 'react-icons/io'
import {FaFire} from 'react-icons/fa'
import {SiYoutubegaming} from 'react-icons/si'
import {CgPlayListAdd} from 'react-icons/cg'
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
  ListPara,
  FootPara,
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
    image: <CgPlayListAdd />,
  },
]

class SideHeader extends Component {
  state = {activeStatus: 1}

  getStatus = id => {
    this.setState({activeStatus: id})
  }

  render() {
    return (
      <FileContext.Consumer>
        {value => {
          const {siteTheme, changeTheme} = value
          const isLight = siteTheme === 'Light' ? 'true' : 'false'

          const getItems = x => {
            const {activeStatus} = this.state
            const Cardbg1 = activeStatus === x.id ? '#f1f5f9' : ''
            const Cardbg2 = activeStatus === x.id ? '#424242' : ''
            const Cardbg = siteTheme === 'Light' ? Cardbg1 : Cardbg2
            const fontWeight = activeStatus === x.id ? 'bold' : ''
            console.log(Cardbg)
            return (
              <li>
                <Card onClick={() => this.getStatus(x.id)} Cardbg={Cardbg}>
                  <ListItem isLight={isLight}>{x.image}</ListItem>
                  <ListPara isLight={isLight} fontWeight={fontWeight}>
                    {x.text}
                  </ListPara>
                </Card>
              </li>
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
