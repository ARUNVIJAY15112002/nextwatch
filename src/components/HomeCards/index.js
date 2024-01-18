import {formatDistanceToNow} from 'date-fns'
import {
  VideoTitle,
  ViewsContainer,
  DetailsContainer,
  DateContainer,
  ProfileImage,
  Card,
  Image,
  Views,
  Date1,
  Type,
} from './StyledComponents'

const HomeCards = props => {
  const {x} = props
  const {id, title, thumbnailUrl, channel, viewCount, publishedAt} = x
  const {name, profileImageUrl} = channel
  const fDate = formatDistanceToNow(new Date(publishedAt))
  const date = fDate.split(' ').slice(1, 3).join(' ').concat(' ago')
  return (
    <li>
      <Card>
        <Image src={thumbnailUrl} />
        <DetailsContainer>
          <ProfileImage src={profileImageUrl} />
          <ViewsContainer>
            <VideoTitle>{title}</VideoTitle>
            <Type>{name}</Type>
            <DateContainer>
              <Views>{viewCount}</Views>
              <Date1>{date}</Date1>
            </DateContainer>
          </ViewsContainer>
        </DetailsContainer>
      </Card>
    </li>
  )
}

export default HomeCards
