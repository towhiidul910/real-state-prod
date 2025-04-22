go s3
click **Create Bucket**
Bucket name: re-s3-images-910
disable: Block all public access
enable : I acknowledge that .....
click **Create Bucket**

click on the bucket
go to Permission
Edit
in Policy
copy pest 
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "Statement1",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::re-s3-images-910/*"
    }
  ]
}

click **Save Changes**

now in upload we are gonna upload all the file in our public directory that we created

drag and drop all the images
click **upload**
when UPload succeeded 
click **Close**