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
    const errs = errors.map(err => {
      return (
        <li>err</li>
      )
    })
    
    if (formType === "signin") {
      return(
        <div id="signin">
          <p><img id="lil-docs-logo" src="/assets/lil_docs_logo.png" /></p>
          <h1>Sign In</h1>
          <h3>Use an existing account</h3>
          <form className="signinform">
            <div className="labelinput">
              <label className="emaillabel">Email</label>
              <input className="emailinput" type="text" value={this.state.email} onChange={this.handleInput('email')} placeholder="Email"/>
            </div>
            <ul>{errs}</ul>
            {/* <label>Password
              <input type="password" value={this.state.password} onChange={this.handleInput('password')} />
            </label> */}
            <button onClick={this.handleSubmit}>Next</button>
          </form>
            <Link to="/signup" >Create account</Link>
        </div>

      )
    } else {
      return (
        <div id="signup">
          <h1>Create Account</h1>
          <ul>{errs}</ul>
          <form>
            <div id="fname">
            <label>First name
              <input type="text" value={this.state.first_name} onChange={this.handleInput('first_name')} />
            </label>
            </div>
            <label>Last name
              <input type="text" value={this.state.last_name} onChange={this.handleInput('last_name')} />
            </label>
            <label>Email
              <input type="text" value={this.state.email} onChange={this.handleInput('email')} />
            </label>
            <label>Password
              <input type="password" value={this.state.password} onChange={this.handleInput('password')} />
            </label>
            <button onClick={this.handleSubmit}>Submit</button>
          </form>
          <Link to="/signin" >Sign In Instead</Link>
        </div>
      )
    }

  }
}
export default SessionForm;