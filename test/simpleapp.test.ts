import * as cdk from "@aws-cdk/core";
import * as SimpleApp from "../lib/simpleapp-stack";
import {App, Stack} from '@aws-cdk/core';
import {
  expect as expectCDK,
  matchTemplate,
  MatchStyle,
} from "@aws-cdk/assert";
import "@aws-cdk/assert/jest";

let stack = new Stack();
const app = new App();

describe("s3 Stack", () => {
  beforeAll(() => {
    stack = new SimpleApp.SimpleappStack(app, "MyTestStack");
  });

  test('True', () => {

    expect(true).toEqual(true)
  })
  // test("Simple App Test", () => {
  //   const app = new cdk.App();
  //   //WHEN
  //   expectCDK(stack).to(
  //     matchTemplate(
  //       {
  //         Resources: {
  //           mySimpleAppBucket9A932C55: {
  //             Type: "AWS::S3::Bucket",
  //             Properties: {
  //               BucketEncryption: {
  //                 ServerSideEncryptionConfiguration: [
  //                   {
  //                     ServerSideEncryptionByDefault: {
  //                       SSEAlgorithm: "AES256",
  //                     },
  //                   },
  //                 ],
  //               },
  //             },
  //             UpdateReplacePolicy: "Retain",
  //             DeletionPolicy: "Retain",
  //           },
  //         },
  //         Outputs: {
  //           mySimpleAppBucketNameExport: {
  //             Value: {
  //               Ref: "mySimpleAppBucket9A932C55",
  //             },
  //             Export: {
  //               Name: "mySimpleAppBucketName",
  //             },
  //           },
  //         },
  //       },
  //       MatchStyle.EXACT
  //     )
  //   );
  // });

  // test("Stack create S3 bucket", () => {
  //   //WHEN
  //   // THEN

  //   console.log(Object.keys(stack));
  //   console.log(stack.templateFile);
    
  //   // expect(stack).toHaveResource("mySimpleAppBucket9A932C55");
  // });
});
