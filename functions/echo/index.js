const { initializePowertools, logger } = process.env.LAMBDA_TASK_ROOT ?
  require('/opt/nodejs/lambda-powertools') :
  require('../../layers/lambda-powertools/lambda-powertools');
const apigateway = process.env.LAMBDA_TASK_ROOT ? require('/opt/nodejs/apigateway') : require('../../layers/apigateway/apigateway');

exports.handler = initializePowertools(async (event, context) => {
  try {
    const input = JSON.parse(event.body);
    return apigateway.getResponse(200, input);
  } catch (err) {
    logger.error(err, err.stack);
    return apigateway.getResponse(500, { message: 'Something went wrong!' });
  }
});
