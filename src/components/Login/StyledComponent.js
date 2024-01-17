import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: ${props =>
    props.isLight === 'true' ? ' #ffffff' : ' #212121'};
`
export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px black solid;
  width: 35%;
  min-height: 45%;
  max-height: 60%;
  background-color: ${props =>
    props.isLight === 'true' ? ' #ffffff' : ' black'};
  border-radius: 7px;
`

export const Image = styled.img`
  width: 150px;
  height: 40px;
  margin-top: 15px;
  margin-bottom: 15px;
`
export const Form = styled.form`
  display:flex:
  flex-direction:column;
`
export const ErrorMessage = styled.p`
  color: red;
  font-size: 12px;
  margin-left: 17px;
  align-self: flex-start;
  margin-bottom: 15px;
`

export const InnerFormContainer = styled.div`
  display: flex;
  width: 350px;
  height: 70px;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`

export const Input = styled.input`
  color: black;
  width: 90%;
  height: 30px;
  border-radius: 2px;
  color: #475569;
  border: solid 1px #475569;
`
export const Label = styled.label`
  color: ${props => (props.isLight === 'true' ? ' #475569' : ' #f4f4f4')};
  font-size: 15px;
  align-self: flex-start;
  margin-left: 17px;
  margin-bottom: 4px;
`
export const LoginButton = styled.button`
  color: white;
  border-radius: 5px;
  background-color: #3b82f6;
  margin-bottom: 2px;
  border: 0px;
  padding: 3px;
  height: 25px;
  width: 90%;
  margin-left: 17px;
  cursor: pointer;
  margin-bottom: 10px;
  margin-top: 10px;
`

export const ShowPassword = styled.label`
  color: ${props => (props.isLight === 'true' ? ' black' : ' #f4f4f4')};
  font-size: 14px;
`

export const ShowPasswordContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 14px;
  margin-top: 10px;
`
export const Checkbox = styled.input`
  display: flex;
  flex-direction: row;
`
