import styled from 'styled-components'

export const Card = styled.div`
  display: flex;
  flex-direction: column;

  width: 80%;
  padding: 15px;
  margin: 10px;
`

export const ViewLikesContainer = styled.div`
  display: flex;
  flex-direction: row;

  width: 100%;
  justify-content: space-between;
`
export const ItemsContainer = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  padding: 1px;
`

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const Profile = styled.img`
  width: 40px;
  height: 40px;
`
export const ProfileDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  margin-top: -14px;
`

export const DetailsVideo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  padding: 5px;
  width: 96.5%;
`

export const Title = styled.h1`
  font-size: 14px;
  margin-top: -1px;
  color: ${props => (props.isLight === 'true' ? 'black' : '#ffffff')};
  @media screen and (max-width: 575px) {
    font-size: 13px;
  }
`
export const Name1 = styled.p`
  color: ${props => (props.isLight === 'true' ? 'black' : 'white')};
  margin-right: 10px;
  font-size: 13px;
`

export const SubscriberCount = styled.p`
  color: ${props => (props.isLight === 'true' ? '#475569' : '#d7dfe9')};
  font-size: 13px;
  margin-top: -7px;
  margin-bottom: 10px;
`
export const ListItems = styled.li`
  color: ${props => (props.isLight === 'true' ? '#475569' : '#d7dfe9')};
  font-size: 13px;
  margin-left: 10px;
`
export const Hr = styled.hr`
  color: ${props => (props.isLight === 'true' ? 'black' : '#d7dfe9')};
  width: 100%;
  margin-top: 0px;
  margin-bottom: 15px;
`

export const Button = styled.button`
  background-color: transparent;
  cursor: pointer;
  border-width: 0px;
`
