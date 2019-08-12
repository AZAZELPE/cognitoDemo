import { h } from 'preact'
import { connect } from "redux-bundler-preact";
import Login from "./Login";
import Signup from "./Signup";
import ApiTest from "./ApiTest";


const App = () => (
  <div>
    <Login/>
    <ApiTest/>
    <Signup/>
  </div>
)

export default connect(
  App
)
