import {Component} from 'react'
import {FaFire} from 'react-icons/fa'
import Cookies from 'js-cookie'
import FileContext from '../../context/FileContext'
import TrendingCards from '../TrendingCards'
import {
  BgContainer,
  ListContainer,
  CardGaming,
  Logo,
  H1,
  Card,
} from './StyledComponents'
import Header from '../Header'
import SideHeader from '../SideHeader'

class Trending extends Component {
  state = {trendingList: []}

  componentDidMount() {
    this.detData()
  }

  detData = async () => {
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/videos/trending'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()
      const formatedData = fetchedData.videos.map(x => ({
        id: x.id,
        title: x.title,
        thumbnailUrl: x.thumbnail_url,
        channel: {
          name: x.channel.name,
          profileImageUrl: x.channel.profile_image_url,
        },
        viewCount: x.view_count,
        publishedAt: x.published_at,
      }))
      this.setState({trendingList: formatedData})
    }
  }

  renderTrendingPage = () => {
    const {trendingList} = this.state

    return (
      <FileContext.Consumer>
        {value => {
          const {siteTheme} = value
          const isLight = siteTheme === 'Light' ? 'true' : 'false'

          return (
            <>
              <Header />

              <BgContainer isLight={isLight}>
                <SideHeader />
                <Card>
                  <CardGaming isLight={isLight}>
                    <Logo isLight={isLight}>
                      <FaFire />
                    </Logo>

                    <H1 isLight={isLight}>Trending</H1>
                  </CardGaming>
                  <ListContainer>
                    {trendingList.map(x => (
                      <TrendingCards x={x} key={x.id} />
                    ))}
                  </ListContainer>
                </Card>
              </BgContainer>
            </>
          )
        }}
      </FileContext.Consumer>
    )
  }

  render() {
    return this.renderTrendingPage()
  }
}

export default Trending
