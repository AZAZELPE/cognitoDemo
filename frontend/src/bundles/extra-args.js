import Amplify, { Auth, API } from 'aws-amplify'

export default {
  name: 'extra-args',
  getExtraArgs: (store) => {
    return {

      cognitoLogin: (email, password) => {
        return Auth.signIn(email, password);
      },

      cognitoSignUp: (email, password) => {
        return Auth.signUp({
          username: email,
          password,
          attributes: {
            email
          }
        });
      },

      cognitoConfirmSignUp: (email, code) => {
        return Auth.confirmSignUp(email, code);
      },

      getApiBlog: () => {
        return API.get('MyAPI', '/blog/5')
      },

      getApiPeople: () => {

        return Auth.currentSession().then(data => {
          const token = data.getAccessToken().getJwtToken();
          const myInit = {
            headers: { Authorization: token }
          };
          console.log(myInit);
          return API.get('MyAPI', '/people', myInit)
        });
      }

    }
  }
}
