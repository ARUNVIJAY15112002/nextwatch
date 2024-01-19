import {Component} from 'react'
import {IoIosClose} from 'react-icons/io'
import Cookies from 'js-cookie'
import Header from '../Header'
import SideHeader from '../SideHeader'
import {
  BgContainer,
  ListContainer,
  Card,
  PremiumCard,
  PremiumCardItems,
  PrImage,
  Prbtn,
  PremiumClosebtn,
} from './StyledComponents'
import FileContext from '../../context/FileContext'
import HomeCards from '../HomeCards'

class Home extends Component {
  state = {videosList: [], showPremiumCard: true}

  componentDidMount() {
    this.getVideos()
  }

  getVideos = async () => {
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/videos/all?search='
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
      this.setState({videosList: formatedData})
    } else {
      console.log(0)
    }
  }

  closePreimium = () => {
    this.setState({showPremiumCard: false})
  }

  renderPremiumCard = () => (
    <PremiumCard>
      <PremiumCardItems>
        <PrImage src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png" />
        <p>Buy Nxt Watch Premium prepaid plans with UPI</p>
        <Prbtn>GET IT NOW</Prbtn>
      </PremiumCardItems>
      <PremiumClosebtn onClick={this.closePreimium}>
        {' '}
        <IoIosClose />
      </PremiumClosebtn>
    </PremiumCard>
  )

  renderHome = () => (
    <FileContext.Consumer>
      {value => {
        const {siteTheme} = value
        const {videosList, showPremiumCard} = this.state
        const isLight = siteTheme === 'Light' ? 'true' : 'false'
        return (
          <>
            <Header />
            <BgContainer isLight={isLight}>
              <SideHeader />
              <Card>
                {showPremiumCard === true && this.renderPremiumCard()}

                <ListContainer>
                  {videosList.map(x => (
                    <HomeCards x={x} key={x.id} />
                  ))}
                </ListContainer>
              </Card>
            </BgContainer>
          </>
        )
      }}
    </FileContext.Consumer>
  )

  render() {
    return this.renderHome()
  }
}

export default Home
