export default {
  name: 'signup',
  getReducer: () => {
    const initialState = {
      dataSignUp: null,
      dataConfirmSignUp: null,
      error: false
    };

    return (state = initialState, {type, payload}) => {
      if (type === 'SIGNUP_SUCCESS') {
        return Object.assign({}, state, {
          data: payload,
          error: false
        })
      }
      if (type === 'CONFIRM_SIGNUP_SUCCESS') {
        return Object.assign({}, state, {
          dataConfirmSignUp: payload,
          error: false
        })
      }
      if (type === 'SIGNUP_FAILED') {
        return Object.assign({}, state, {
          data: payload,
          error: true
        })
      }
      if (type === 'CONFIRM_SIGNUP_FAILED') {
        return Object.assign({}, state, {
          dataConfirmSignUp: payload,
          error: true
        })
      }
      return state
    }
  },

  doSignUp: (email, password) => ({ dispatch, cognitoSignUp }) => {
    cognitoSignUp(email, password).then(payload => {
      dispatch({type: 'SIGNUP_SUCCESS', payload})
    }).catch(payload => {
      console.log(payload);
      dispatch({type: 'SIGNUP_FAILED', payload})
    })
  },

  doConfirmSignUp: (email, code) => ({ dispatch, cognitoConfirmSignUp }) => {
    cognitoConfirmSignUp(email, code).then(payload => {
      dispatch({type: 'CONFIRM_SIGNUP_SUCCESS', payload })
    }).catch(payload => {
      console.log(payload);
      dispatch({type: 'CONFIRM_SIGNUP_FAILED', payload})
    })
  },

  selectSignUpState: state => state.signup

}
