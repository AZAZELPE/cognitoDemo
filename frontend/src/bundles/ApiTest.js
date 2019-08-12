export default {
  name: 'apitest',
  getReducer: () => {
    const initialState = {
      data: null,
      error: false
    };

    return (state = initialState, {type, payload}) => {
      if (type === 'API_REQUEST_SUCCESS') {
        return Object.assign({}, state, {
          data: payload,
          error: false
        })
      }
      if (type === 'API_REQUEST_FAILED') {
        return Object.assign({}, state, {
          data: payload,
          error: true
        })
      }
      return state
    }
  },

  doGetPeople: () => ({ dispatch, getApiPeople }) => {
    getApiPeople().then(payload => {
      dispatch({type: 'API_REQUEST_SUCCESS', payload})
    }).catch(payload => {
      dispatch({type: 'API_REQUEST_FAILED', payload})
    })
  },

  doGetBlog: () => ({ dispatch, getApiBlog }) => {
    getApiBlog().then(payload => {
      dispatch({type: 'API_REQUEST_SUCCESS', payload})
    }).catch(payload => {
      dispatch({type: 'API_REQUEST_FAILED', payload})
    })
  },

  selectApitestState: state => state.apitest

}
