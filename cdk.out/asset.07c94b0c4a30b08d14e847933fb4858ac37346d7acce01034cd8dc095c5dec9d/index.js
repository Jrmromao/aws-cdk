var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// asset-input/api/get-photos/index.ts
var get_photos_exports = {};
__export(get_photos_exports, {
  getPhotos: () => getPhotos
});
var import_aws_sdk = require("aws-sdk");
var bucketName = process.env.PHOTO_BUCKET_NAME;
var s3 = new import_aws_sdk.S3();
var generateUrl = async (object) => {
  const url = await s3.getSignedUrlPromise("getObject", {
    Bucket: bucketName,
    Key: object.Key,
    Expires: 24 * 60 * 60
  });
  return {
    fileName: object.Key,
    url
  };
};
async function getPhotos(event, context) {
  console.log("I got the name: ", bucketName);
  try {
    const { Contents: result } = await s3.listObjects({ Bucket: bucketName }).promise();
    const photos = await Promise.all(result.map((result2) => generateUrl(result2)));
    return {
      statusCode: 200,
      body: JSON.stringify(photos)
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: err.message
    };
  }
}
module.exports = __toCommonJS(get_photos_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getPhotos
});
