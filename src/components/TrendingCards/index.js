import {formatDistanceToNow} from 'date-fns'
import FileContext from '../../context/FileContext'
import {
  ViewsContainer,
  VideoTitle,
  DetailContainer,
  Type,
  DateContainer,
  Views,
  Date1,
  Card,
  Image,
} from './StyledComponents'

const TrendingCards = props => {
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
          <Card>
            <Image src={thumbnailUrl} />
            <ViewsContainer>
              <VideoTitle isLight={isLight}>{title}</VideoTitle>
              <DetailContainer isLight={isLight}>
                <Type isLight={isLight}>{name}</Type>
                <DateContainer isLight={isLight}>
                  <Views isLight={isLight}>{viewCount} views</Views>
                  <Date1 isLight={isLight}>{date}</Date1>
                </DateContainer>
              </DetailContainer>
            </ViewsContainer>
          </Card>
        )
      }}
    </FileContext.Consumer>
  )
}

export default TrendingCards
