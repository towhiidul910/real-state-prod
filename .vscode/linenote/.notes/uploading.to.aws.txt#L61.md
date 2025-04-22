in propertyController
we commented the photUrl

we have to uncommented the section

and uncomment the photoUrl in newProperty

go to next.config.ts
and 
add this 
 {
        protocol: "https",
        hostname: "*.amazonaws.com",
        port: "",
        pathname: "/**"
      } 

      in remotePatterns

## why: That *.amazonaws.com rule is there to allow Next.js's Image Optimization to load and optimize images from Amazon S3 buckets or CloudFront.

## You need it if you're serving images from:

## S3 public URLs like https://re-s3-images-910.s3.amazonaws.com/myimage.jpg

## or from CloudFront URLs like https://d123abc.cloudfront.net/image.png

## Without it, Next.js will block those images or fail to optimize them with the built-in <Image /> component.



, now push the app into git hub