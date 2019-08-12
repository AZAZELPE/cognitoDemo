import { render, h } from 'preact'
import { Provider } from "redux-bundler-preact";
import getStore from './bundles'
import App from './components/App'
import amplifyConfig from './config/amplify'

render(
  <Provider store={getStore()}>
    <App/>
  </Provider>,
  document.getElementById('app'));
