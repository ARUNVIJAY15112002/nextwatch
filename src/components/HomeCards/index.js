import {formatDistanceToNow} from 'date-fns'
import {Link} from 'react-router-dom'
import FileContext from '../../context/FileContext'

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
  DetailContainer,
} from './StyledComponents'

const HomeCards = props => {
  const {x} = props
  const {id, title, thumbnailUrl, channel, viewCount, publishedAt} = x
  const {name, profileImageUrl} = channel
  const fDate = formatDistanceToNow(new Date(publishedAt))
  const date = fDate.split(' ').slice(1, 3).join(' ').concat(' ago')
  return (
    <FileContext.Consumer>
      {value => {
        const {siteTheme} = value
        const isLight = siteTheme === 'Light' ? 'true' : 'false'

        return (
          <Link to={`/videos/${id}`}>
            <Card>
              <Image src={thumbnailUrl} />
              <DetailsContainer>
                <ProfileImage src={profileImageUrl} />
                <ViewsContainer>
                  <VideoTitle isLight={isLight}>{title}</VideoTitle>
                  <DetailContainer>
                    <Type isLight={isLight}>{name}</Type>
                    <DateContainer>
                      <Views isLight={isLight}>{viewCount}</Views>
                      <Date1 isLight={isLight}>{date}</Date1>
                    </DateContainer>
                  </DetailContainer>
                </ViewsContainer>
              </DetailsContainer>
            </Card>
          </Link>
        )
      }}
    </FileContext.Consumer>
  )
}

export default HomeCards
