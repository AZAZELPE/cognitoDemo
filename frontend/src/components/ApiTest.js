import { h } from 'preact'
import { connect } from "redux-bundler-preact";

const ApiTest = ({apitestState, doGetPeople, doGetBlog}) => (
  <div className="text-center signin">
    <button className="btn btn-lg btn-primary btn-block" onClick={doGetPeople}>Get People</button>
    <button className="btn btn-lg btn-primary btn-block" onClick={doGetBlog}>Get Blog</button>
    {
      console.log(apitestState)
    }
  </div>
);

export default connect(
  'selectApitestState',
  'doGetPeople',
  'doGetBlog',
  ApiTest
)
