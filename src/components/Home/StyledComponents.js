import styled from 'styled-components'

export const BgContainer = styled.div`
  display: flex;
  flex-direction: row;
  //background-color: #f8fafc;
  background-color: #181818;
  min-height: 100vh;
  width: 100vw;
`
export const text = styled.p`
  margin: 1px;
`

export const ListContainer = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: Wrap;
  flex-direction: row;
  width: 80vw;
  @media screen and (max-width: 575px) {
    width: 100%;
  }
`
