export default {
  name: 'login',
  getReducer: () => {
    const initialState = {
      data: null,
      error: false
    };

    return (state = initialState, {type, payload}) => {
      if (type === 'LOGIN_SUCCESS') {
        return Object.assign({}, state, {
          data: payload,
          error: false
        })
      }
      if (type === 'LOGIN_FAILED') {
        return Object.assign({}, state, {
          data: payload,
          error: true
        })
      }
      return state
    }
  },

  doLogin: (email, password) => ({ dispatch, cognitoLogin }) => {
    cognitoLogin(email, password).then(payload => {
      dispatch({type: 'LOGIN_SUCCESS', payload})
    }).catch(payload => {
      dispatch({type: 'LOGIN_FAILED', payload})
    })
  },

  selectLoginState: state => state.login

}
