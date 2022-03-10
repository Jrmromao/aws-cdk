import { APIGatewayProxyEventV2, APIGatewayProxyResultV2, Context } from "aws-lambda";
declare function getPhotos(event: APIGatewayProxyEventV2, context: Context): Promise<APIGatewayProxyResultV2>;
export { getPhotos };
