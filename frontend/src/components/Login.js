import { h } from 'preact';
import { connect } from "redux-bundler-preact";

const Login = ({loginState, doLogin}) => {

  const values = {email: '', password: ''};

  const handleChange = event => {
    values[event.target.id] = event.target.value
  };

  const handleSubmit = event => {
    event.preventDefault();
    doLogin(values.email, values.password);
  };


  return (
    <div className="text-center signin">
      <form className="form-signin" onSubmit={handleSubmit}>
        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
        <label htmlFor="inputEmail" className="sr-only">Email address</label>
        <input type="email" id="email" className="form-control" placeholder="Email address" required autoFocus value={values.email} onChange={handleChange}/>
        <label htmlFor="inputPassword" className="sr-only">Password</label>
        <input type="password" id="password" className="form-control" placeholder="Password" required value={values.password} onChange={handleChange}/>
        <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
        <p className="mt-5 mb-3 text-muted">AzazelPE</p>
      </form>
      {
        console.log('Login -> STATE', loginState)
      }
    </div>
  )

};

export default connect(
  'selectLoginState',
  'doLogin',
  Login
)
