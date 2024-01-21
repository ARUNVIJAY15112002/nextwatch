import {Component} from 'react'
import {IoIosClose, IoIosSearch} from 'react-icons/io'
import Loader from 'react-loader-spinner'

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
  Input,
  Icon,
  InputContainer,
  Loadercontainer,
  IMAGEFAILURE,
  FailureCard,
  FAILUREHEAD,
  FAILUREPARA,
  RButton,
} from './StyledComponents'
import FileContext from '../../context/FileContext'
import HomeCards from '../HomeCards'

const apiStatusConstants = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  intial: 'intial',
  loading: 'LOADING',
}

class Home extends Component {
  state = {
    videosList: [],
    setSearch: '',
    apiStatus: apiStatusConstants.intial,
  }

  componentDidMount() {
    this.getVideos()
  }

  getVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.loading})
    const {setSearch} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${setSearch}`
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
      this.setState({videosList: formatedData})
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderPremiumCard = () => (
    <FileContext.Consumer>
      {value => {
        const {showPremiumCard, closePremiumCard} = value

        const closePreimium = () => {
          closePremiumCard()
          console.log('ok')
        }

        return (
          <PremiumCard>
            <PremiumCardItems>
              <PrImage src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png" />
              <p>Buy Nxt Watch Premium prepaid plans with UPI</p>
              <Prbtn>GET IT NOW</Prbtn>
            </PremiumCardItems>
            <PremiumClosebtn onClick={() => closePreimium()}>
              {' '}
              <IoIosClose />
            </PremiumClosebtn>
          </PremiumCard>
        )
      }}
    </FileContext.Consumer>
  )

  FilterInputs = e => {
    this.setState({setSearch: e.target.value}, this.getVideos)
  }

  renderHome = () => (
    <FileContext.Consumer>
      {value => {
        const {siteTheme, showPremiumCard} = value
        const {videosList} = this.state
        const isLight = siteTheme === 'Light' ? 'true' : 'false'
        return (
          <>
            <Header />
            <BgContainer isLight={isLight}>
              <SideHeader />
              <Card>
                {showPremiumCard === true && this.renderPremiumCard()}
                <InputContainer>
                  {' '}
                  <Input
                    type="search"
                    onChange={this.FilterInputs}
                    placeholder="Search"
                  />
                  <Icon>
                    <IoIosSearch />
                  </Icon>
                </InputContainer>

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

  renderLoader = () => (
    <FileContext.Consumer>
      {value => {
        const {siteTheme, showPremiumCard} = value
        const {videosList} = this.state
        const isLight = siteTheme === 'Light' ? 'true' : 'false'
        const LoaderColor = siteTheme === 'Light' ? 'black' : 'white'
        return (
          <>
            <Header />
            <BgContainer isLight={isLight}>
              <SideHeader />
              <Card>
                {showPremiumCard === true && this.renderPremiumCard()}
                <InputContainer>
                  {' '}
                  <Input
                    type="search"
                    onChange={this.FilterInputs}
                    placeholder="Search"
                  />
                  <Icon>
                    <IoIosSearch />
                  </Icon>
                </InputContainer>
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

  renderFailure = () => (
    <FileContext.Consumer>
      {value => {
        const {siteTheme, showPremiumCard} = value
        const {videosList} = this.state
        const isLight = siteTheme === 'Light' ? 'true' : 'false'
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
                {showPremiumCard === true && this.renderPremiumCard()}
                <InputContainer>
                  {' '}
                  <Input
                    type="search"
                    onChange={this.FilterInputs}
                    placeholder="Search"
                  />
                  <Icon>
                    <IoIosSearch />
                  </Icon>
                </InputContainer>
                <FailureCard>
                  <IMAGEFAILURE src={imgUrl} />
                  <FAILUREHEAD isLight={isLight}>
                    Oops! Something Went Wrong{' '}
                  </FAILUREHEAD>
                  <FAILUREPARA isLight={isLight}>
                    We are having some trouble to complete your request. Please
                    try again.
                  </FAILUREPARA>
                  <RButton onClick={this.getVideos}>Retry</RButton>
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
        return this.renderHome()
      case apiStatusConstants.loading:
        return this.renderLoader()
      case apiStatusConstants.failure:
        return this.renderFailure()

      default:
        return null
    }
  }
}

export default Home
