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
    // debugger
    const user = Object.assign({}, this.state);
    this.props.processForm(user)
  }

  render() {
    const { formType, errors } = this.props
    const errs = errors.map(err => {
      return (
        <li>err</li>
      )
    })
    
    if (formType === "checkemail") {
      return(
        <div className="outer">
          <div className="form" id="checkemail">
            
            <p><img id="lil-docs-logo" src="/assets/lil_docs_logo.png" /></p>
            <h1>Sign In</h1>
            <h3>Use an existing account</h3>
            <form >
              <div className="labelinput">
                <label className="email">Email</label>
                <input className="emailinput" type="text" value={this.state.email} onChange={this.handleInput('email')} placeholder="Email"/>
              </div>
              <ul>{errs}</ul>
              <div className="formfooter">
                <Link to="/signup" >Create account</Link>
                <button onClick={this.handleSubmit}>Next</button>
              </div>
            </form>
          </div>
        </div>

      )
    } else if (formType === "signin") {
      return(
        <div className = "outer" >
          <div className="form" id="signin">
            <p><img id="lil-docs-logo" src="/assets/lil_docs_logo.png" /></p>
            <h1>Welcome</h1>
            <div className="currentemail">{this.state.email}</div>
            <form>
              <div className="labelinput">
                <label className="password">Enter your password</label>
                <input className="passwordinput" type="password" value={this.state.password} onChange={this.handleInput('password')} placeholder="Enter your password" />
              </div>
              <ul>{errs}</ul>
              <div className="formfooter">
                <button onClick={this.handleSubmit}>Next</button>
              </div>
            </form>
          </div>
        </div>
      )
    } else {
      return (
        <div className="outer">
          <div className="form" id="signup">
            <p><img id="lil-docs-logo" src="/assets/lil_docs_logo.png" /></p>
            <h1>Create your lilDocs account</h1>
            <form className="signup">
                <div className="names">
                  <div className="labelinput">
                    <label>First name</label>
                    <input type="text" value={this.state.first_name} onChange={this.handleInput('first_name')} placeholder="First name"/>
                  </div>
                  <div className="labelinput">
                    <label id="label2">Last name</label>
                    <input id="input2" type="text" value={this.state.last_name} onChange={this.handleInput('last_name')} placeholder="Last name"/>
                  </div>
                </div>
              <div className="labelinput" id="label3">
                  <label>Email</label>
                <input id="input3" type="text" value={this.state.email} onChange={this.handleInput('email')} placeholder="Email"/>
              </div>
              <div className="labelinput" id="label4" >
                  <label>Password</label>
                <input id="input4" type="password" value={this.state.password} onChange={this.handleInput('password')} placeholder="Password"/>
              </div>
              <div className="formfooter">
                <Link to="/signin" >Sign In Instead</Link>
                <button onClick={this.handleSubmit}>Submit</button>
              </div>
            </form>
            <ul>{errs}</ul>
          </div>
        </div>
      )
    }

  }
}
export default SessionForm;