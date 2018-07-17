module.exports.responseBuilder = function(event) {
    return {
        statusCode: 200,
        headers: {
            'Access-Control-Allow-Origin': 'https://userddata.firebaseapp.com/'
        },
        body: JSON.stringify({
          message: 'Go Serverless v1.0! Your function executed successfully!',
          input: event,
        }),
    };
}