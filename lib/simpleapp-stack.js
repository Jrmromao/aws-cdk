"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleappStack = void 0;
const cdk = __importStar(require("@aws-cdk/core"));
const aws_s3_1 = require("@aws-cdk/aws-s3");
const lambda = __importStar(require("@aws-cdk/aws-lambda-nodejs"));
const aws_lambda_1 = require("@aws-cdk/aws-lambda");
const path = __importStar(require("path"));
const aws_s3_deployment_1 = require("@aws-cdk/aws-s3-deployment");
const aws_iam_1 = require("@aws-cdk/aws-iam");
const aws_apigatewayv2_1 = require("@aws-cdk/aws-apigatewayv2");
const aws_apigatewayv2_integrations_1 = require("@aws-cdk/aws-apigatewayv2-integrations");
class SimpleappStack extends cdk.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        const bucket = new aws_s3_1.Bucket(this, "mySimpleAppBucket", {
            encryption: aws_s3_1.BucketEncryption.S3_MANAGED,
        });
        const bucketDeploy = new aws_s3_deployment_1.BucketDeployment(this, "MySimpleAppBucket", {
            sources: [aws_s3_deployment_1.Source.asset(path.join(__dirname, "..", "photos"))],
            destinationBucket: bucket,
        });
        const lambdaGetPhotos = new lambda.NodejsFunction(this, "MySimpleAppLambda", {
            runtime: aws_lambda_1.Runtime.NODEJS_14_X,
            entry: path.join(__dirname, "..", "api", "get-photos", "index.ts"),
            handler: "getPhotos",
            environment: {
                PHOTO_BUCKET_NAME: bucket.bucketName,
            },
        });
        const bucketContainerPermissions = new aws_iam_1.PolicyStatement();
        bucketContainerPermissions.addResources(bucket.bucketArn);
        bucketContainerPermissions.addActions("s3:listBucket");
        const bucketPermissions = new aws_iam_1.PolicyStatement();
        bucketPermissions.addResources(`${bucket.bucketArn}/*`);
        bucketPermissions.addActions("s3:GetObject", "s2:PutObject");
        lambdaGetPhotos.addToRolePolicy(bucketContainerPermissions);
        lambdaGetPhotos.addToRolePolicy(bucketPermissions);
        const httpApi = new aws_apigatewayv2_1.HttpApi(this, "mySimpleAppHttpApi", {
            corsPreflight: {
                allowOrigins: ["*"],
                allowMethods: [aws_apigatewayv2_1.CorsHttpMethod.GET],
            },
            apiName: "photo-api",
            createDefaultStage: true,
        });
        httpApi.addRoutes({
            path: "/getAllPhotos",
            methods: [aws_apigatewayv2_1.HttpMethod.GET],
            integration: new aws_apigatewayv2_integrations_1.HttpLambdaIntegration("MySimpleAppIntegration", lambdaGetPhotos),
        });
        new cdk.CfnOutput(this, "mySimpleAppBucketNameExport", {
            value: bucket.bucketName,
            exportName: "mySimpleAppBucketName",
        });
        new cdk.CfnOutput(this, "", {
            value: httpApi.url,
            exportName: "MySimpleAppAPIEndpoint",
        });
    }
}
exports.SimpleappStack = SimpleappStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ltcGxlYXBwLXN0YWNrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2ltcGxlYXBwLXN0YWNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtREFBcUM7QUFDckMsNENBQXdFO0FBQ3hFLG1FQUFxRDtBQUNyRCxvREFBOEM7QUFDOUMsMkNBQTZCO0FBQzdCLGtFQUFzRTtBQUN0RSw4Q0FBbUQ7QUFDbkQsZ0VBQWdGO0FBQ2hGLDBGQUErRTtBQUUvRSxNQUFhLGNBQWUsU0FBUSxHQUFHLENBQUMsS0FBSztJQUMzQyxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQXNCO1FBQ2xFLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRXhCLE1BQU0sTUFBTSxHQUFHLElBQUksZUFBTSxDQUFDLElBQUksRUFBRSxtQkFBbUIsRUFBRTtZQUNuRCxVQUFVLEVBQUUseUJBQWdCLENBQUMsVUFBVTtTQUN4QyxDQUFDLENBQUM7UUFFSCxNQUFNLFlBQVksR0FBRyxJQUFJLG9DQUFnQixDQUFDLElBQUksRUFBRSxtQkFBbUIsRUFBRTtZQUNuRSxPQUFPLEVBQUUsQ0FBQywwQkFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUM3RCxpQkFBaUIsRUFBRSxNQUFNO1NBQzFCLENBQUMsQ0FBQztRQUVILE1BQU0sZUFBZSxHQUFHLElBQUksTUFBTSxDQUFDLGNBQWMsQ0FDL0MsSUFBSSxFQUNKLG1CQUFtQixFQUNuQjtZQUNFLE9BQU8sRUFBRSxvQkFBTyxDQUFDLFdBQVc7WUFDNUIsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLFVBQVUsQ0FBQztZQUNsRSxPQUFPLEVBQUUsV0FBVztZQUNwQixXQUFXLEVBQUU7Z0JBQ1gsaUJBQWlCLEVBQUUsTUFBTSxDQUFDLFVBQVU7YUFDckM7U0FDRixDQUNGLENBQUM7UUFFRixNQUFNLDBCQUEwQixHQUFHLElBQUkseUJBQWUsRUFBRSxDQUFDO1FBQ3pELDBCQUEwQixDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDMUQsMEJBQTBCLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBRXZELE1BQU0saUJBQWlCLEdBQUcsSUFBSSx5QkFBZSxFQUFFLENBQUM7UUFDaEQsaUJBQWlCLENBQUMsWUFBWSxDQUFDLEdBQUcsTUFBTSxDQUFDLFNBQVMsSUFBSSxDQUFDLENBQUM7UUFDeEQsaUJBQWlCLENBQUMsVUFBVSxDQUFDLGNBQWMsRUFBRSxjQUFjLENBQUMsQ0FBQztRQUU3RCxlQUFlLENBQUMsZUFBZSxDQUFDLDBCQUEwQixDQUFDLENBQUM7UUFDNUQsZUFBZSxDQUFDLGVBQWUsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBRW5ELE1BQU0sT0FBTyxHQUFHLElBQUksMEJBQU8sQ0FBQyxJQUFJLEVBQUUsb0JBQW9CLEVBQUU7WUFDdEQsYUFBYSxFQUFFO2dCQUNiLFlBQVksRUFBRSxDQUFDLEdBQUcsQ0FBQztnQkFDbkIsWUFBWSxFQUFFLENBQUMsaUNBQWMsQ0FBQyxHQUFHLENBQUM7YUFDbkM7WUFDRCxPQUFPLEVBQUUsV0FBVztZQUNwQixrQkFBa0IsRUFBRSxJQUFJO1NBQ3pCLENBQUMsQ0FBQztRQUVILE9BQU8sQ0FBQyxTQUFTLENBQUM7WUFDaEIsSUFBSSxFQUFFLGVBQWU7WUFDckIsT0FBTyxFQUFFLENBQUMsNkJBQVUsQ0FBQyxHQUFHLENBQUM7WUFDekIsV0FBVyxFQUFFLElBQUkscURBQXFCLENBQ3BDLHdCQUF3QixFQUN4QixlQUFlLENBQ2hCO1NBQ0YsQ0FBQyxDQUFDO1FBRUgsSUFBSSxHQUFHLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSw2QkFBNkIsRUFBRTtZQUNyRCxLQUFLLEVBQUUsTUFBTSxDQUFDLFVBQVU7WUFDeEIsVUFBVSxFQUFFLHVCQUF1QjtTQUNwQyxDQUFDLENBQUM7UUFFSCxJQUFJLEdBQUcsQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRTtZQUMxQixLQUFLLEVBQUUsT0FBTyxDQUFDLEdBQUk7WUFDbkIsVUFBVSxFQUFFLHdCQUF3QjtTQUNyQyxDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0Y7QUFqRUQsd0NBaUVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgY2RrIGZyb20gXCJAYXdzLWNkay9jb3JlXCI7XG5pbXBvcnQgeyBCdWNrZXQsIEJ1Y2tldEVuY3J5cHRpb24sIEh0dHBNZXRob2RzIH0gZnJvbSBcIkBhd3MtY2RrL2F3cy1zM1wiO1xuaW1wb3J0ICogYXMgbGFtYmRhIGZyb20gXCJAYXdzLWNkay9hd3MtbGFtYmRhLW5vZGVqc1wiO1xuaW1wb3J0IHsgUnVudGltZSB9IGZyb20gXCJAYXdzLWNkay9hd3MtbGFtYmRhXCI7XG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gXCJwYXRoXCI7XG5pbXBvcnQgeyBCdWNrZXREZXBsb3ltZW50LCBTb3VyY2UgfSBmcm9tIFwiQGF3cy1jZGsvYXdzLXMzLWRlcGxveW1lbnRcIjtcbmltcG9ydCB7IFBvbGljeVN0YXRlbWVudCB9IGZyb20gXCJAYXdzLWNkay9hd3MtaWFtXCI7XG5pbXBvcnQgeyBDb3JzSHR0cE1ldGhvZCwgSHR0cEFwaSwgSHR0cE1ldGhvZCB9IGZyb20gXCJAYXdzLWNkay9hd3MtYXBpZ2F0ZXdheXYyXCI7XG5pbXBvcnQgeyBIdHRwTGFtYmRhSW50ZWdyYXRpb24gfSBmcm9tIFwiQGF3cy1jZGsvYXdzLWFwaWdhdGV3YXl2Mi1pbnRlZ3JhdGlvbnNcIjtcblxuZXhwb3J0IGNsYXNzIFNpbXBsZWFwcFN0YWNrIGV4dGVuZHMgY2RrLlN0YWNrIHtcbiAgY29uc3RydWN0b3Ioc2NvcGU6IGNkay5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzPzogY2RrLlN0YWNrUHJvcHMpIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHByb3BzKTtcblxuICAgIGNvbnN0IGJ1Y2tldCA9IG5ldyBCdWNrZXQodGhpcywgXCJteVNpbXBsZUFwcEJ1Y2tldFwiLCB7XG4gICAgICBlbmNyeXB0aW9uOiBCdWNrZXRFbmNyeXB0aW9uLlMzX01BTkFHRUQsXG4gICAgfSk7XG5cbiAgICBjb25zdCBidWNrZXREZXBsb3kgPSBuZXcgQnVja2V0RGVwbG95bWVudCh0aGlzLCBcIk15U2ltcGxlQXBwQnVja2V0XCIsIHtcbiAgICAgIHNvdXJjZXM6IFtTb3VyY2UuYXNzZXQocGF0aC5qb2luKF9fZGlybmFtZSwgXCIuLlwiLCBcInBob3Rvc1wiKSldLFxuICAgICAgZGVzdGluYXRpb25CdWNrZXQ6IGJ1Y2tldCxcbiAgICB9KTtcblxuICAgIGNvbnN0IGxhbWJkYUdldFBob3RvcyA9IG5ldyBsYW1iZGEuTm9kZWpzRnVuY3Rpb24oXG4gICAgICB0aGlzLFxuICAgICAgXCJNeVNpbXBsZUFwcExhbWJkYVwiLFxuICAgICAge1xuICAgICAgICBydW50aW1lOiBSdW50aW1lLk5PREVKU18xNF9YLFxuICAgICAgICBlbnRyeTogcGF0aC5qb2luKF9fZGlybmFtZSwgXCIuLlwiLCBcImFwaVwiLCBcImdldC1waG90b3NcIiwgXCJpbmRleC50c1wiKSxcbiAgICAgICAgaGFuZGxlcjogXCJnZXRQaG90b3NcIixcbiAgICAgICAgZW52aXJvbm1lbnQ6IHtcbiAgICAgICAgICBQSE9UT19CVUNLRVRfTkFNRTogYnVja2V0LmJ1Y2tldE5hbWUsXG4gICAgICAgIH0sXG4gICAgICB9XG4gICAgKTtcblxuICAgIGNvbnN0IGJ1Y2tldENvbnRhaW5lclBlcm1pc3Npb25zID0gbmV3IFBvbGljeVN0YXRlbWVudCgpO1xuICAgIGJ1Y2tldENvbnRhaW5lclBlcm1pc3Npb25zLmFkZFJlc291cmNlcyhidWNrZXQuYnVja2V0QXJuKTtcbiAgICBidWNrZXRDb250YWluZXJQZXJtaXNzaW9ucy5hZGRBY3Rpb25zKFwiczM6bGlzdEJ1Y2tldFwiKTtcblxuICAgIGNvbnN0IGJ1Y2tldFBlcm1pc3Npb25zID0gbmV3IFBvbGljeVN0YXRlbWVudCgpO1xuICAgIGJ1Y2tldFBlcm1pc3Npb25zLmFkZFJlc291cmNlcyhgJHtidWNrZXQuYnVja2V0QXJufS8qYCk7XG4gICAgYnVja2V0UGVybWlzc2lvbnMuYWRkQWN0aW9ucyhcInMzOkdldE9iamVjdFwiLCBcInMyOlB1dE9iamVjdFwiKTtcblxuICAgIGxhbWJkYUdldFBob3Rvcy5hZGRUb1JvbGVQb2xpY3koYnVja2V0Q29udGFpbmVyUGVybWlzc2lvbnMpO1xuICAgIGxhbWJkYUdldFBob3Rvcy5hZGRUb1JvbGVQb2xpY3koYnVja2V0UGVybWlzc2lvbnMpO1xuXG4gICAgY29uc3QgaHR0cEFwaSA9IG5ldyBIdHRwQXBpKHRoaXMsIFwibXlTaW1wbGVBcHBIdHRwQXBpXCIsIHtcbiAgICAgIGNvcnNQcmVmbGlnaHQ6IHtcbiAgICAgICAgYWxsb3dPcmlnaW5zOiBbXCIqXCJdLFxuICAgICAgICBhbGxvd01ldGhvZHM6IFtDb3JzSHR0cE1ldGhvZC5HRVRdLFxuICAgICAgfSxcbiAgICAgIGFwaU5hbWU6IFwicGhvdG8tYXBpXCIsXG4gICAgICBjcmVhdGVEZWZhdWx0U3RhZ2U6IHRydWUsXG4gICAgfSk7XG5cbiAgICBodHRwQXBpLmFkZFJvdXRlcyh7XG4gICAgICBwYXRoOiBcIi9nZXRBbGxQaG90b3NcIixcbiAgICAgIG1ldGhvZHM6IFtIdHRwTWV0aG9kLkdFVF0sXG4gICAgICBpbnRlZ3JhdGlvbjogbmV3IEh0dHBMYW1iZGFJbnRlZ3JhdGlvbihcbiAgICAgICAgXCJNeVNpbXBsZUFwcEludGVncmF0aW9uXCIsXG4gICAgICAgIGxhbWJkYUdldFBob3Rvc1xuICAgICAgKSxcbiAgICB9KTtcblxuICAgIG5ldyBjZGsuQ2ZuT3V0cHV0KHRoaXMsIFwibXlTaW1wbGVBcHBCdWNrZXROYW1lRXhwb3J0XCIsIHtcbiAgICAgIHZhbHVlOiBidWNrZXQuYnVja2V0TmFtZSxcbiAgICAgIGV4cG9ydE5hbWU6IFwibXlTaW1wbGVBcHBCdWNrZXROYW1lXCIsXG4gICAgfSk7XG5cbiAgICBuZXcgY2RrLkNmbk91dHB1dCh0aGlzLCBcIlwiLCB7XG4gICAgICB2YWx1ZTogaHR0cEFwaS51cmwhLFxuICAgICAgZXhwb3J0TmFtZTogXCJNeVNpbXBsZUFwcEFQSUVuZHBvaW50XCIsXG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==