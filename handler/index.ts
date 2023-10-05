import { APIGatewayProxyEvent, Handler } from 'aws-lambda';

export const handler: Handler = async (event: APIGatewayProxyEvent) => {
  const body = JSON.parse(event.body || '{}');

  return {
    statusCode: 200,
    body,
  };
};