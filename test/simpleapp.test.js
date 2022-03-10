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
const SimpleApp = __importStar(require("../lib/simpleapp-stack"));
const core_1 = require("@aws-cdk/core");
require("@aws-cdk/assert/jest");
let stack = new core_1.Stack();
const app = new core_1.App();
describe("s3 Stack", () => {
    beforeAll(() => {
        stack = new SimpleApp.SimpleappStack(app, "MyTestStack");
    });
    test('True', () => {
        expect(true).toEqual(true);
    });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ltcGxlYXBwLnRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzaW1wbGVhcHAudGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxrRUFBb0Q7QUFDcEQsd0NBQXlDO0FBTXpDLGdDQUE4QjtBQUU5QixJQUFJLEtBQUssR0FBRyxJQUFJLFlBQUssRUFBRSxDQUFDO0FBQ3hCLE1BQU0sR0FBRyxHQUFHLElBQUksVUFBRyxFQUFFLENBQUM7QUFFdEIsUUFBUSxDQUFDLFVBQVUsRUFBRSxHQUFHLEVBQUU7SUFDeEIsU0FBUyxDQUFDLEdBQUcsRUFBRTtRQUNiLEtBQUssR0FBRyxJQUFJLFNBQVMsQ0FBQyxjQUFjLENBQUMsR0FBRyxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBQzNELENBQUMsQ0FBQyxDQUFDO0lBRUgsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUU7UUFFaEIsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUM1QixDQUFDLENBQUMsQ0FBQTtJQUNGLGtDQUFrQztJQUNsQywrQkFBK0I7SUFDL0IsV0FBVztJQUNYLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsVUFBVTtJQUNWLHVCQUF1QjtJQUN2Qix5Q0FBeUM7SUFDekMsdUNBQXVDO0lBQ3ZDLDRCQUE0QjtJQUM1QixvQ0FBb0M7SUFDcEMsdURBQXVEO0lBQ3ZELHNCQUFzQjtJQUN0Qix1REFBdUQ7SUFDdkQsZ0RBQWdEO0lBQ2hELHlCQUF5QjtJQUN6Qix1QkFBdUI7SUFDdkIscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsNkNBQTZDO0lBQzdDLHdDQUF3QztJQUN4QyxlQUFlO0lBQ2YsYUFBYTtJQUNiLHFCQUFxQjtJQUNyQiwyQ0FBMkM7SUFDM0MsdUJBQXVCO0lBQ3ZCLGtEQUFrRDtJQUNsRCxpQkFBaUI7SUFDakIsd0JBQXdCO0lBQ3hCLCtDQUErQztJQUMvQyxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGFBQWE7SUFDYixXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLFFBQVE7SUFDUixPQUFPO0lBQ1AsTUFBTTtJQUVOLHlDQUF5QztJQUN6QyxXQUFXO0lBQ1gsWUFBWTtJQUVaLHFDQUFxQztJQUNyQyxxQ0FBcUM7SUFFckMsa0VBQWtFO0lBQ2xFLE1BQU07QUFDUixDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGNkayBmcm9tIFwiQGF3cy1jZGsvY29yZVwiO1xuaW1wb3J0ICogYXMgU2ltcGxlQXBwIGZyb20gXCIuLi9saWIvc2ltcGxlYXBwLXN0YWNrXCI7XG5pbXBvcnQge0FwcCwgU3RhY2t9IGZyb20gJ0Bhd3MtY2RrL2NvcmUnO1xuaW1wb3J0IHtcbiAgZXhwZWN0IGFzIGV4cGVjdENESyxcbiAgbWF0Y2hUZW1wbGF0ZSxcbiAgTWF0Y2hTdHlsZSxcbn0gZnJvbSBcIkBhd3MtY2RrL2Fzc2VydFwiO1xuaW1wb3J0IFwiQGF3cy1jZGsvYXNzZXJ0L2plc3RcIjtcblxubGV0IHN0YWNrID0gbmV3IFN0YWNrKCk7XG5jb25zdCBhcHAgPSBuZXcgQXBwKCk7XG5cbmRlc2NyaWJlKFwiczMgU3RhY2tcIiwgKCkgPT4ge1xuICBiZWZvcmVBbGwoKCkgPT4ge1xuICAgIHN0YWNrID0gbmV3IFNpbXBsZUFwcC5TaW1wbGVhcHBTdGFjayhhcHAsIFwiTXlUZXN0U3RhY2tcIik7XG4gIH0pO1xuXG4gIHRlc3QoJ1RydWUnLCAoKSA9PiB7XG5cbiAgICBleHBlY3QodHJ1ZSkudG9FcXVhbCh0cnVlKVxuICB9KVxuICAvLyB0ZXN0KFwiU2ltcGxlIEFwcCBUZXN0XCIsICgpID0+IHtcbiAgLy8gICBjb25zdCBhcHAgPSBuZXcgY2RrLkFwcCgpO1xuICAvLyAgIC8vV0hFTlxuICAvLyAgIGV4cGVjdENESyhzdGFjaykudG8oXG4gIC8vICAgICBtYXRjaFRlbXBsYXRlKFxuICAvLyAgICAgICB7XG4gIC8vICAgICAgICAgUmVzb3VyY2VzOiB7XG4gIC8vICAgICAgICAgICBteVNpbXBsZUFwcEJ1Y2tldDlBOTMyQzU1OiB7XG4gIC8vICAgICAgICAgICAgIFR5cGU6IFwiQVdTOjpTMzo6QnVja2V0XCIsXG4gIC8vICAgICAgICAgICAgIFByb3BlcnRpZXM6IHtcbiAgLy8gICAgICAgICAgICAgICBCdWNrZXRFbmNyeXB0aW9uOiB7XG4gIC8vICAgICAgICAgICAgICAgICBTZXJ2ZXJTaWRlRW5jcnlwdGlvbkNvbmZpZ3VyYXRpb246IFtcbiAgLy8gICAgICAgICAgICAgICAgICAge1xuICAvLyAgICAgICAgICAgICAgICAgICAgIFNlcnZlclNpZGVFbmNyeXB0aW9uQnlEZWZhdWx0OiB7XG4gIC8vICAgICAgICAgICAgICAgICAgICAgICBTU0VBbGdvcml0aG06IFwiQUVTMjU2XCIsXG4gIC8vICAgICAgICAgICAgICAgICAgICAgfSxcbiAgLy8gICAgICAgICAgICAgICAgICAgfSxcbiAgLy8gICAgICAgICAgICAgICAgIF0sXG4gIC8vICAgICAgICAgICAgICAgfSxcbiAgLy8gICAgICAgICAgICAgfSxcbiAgLy8gICAgICAgICAgICAgVXBkYXRlUmVwbGFjZVBvbGljeTogXCJSZXRhaW5cIixcbiAgLy8gICAgICAgICAgICAgRGVsZXRpb25Qb2xpY3k6IFwiUmV0YWluXCIsXG4gIC8vICAgICAgICAgICB9LFxuICAvLyAgICAgICAgIH0sXG4gIC8vICAgICAgICAgT3V0cHV0czoge1xuICAvLyAgICAgICAgICAgbXlTaW1wbGVBcHBCdWNrZXROYW1lRXhwb3J0OiB7XG4gIC8vICAgICAgICAgICAgIFZhbHVlOiB7XG4gIC8vICAgICAgICAgICAgICAgUmVmOiBcIm15U2ltcGxlQXBwQnVja2V0OUE5MzJDNTVcIixcbiAgLy8gICAgICAgICAgICAgfSxcbiAgLy8gICAgICAgICAgICAgRXhwb3J0OiB7XG4gIC8vICAgICAgICAgICAgICAgTmFtZTogXCJteVNpbXBsZUFwcEJ1Y2tldE5hbWVcIixcbiAgLy8gICAgICAgICAgICAgfSxcbiAgLy8gICAgICAgICAgIH0sXG4gIC8vICAgICAgICAgfSxcbiAgLy8gICAgICAgfSxcbiAgLy8gICAgICAgTWF0Y2hTdHlsZS5FWEFDVFxuICAvLyAgICAgKVxuICAvLyAgICk7XG4gIC8vIH0pO1xuXG4gIC8vIHRlc3QoXCJTdGFjayBjcmVhdGUgUzMgYnVja2V0XCIsICgpID0+IHtcbiAgLy8gICAvL1dIRU5cbiAgLy8gICAvLyBUSEVOXG5cbiAgLy8gICBjb25zb2xlLmxvZyhPYmplY3Qua2V5cyhzdGFjaykpO1xuICAvLyAgIGNvbnNvbGUubG9nKHN0YWNrLnRlbXBsYXRlRmlsZSk7XG4gICAgXG4gIC8vICAgLy8gZXhwZWN0KHN0YWNrKS50b0hhdmVSZXNvdXJjZShcIm15U2ltcGxlQXBwQnVja2V0OUE5MzJDNTVcIik7XG4gIC8vIH0pO1xufSk7XG4iXX0=