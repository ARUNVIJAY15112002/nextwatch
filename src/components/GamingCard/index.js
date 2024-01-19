import {ListItem, Image, Views, Title} from './StyledComponents'
import FileContext from '../../context/FileContext'

const GamingCard = props => {
  const {x} = props
  const {id, title, thumbnailUrl, viewCount} = x

  return (
    <FileContext>
      {value => {
        const {siteTheme} = value
        const isLight = siteTheme === 'Light' ? 'true' : 'false'
        return (
          <ListItem>
            <Image src={thumbnailUrl} />
            <Title isLight={isLight}>{title}</Title>
            <Views isLight={isLight}>{viewCount} Watching Worldwide</Views>
          </ListItem>
        )
      }}
    </FileContext>
  )
}

export default GamingCard
