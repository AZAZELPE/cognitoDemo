'use strict';

module.exports.main = async (event, context) => {

  return {
    statusCode: 200,
    headers:{
      "X-Requested-With": '*',
      "Access-Control-Allow-Headers": 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,x-requested-with,X-Amz-Security-Token',
      "Access-Control-Allow-Origin": '*',
      "Access-Control-Allow-Methods": 'POST,GET,OPTIONS',
      "Access-Control-Allow-Credentials" : true
    },
    body: JSON.stringify({
      message: 'This is a mockup from blog function. Next line (input) is the event that was passed to this function',
      input: event,
    }),
  };

};
