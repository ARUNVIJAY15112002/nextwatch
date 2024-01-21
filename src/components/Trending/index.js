import {Component} from 'react'
import {FaFire} from 'react-icons/fa'
import Loader from 'react-loader-spinner'
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
  Loadercontainer,
  IMAGEFAILURE,
  FailureCard,
  FAILUREHEAD,
  FAILUREPARA,
  RButton,
} from './StyledComponents'
import Header from '../Header'
import SideHeader from '../SideHeader'

const apiStatusConstants = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  intial: 'intial',
  loading: 'LOADING',
}

class Trending extends Component {
  state = {trendingList: [], apiStatus: apiStatusConstants.intial}

  componentDidMount() {
    this.detData()
  }

  detData = async () => {
    this.setState({apiStatus: apiStatusConstants.loading})
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
      this.setState({apiStatus: apiStatusConstants.success})
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
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
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

  renderLoader = () => (
    <FileContext.Consumer>
      {value => {
        const {siteTheme} = value
        const isLight = siteTheme === 'Light' ? 'true' : 'false'
        const LoaderColor = siteTheme === 'Light' ? 'black' : 'white'
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
    </FileContext.Consumer>
  )

  failureView = () => (
    <FileContext.Consumer>
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
              <Card>
                <CardGaming isLight={isLight}>
                  <Logo isLight={isLight}>
                    <FaFire />
                  </Logo>

                  <H1 isLight={isLight}>Trending</H1>
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
                  <RButton onClick={this.detData}>Retry</RButton>
                </FailureCard>
              </Card>
            </BgContainer>
          </>
        )
      }}
    </FileContext.Consumer>
  )

  render() {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderTrendingPage()
      case apiStatusConstants.loading:
        return this.renderLoader()
      case apiStatusConstants.failure:
        return this.failureView()

      default:
        return null
    }
  }
}

export default Trending
