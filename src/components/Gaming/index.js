import {Component} from 'react'
import Loader from 'react-loader-spinner'
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
  Loadercontainer,
  IMAGEFAILURE,
  FailureCard,
  FAILUREHEAD,
  FAILUREPARA,
  RButton,
} from './StyledComponents'
import FileContext from '../../context/FileContext'

const apiStatusConstants = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  intial: 'intial',
  loading: 'LOADING',
}

class Gaming extends Component {
  state = {videoList: [], apiStatus: apiStatusConstants.intial}

  componentDidMount() {
    this.getGamingVideos()
  }

  getGamingVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.loading})
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
      this.setState({apiStatus: apiStatusConstants.success})
      const fetchedData = await response.json()
      const data = fetchedData.videos.map(x => ({
        id: x.id,
        title: x.title,
        thumbnailUrl: x.thumbnail_url,
        viewCount: x.view_count,
      }))
      this.setState({videoList: data})
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
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

  renderLoader = () => (
    <FileContext>
      {value => {
        const {siteTheme} = value
        const isLight = siteTheme === 'Light' ? 'true' : 'false'
        const LoaderColor = siteTheme === 'Light' ? 'black' : 'white'

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
                <Loadercontainer data-testid="loader" isLight={isLight}>
                  <Loader
                    type="ThreeDots"
                    color={LoaderColor}
                    height="50"
                    width="50"
                  />
                </Loadercontainer>
              </Card>
            </BgContainer>
          </>
        )
      }}
    </FileContext>
  )

  renderFailure = () => (
    <FileContext>
      {value => {
        const {siteTheme} = value
        const isLight = siteTheme === 'Light' ? 'true' : 'false'
        const LoaderColor = siteTheme === 'Light' ? 'black' : 'white'
        const imgUrl =
          siteTheme === 'true'
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'

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
                <FailureCard>
                  <IMAGEFAILURE src={imgUrl} />
                  <FAILUREHEAD isLight={isLight}>
                    Oops! Something Went Wrong{' '}
                  </FAILUREHEAD>
                  <FAILUREPARA isLight={isLight}>
                    We are having some trouble to complete your request. Please
                    try again.
                  </FAILUREPARA>
                  <RButton onClick={this.getGamingVideos}>Retry</RButton>
                </FailureCard>
              </Card>
            </BgContainer>
          </>
        )
      }}
    </FileContext>
  )

  render() {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderGamingCard()
      case apiStatusConstants.loading:
        return this.renderLoader()
      case apiStatusConstants.failure:
        return this.renderFailure()

      default:
        return null
    }
  }
}

export default Gaming
