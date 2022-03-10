import {
  APIGatewayProxyEventV2,
  APIGatewayProxyResultV2,
  Context,
} from "aws-lambda";
import { AWSError, S3 } from "aws-sdk";

const bucketName = process.env.PHOTO_BUCKET_NAME!;
const s3 = new S3();

const generateUrl = async (
  object: S3.Object
): Promise<{ fileName: string; url: string }> => {
  const url = await s3.getSignedUrlPromise("getObject", {
    Bucket: bucketName,
    Key: object.Key!,
    Expires: 24 * 60 * 60,
  });
  return {
    fileName: object.Key!,
    url,
  };
};

async function getPhotos(
  event: APIGatewayProxyEventV2,
  context: Context
): Promise<APIGatewayProxyResultV2> {
  console.log("I got the name: ", bucketName);

  try {
    const { Contents: result } = await s3
      .listObjects({ Bucket: bucketName })
      .promise();

    const photos = await Promise.all(
      result!.map((result) => generateUrl(result))
    );
    return {
      statusCode: 200,
      body: JSON.stringify(photos),
    };
  } catch (err: any) {
    return {
      statusCode: 500,
      body: err.message,
    };
  }
}
export { getPhotos };
