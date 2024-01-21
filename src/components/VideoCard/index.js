import ReactPlayer from 'react-player'
import {
  Card,
  ViewLikesContainer,
  ItemsContainer,
  ProfileContainer,
  Profile,
  ProfileDetails,
} from './StyledComponent'
import './index.css'

const VideoCard = props => {
  const {videoDetails} = props
  const {
    id,
    title,
    videoUrl,
    thumbnailUrl,
    viewCount,
    publishedAt,
    description,
    name,
    profileImageUrl,
    subscriberCount,
  } = videoDetails
  return (
    <Card>
      <ReactPlayer url={videoUrl} controls className="react-player" />
      <div>
        <h1>{title}</h1>
        <ViewLikesContainer>
          <ItemsContainer>
            <li>{viewCount}</li>
            <li>{publishedAt}</li>
          </ItemsContainer>
          <ItemsContainer>
            <li>Like</li>
            <li>Dislike</li>
            <li>Save</li>
          </ItemsContainer>
        </ViewLikesContainer>
        <hr />
        <ProfileContainer>
          <Profile src={profileImageUrl} />
          <ProfileDetails>
            <p>{name}</p>
            <p>{subscriberCount} Subscribers</p>
            <p>{description}</p>
          </ProfileDetails>
        </ProfileContainer>
      </div>
    </Card>
  )
}

export default VideoCard
