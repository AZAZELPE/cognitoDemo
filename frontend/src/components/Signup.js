import { h } from 'preact';
import { connect } from "redux-bundler-preact";

const Signup = ({signUpState, doSignUp, doConfirmSignUp}) => {

  const values = {email: '', password: '', code: ''};

  const handleChange = event => {
    values[event.target.id] = event.target.value
  };

  const handleSubmit_signup = event => {
    event.preventDefault();
    console.log(values);
    doSignUp(values.email, values.password);
  };

  const handleSubmit_confirmCode = event => {
    event.preventDefault();
    doConfirmSignUp(values.email, values.code);
  };


  return (
    <div className="text-center signin">
      <form className="form-signin" onSubmit={handleSubmit_signup}>
        <h1 className="h3 mb-3 font-weight-normal">Registration SignUp</h1>
        <label htmlFor="inputEmail" className="sr-only">Email address</label>
        <input type="email" id="email" className="form-control" placeholder="Email address" required autoFocus value={values.email} onChange={handleChange}/>
        <label htmlFor="inputPassword" className="sr-only">Password</label>
        <input type="password" id="password" className="form-control" placeholder="Password" required value={values.password} onChange={handleChange}/>
        <button className="btn btn-lg btn-primary btn-block" type="submit">Sign up</button>
        <p className="mt-5 mb-3 text-muted">AzazelPE</p>
      </form>
      <form className="form-signin" onSubmit={handleSubmit_confirmCode}>
        <h1 className="h3 mb-3 font-weight-normal">Code Validation</h1>
        <label htmlFor="inputEmail" className="sr-only">Email address</label>
        <input type="email" id="email" className="form-control" placeholder="Email address" required autoFocus value={values.email} onChange={handleChange}/>
        <label htmlFor="inputEmail" className="sr-only">Confirmation code</label>
        <input type="number" id="code" className="form-control" placeholder="Confirmation code" required autoFocus value={values.code} onChange={handleChange}/>
        <button className="btn btn-lg btn-primary btn-block" type="submit">Confirm Code</button>
        <p className="mt-5 mb-3 text-muted">AzazelPE</p>
      </form>
      {
        console.log('SignUp -> STATE', signUpState)
      }
    </div>
  )

};

export default connect(
  'selectSignUpState',
  'doSignUp',
  'doConfirmSignUp',
  Signup
)
