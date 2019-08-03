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
    this.handleLinkClick = this.handleLinkClick.bind(this)
  }
  
  componentDidMount () {
    this.setState(this.props.loginUser)
    this.props.removeErrors()
  }
  
  handleInput(type) {
    return(e) => {
      this.setState( { [type]: e.target.value })
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then( () => {
      if (this.props.match.path === "/signin") {
        this.props.history.push("/verify")
      } else {
        this.props.history.push("/documents")
      }
    })
  }

  handleLinkClick(e) {
    e.preventDefault()
    this.props.loginDemoUser()
  }

  render() {
    const { formType, errors } = this.props
    const errs = errors.map( (err, idx) => { return (<li key={`err${idx}`}>{err}</li>) })
    // checkemail if in the initial email page
    if (formType === "checkemail") {
      return(
        <div className="outer">
          <div className="form" id="checkemail">
            <p><img id="lil-docs-logo" src={window.lilDocsURL} /></p>
            <h1>Sign In</h1>
            <h3>Use an existing account</h3>
            <form onSubmit={this.handleSubmit}>
              <div className="labelinput">
                <label className={`email ${errs.length ? "errored-label" : ""}`}>Email</label>
                <input className={`emailinput ${errs.length ? "errored-bord" : "" }`} type="text" value={this.state.email} autoocus="" onChange={this.handleInput('email')} placeholder="Email" required />
                <div className="errorsdiv"><ul className="errors">{errs}</ul></div>
              </div>
              <div className="demo">Don't want to make an account? Log in as the <a onClick={this.handleLinkClick}>Demo User.</a></div>
              <div className="formfooter">
                <Link to="/signup" >Create account</Link>
                <input className="nextbutton" type="submit" value="Next" />
              </div>
            </form>
          </div>
        </div>

      )
      // at this form if the email entered previously is in the database
    } else if (formType === "signin") {
      return(
        <div className = "outer" >
          <div className="form" id="signin">
            <p><img id="lil-docs-logo" src={window.lilDocsURL} /></p>
            <h1>Welcome</h1>
            <div className="currentemail">
              <img id="person-logo" src={window.personURL} />{this.state.email}
              </div>
            <form onSubmit={this.handleSubmit}>
              <div className="labelinput">
                <label className={`password ${errs.length ? "errored-label" : ""}`}>Enter your password</label>
                <input className={`passwordinput ${errs.length ? "errored-bord" : ""}`} type="password" value={this.state.password} autofocus="" onChange={this.handleInput('password')} placeholder="Enter your password" required/>
                <div className="errorsdiv"><ul className="errors">{errs}</ul></div>
              </div>
              <div className="demo">Don't want to make an account? Log in as the <a onClick={this.handleLinkClick}>Demo User.</a></div>
              <div className="formfooter">
                <input className="nextbutton" type="submit" value="Next" />
              </div>
            </form>
          </div>
        </div>
      )
      // for the case that a user is signing up
    } else {
      return (
        <div className="outer">
          <div className="wrapper">
          <div className="form" id="signup">
              <p><img id="lil-docs-logo" src={window.lilDocsURL} /></p>
            <h1>Create your lilDocs account</h1>
              <form className="signup" onSubmit={this.handleSubmit}>
                <div className="names">
                  <div className="labelinput" id="li1">
                    <label id="label1">First name</label>
                  <input id="input1" type="text" value={this.state.first_name} autofocus="" onChange={this.handleInput('first_name')} placeholder="First name" required/>
                  </div>
                  <div className="labelinput" id="li2">
                    <label id="label2">Last name</label>
                    <input id="input2" type="text" value={this.state.last_name} onChange={this.handleInput('last_name')} placeholder="Last name" required/>
                  </div>
                </div>
                <div className="labelinput" id=" li3">
                  <label className={`${errors.some(el => el.includes("Email")) ? "errored-label" : ""}`}>Email</label>
                  <input className={`${errors.some(el => el.includes("Email")) ? "errored-bord" : ""}`} id="input3" type="text" value={this.state.email} onChange={this.handleInput('email')} placeholder="Email" required/>
              </div>
              <div className="labelinput" id="li4" >
                  <label className={`${errors.some(el => el.includes("Password")) ? "errored-label" : ""}`}>Password</label>
                  <input className={`${errors.some(el => el.includes("Password")) ? "errored-bord" : ""}`} id="input4" type="password" value={this.state.password} onChange={this.handleInput('password')} placeholder="Password" required/>
                <div className="demo">Don't want to make an account? Log in as the <a onClick={this.handleLinkClick}>Demo User.</a></div>
                <div className="errorsdiv"><ul className="errors">{errs}</ul></div>
              </div>
              <div className="formfooter">
                <Link to="/signin" >Sign In Instead</Link>
                <input className="nextbutton" type="submit" value="Next" />
              </div>
            </form>
            </div>
            <div >
              <p><img id="createlogo" src={window.createLogoURL} /></p>
            </div>
          </div>
        </div>
      )
    }

  }
}


export default SessionForm;