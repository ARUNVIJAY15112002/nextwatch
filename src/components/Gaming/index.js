import {Component} from 'react'
import {SiYoutubegaming} from 'react-icons/si'
import Cookies from 'js-cookie'
import GamingCard from '../GamingCard'
import Header from '../Header'
import SideHeader from '../SideHeader'
import {
  BgContainer,
  ListContainer,
  Card,
  CardGaming,
  Logo,
  H1,
} from './StyledComponents'
import FileContext from '../../context/FileContext'

class Gaming extends Component {
  state = {videoList: []}

  componentDidMount() {
    this.getGamingVideos()
  }

  getGamingVideos = async () => {
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()
      const data = fetchedData.videos.map(x => ({
        id: x.id,
        title: x.title,
        thumbnailUrl: x.thumbnail_url,
        viewCount: x.view_count,
      }))
      this.setState({videoList: data})
    }
  }

  renderGamingCard = () => {
    const {videoList} = this.state
    return (
      <FileContext>
        {value => {
          const {siteTheme} = value
          const isLight = siteTheme === 'Light' ? 'true' : 'false'

          return (
            <>
              <Header />
              <BgContainer isLight={isLight}>
                <SideHeader />
                <Card isLight={isLight}>
                  <CardGaming isLight={isLight}>
                    <Logo isLight={isLight}>
                      <SiYoutubegaming />
                    </Logo>

                    <H1 isLight={isLight}>Gaming</H1>
                  </CardGaming>

                  <ListContainer>
                    {videoList.map(x => (
                      <GamingCard x={x} key={x.id} />
                    ))}
                  </ListContainer>
                </Card>
              </BgContainer>
            </>
          )
        }}
      </FileContext>
    )
  }

  render() {
    return this.renderGamingCard()
  }
}

export default Gaming
