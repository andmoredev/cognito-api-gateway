import { initializePowertools } from '../shared/lambda-powertools.mjs';

export const handler = initializePowertools(async (event, context) => {
  try {
    const input = JSON.parse(event.body);
    return {
      statusCode: 200,
      body: JSON.stringify(input)
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Something went wrong!' })
    };
  }
});
