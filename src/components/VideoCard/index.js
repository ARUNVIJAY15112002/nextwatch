import ReactPlayer from 'react-player'
import {BiLike, BiDislike, MdPlaylistAdd} from 'react-icons/all'
import {
  Card,
  ViewLikesContainer,
  ItemsContainer,
  ProfileContainer,
  Profile,
  ProfileDetails,
  DetailsVideo,
  Title,
  Name1,
  SubscriberCount,
  ListItems,
  Button,
  Hr,
} from './StyledComponent'
import './index.css'
import FileContext from '../../context/FileContext'

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
    <FileContext.Consumer>
      {value => {
        const {siteTheme, showPremiumCard} = value
        const isLight = siteTheme === 'Light' ? 'true' : 'false'
        return (
          <Card>
            <ReactPlayer url={videoUrl} controls className="react-player" />
            <DetailsVideo>
              <Title isLight={isLight}>{title}</Title>
              <ViewLikesContainer>
                <ItemsContainer>
                  <ListItems isLight={isLight}>{viewCount} views</ListItems>
                  <ListItems isLight={isLight}>{publishedAt}</ListItems>
                </ItemsContainer>
                <ItemsContainer>
                  <ListItems isLight={isLight}>
                    <Button>
                      {' '}
                      <BiLike />
                    </Button>
                    Like
                  </ListItems>
                  <ListItems isLight={isLight}>
                    <Button>
                      {' '}
                      <BiDislike />
                    </Button>
                    Dislike
                  </ListItems>
                  <ListItems isLight={isLight}>
                    <Button>
                      {' '}
                      <MdPlaylistAdd />
                    </Button>
                    Save
                  </ListItems>
                </ItemsContainer>
              </ViewLikesContainer>
              <Hr isLight={isLight} />
              <ProfileContainer>
                <Profile src={profileImageUrl} />
                <ProfileDetails>
                  <Name1 isLight={isLight}>{name}</Name1>
                  <SubscriberCount isLight={isLight}>
                    {subscriberCount} Subscribers
                  </SubscriberCount>
                  <Name1 isLight={isLight}>{description}</Name1>
                </ProfileDetails>
              </ProfileContainer>
            </DetailsVideo>
          </Card>
        )
      }}
    </FileContext.Consumer>
  )
}

export default VideoCard
