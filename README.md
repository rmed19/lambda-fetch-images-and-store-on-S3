IMAGES ARRAY LIKE : 
{ "photos" : [{"url": "http://images.com/myimage.jpg", "key": "profile.jpg", "bucket": "my-bucket"}]}

# Fetch images from URL then upload to s3

This Lambda function fetchs an array of images from remote source (URL) and then uploads them to a S3 bucket.

Inspiration source : https://github.com/serverless/examples/tree/master/aws-node-fetch-file-and-store-in-s3

## Images array Exemple :
```<json
{
  "photos": [
    {
      "url": "https://images.unsplash.com/photo-1516245834210-c4c142787335",
      "key": "IMG-5728621_0.jpg",
      "bucket": "my-bucket"
    },
    {
      "url": "https://cdn.stocksnap.io/img-thumbs/960w/2TCPLUAR9P.jpg",
      "key": "IMG-5728621_1.jpg",
      "bucket": "my-bucket"
    }
  ]
}
```