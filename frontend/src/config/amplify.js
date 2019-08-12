import Amplify from "aws-amplify";

export default Amplify.configure({
  Auth: {
    // REQUIRED - Amazon Cognito Identity Pool ID
    identityPoolId: 'us-east-1:5d8e64db-01bb-4e67-b3d7-0667c4499eec',
    // REQUIRED - Amazon Cognito Region
    region: 'us-east-1',
    // OPTIONAL - Amazon Cognito User Pool ID
    userPoolId: 'us-east-1_oaBrf2e9C',
    // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
    userPoolWebClientId: '3mtpj0oi9ff88lkcphfg9nr75f',
  },
  API: {
    endpoints: [
      {
        name: "MyAPI",
        endpoint: "https://wo5cz3ssh5.execute-api.us-east-1.amazonaws.com/dev"  //change this URL
      }
    ]
  }
});
