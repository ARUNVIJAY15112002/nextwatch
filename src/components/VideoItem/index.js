import {Component} from 'react'
import Cookies from 'js-cookie'
import SideHeader from '../SideHeader'
import VideoCard from '../VideoCard'
import {VideoContainer} from './StyledComponent'

const apiStatusConstants = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  initial: 'INITIAL',
  loading: 'LOADING',
}

class VideoItem extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    videoDetails: [],
    isLiked: false,
    isDisLiked: false,
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  formattedData = data => ({
    id: data.video_details.id,
    title: data.video_details.title,
    videoUrl: data.video_details.video_url,
    thumbnailUrl: data.video_details.thumbnail_url,
    viewCount: data.video_details.view_count,
    publishedAt: data.video_details.published_at,
    description: data.video_details.description,
    name: data.video_details.channel.name,
    profileImageUrl: data.video_details.channel.profile_image_url,
    subscriberCount: data.video_details.channel.subscriber_count,
  })

  getVideoDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')

    const url = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      const updatedData = this.formattedData(data)
      this.setState({
        videoDetails: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  clickLiked = () => {
    this.setState(prevState => ({
      isLiked: !prevState.isLiked,
      isDisLiked: false,
    }))
  }

  clickDisLiked = () => {
    this.setState(prevState => ({
      isDisLiked: !prevState.isDisLiked,
      isLiked: false,
    }))
  }

  render() {
    const {videoDetails} = this.state

    return (
      <VideoContainer>
        <SideHeader />
        <VideoCard videoDetails={videoDetails} />
      </VideoContainer>
    )
  }
}

export default VideoItem
