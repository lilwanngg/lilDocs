import React from 'react';
import { Link } from 'react-router-dom'

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  
  handleInput(type) {
    return(e) => {
      this.setState( { [type]: e.target.value })
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  render() {
    const { formType, errors } = this.props
    let header
    let linkTo
    let display
    if (formType === "signin") {
      header = "Sign In"
      linkTo = (<Link to="/signup" >Create account</Link>) 
      display = (<></>)
    } else {
      header = "Create Account" 
      linkTo = (<Link to="/signin" >Sign In Instead</Link>)
      display = (
        <>
          <label>First name
              <input type="text" value={this.state.first_name} onChange={this.handleInput('first_name')} />
          </label>
          <label>Last name
              <input type="text" value={this.state.last_name} onChange={this.handleInput('last_name')} />
          </label>
        </>
      )
    }
    const errs = errors.map( err => {
      return(
        <li>err</li>
      )
    })

    return(
      <>
        <h1>{header}</h1>
        <h2>{linkTo}</h2>
        <ul>{errs}</ul>
        <form>
          {display}
          <label>Email
            <input type="text" value={this.state.email} onChange={this.handleInput('email')} />
          </label>
          <label>Password
            <input type="password" value={this.state.password} onChange={this.handleInput('password')} />
          </label>
          <button onClick={this.handleSubmit}>Submit</button>
        </form>
      </>
    )
  }
}
export default SessionForm;