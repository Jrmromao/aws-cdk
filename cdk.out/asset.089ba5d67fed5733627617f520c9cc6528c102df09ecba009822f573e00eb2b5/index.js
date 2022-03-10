// asset-input/api/get-photos/index.ts
async function getPhotos(event, context) {
  return {
    statusCode: 200,
    body: "Hello from lambda!"
  };
}
expect(getPhotos);
