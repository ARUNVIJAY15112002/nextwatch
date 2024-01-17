import {Component} from 'react'
import Cookies from 'js-cookie'
import FileContext from '../../context/FileContext'
import {
  MainContainer,
  FormContainer,
  Image,
  Form,
  ErrorMessage,
  InnerFormContainer,
  Label,
  Input,
  LoginButton,
  ShowPassword,
  ShowPasswordContainer,
  Checkbox,
} from './StyledComponent'

class Login extends Component {
  state = {
    username: '',
    password: '',
    errorMsg: '',
    showSubmitError: false,
    showPassError: false,
    showUserError: false,
    showPass: false,
  }

  noUser = () => {
    const {username} = this.state
    if (username === '') {
      this.setState({showUserError: true})
    } else {
      this.setState({showUserError: false})
    }
  }

  noPassword = () => {
    const {password} = this.state
    if (password === '') {
      this.setState({showPassError: true})
    } else {
      this.setState({showPassError: false})
    }
  }

  getUserName = e => {
    this.setState({username: e.target.value})
  }

  getPassword = e => {
    this.setState({password: e.target.value})
  }

  onsubmitSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 30})
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  submitForm = async e => {
    e.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onsubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  showPassword = () => {
    this.setState(prevState => ({showPass: !prevState.showPass}))
  }

  renderCheckbox = () => (
    <ShowPasswordContainer>
      <Checkbox type="checkbox" id="cb" onChange={this.showPassword} />
      <ShowPassword htmlFor="cb">Show Password</ShowPassword>
    </ShowPasswordContainer>
  )

  renderForm = () => {
    const {
      showPassError,
      showPass,
      password,
      showUserError,
      showSubmitError,
      errorMsg,
      noPassword,
    } = this.state
    const inputType = showPass ? 'text' : 'password'
    return (
      <FileContext.Consumer>
        {value => {
          const {siteTheme} = value
          const isLight = siteTheme === 'Light' ? 'true' : 'false'

          const imageUrl =
            siteTheme === 'Light'
              ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
              : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'

          return (
            <>
              <MainContainer isLight={isLight}>
                <FormContainer>
                  <Image
                    src={imageUrl}
                    alt="website logo"
                    className="img-width"
                  />

                  <Form onSubmit={this.submitForm}>
                    <InnerFormContainer>
                      <Label htmlFor="ip1" isLight={isLight}>
                        USERNAME
                      </Label>
                      <Input
                        isLight={isLight}
                        type="text"
                        id="ip1"
                        placeholder="Username"
                        onChange={this.getUserName}
                        onBlur={this.noUser}
                      />
                      {showUserError && (
                        <ErrorMessage className="err-msg">
                          *required
                        </ErrorMessage>
                      )}
                    </InnerFormContainer>

                    <InnerFormContainer>
                      <Label className="Lb-form" htmlFor="ip2">
                        PASSWORD
                      </Label>
                      <Input
                        type={inputType}
                        id="ip2"
                        className="form-ip"
                        placeholder="Password"
                        onChange={this.getPassword}
                        onBlur={this.noPassword}
                        value={password}
                      />
                      {showPassError && (
                        <ErrorMessage className="err-msg">
                          *required
                        </ErrorMessage>
                      )}
                    </InnerFormContainer>
                    {this.renderCheckbox()}

                    <LoginButton className="lg-btn" type="submit">
                      Login
                    </LoginButton>
                    {showSubmitError && (
                      <ErrorMessage className="err-msg">
                        *{errorMsg}
                      </ErrorMessage>
                    )}
                  </Form>
                </FormContainer>
              </MainContainer>
            </>
          )
        }}
      </FileContext.Consumer>
    )
  }

  render() {
    return this.renderForm()
  }
}

export default Login
