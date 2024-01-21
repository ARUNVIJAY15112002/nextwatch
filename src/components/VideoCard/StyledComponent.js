import styled from 'styled-components'

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: pink;
  width: 80%;
  padding: 15px;
  margin: 10px;
`

export const ViewLikesContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: red;
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
`
