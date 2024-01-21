import styled from 'styled-components'

export const VideoTitle = styled.h1`
  font-size: 14px;
  margin-top: -1px;
  color: ${props => (props.isLight === 'true' ? 'black' : '#ffffff')};
  @media screen and (max-width: 575px) {
    font-size: 13px;
  }
`
export const ViewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  margin-top: 4px;
  padding: 4px;
`

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const DateContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: -24px;
  @media screen and (max-width: 575px) {
    margin-top: -14px;
    margin-left: 10px;
  }
`
export const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
 
  @media screen and (max-width: 575px) {
    flex-direction: row;
     width:50vw;
  }
  }
`

export const ProfileImage = styled.img`
  width: 30px;
  height: 30px;
  margin-top: 4px;
  margin-left: 5px;
`
export const Image = styled.img`
  width: 300px;
  height: 200px;
  @media screen and (max-width: 575px) {
    width: 100%;
    height: 220px;
  }
  @media screen and (min-width: 576px) and (max-width: 768px) {
    width: 230px;
    height: 140px;
  }
`
export const Card = styled.li`
  display: flex;
  flex-direction: column;
  font-size: 15px;
  margin: 7px;
  width: 300px;
  height: 290px;
  @media screen and (max-width: 565px) {
    margin: 0px;

    width: 100vw;
    margin-left: -40px;
    margin-top: 15px;
  }
  @media (min-width: 576px) and (max-width: 768px) {
    margin: 0px;
    margin-bottom: -20px;
    width: 50%;
    margin-top: 19px;
    width: 230px;
    margin-left: 15px;
  }
`

export const Views = styled.p`
  color: ${props => (props.isLight === 'true' ? '#475569' : '#d7dfe9')};
  margin-right: 10px;
  font-size: 13px;
`

export const Date1 = styled.p`
  color: ${props => (props.isLight === 'true' ? '#475569' : '#d7dfe9')};
  font-size: 13px;
  margin-bottom: 15px;
`

export const Type = styled.p`
  color: ${props => (props.isLight === 'true' ? '#475569' : '#d7dfe9')};
  margin-top: -3px;
  font-size: 14px;
`
