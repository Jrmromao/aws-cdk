import * as cdk from "@aws-cdk/core";
import { Bucket, BucketEncryption, HttpMethods } from "@aws-cdk/aws-s3";
import * as Lambda from "@aws-cdk/aws-lambda-nodejs";
import { Runtime } from "@aws-cdk/aws-lambda";
import * as path from "path";
import { BucketDeployment, Source } from "@aws-cdk/aws-s3-deployment";
import { PolicyStatement } from "@aws-cdk/aws-iam";
import { CorsHttpMethod, HttpApi, HttpMethod } from "@aws-cdk/aws-apigatewayv2";
import { HttpLambdaIntegration } from "@aws-cdk/aws-apigatewayv2-integrations";

export class SimpleappStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const bucket = new Bucket(this, "mySimpleAppBucket", {
      encryption: BucketEncryption.S3_MANAGED,
    });

    const bucketDeploy = new BucketDeployment(this, "MySimpleAppBucket", {
      sources: [Source.asset(path.join(__dirname, "..", "photos"))],
      destinationBucket: bucket,
    });

    const lambdaGetPhotos = new Lambda.NodejsFunction(
      this,
      "MySimpleAppLambda",
      {
        runtime: Runtime.NODEJS_14_X,
        entry: path.join(__dirname, "..", "api", "get-photos", "index.ts"),
        handler: "getPhotos",
        environment: {
          PHOTO_BUCKET_NAME: bucket.bucketName,
        },
      }
    );

    const bucketContainerPermissions = new PolicyStatement();
    bucketContainerPermissions.addResources(bucket.bucketArn);
    bucketContainerPermissions.addActions("s3:listBucket");

    const bucketPermissions = new PolicyStatement();
    bucketPermissions.addResources(`${bucket.bucketArn}/*`);
    bucketPermissions.addActions("s3:GetObject", "s2:PutObject");

    lambdaGetPhotos.addToRolePolicy(bucketContainerPermissions);
    lambdaGetPhotos.addToRolePolicy(bucketPermissions);

    const httpApi = new HttpApi(this, "mySimpleAppHttpApi", {
      corsPreflight: {
        allowOrigins: ["*"],
        allowMethods: [CorsHttpMethod.GET],
      },
      apiName: "photo-api",
      createDefaultStage: true,
    });


    const photosIntegration = new HttpLambdaIntegration('BooksIntegration', lambdaGetPhotos);



    httpApi.addRoutes({
      path: "/getAllPhotos",
      methods: [HttpMethod.GET],
      integration: photosIntegration
    });

    new cdk.CfnOutput(this, "mySimpleAppBucketNameExport", {
      value: bucket.bucketName,
      exportName: "mySimpleAppBucketName",
    });

    new cdk.CfnOutput(this, "MySimpleApi", {
      value: httpApi.url!,
      exportName: "MySimpleAppAPIEndpoint",
    });
  }
}
