import { composeBundles } from "redux-bundler";
import Login from './Login'
import Signup from './Signup'
import extraArgs from './extra-args'
import ApiTest from "./ApiTest";

export default composeBundles(
  Login,
  Signup,
  ApiTest,
  extraArgs

)
