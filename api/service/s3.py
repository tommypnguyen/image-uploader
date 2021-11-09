import boto3
import botocore

# my_config = botocore.config.Config(signature_version=botocore.UNSIGNED)


class S3_Helper:
    def __init__(self):
        self.s3 = boto3.resource("s3")
        self.s3_client = boto3.client("s3")

    def create_bucket(self, bucket_name):
        return self.s3.create_bucket(
            Bucket=bucket_name,
            CreateBucketConfiguration={"LocationConstraint": "us-west-1"},
        )

    def upload_fileobj(self, bucket_name, data, key, **kwargs):
        bucket = self.s3.Bucket(bucket_name)
        bucket.upload_fileobj(
            Fileobj=data,
            Key=key,
            **kwargs,
        )

    def get_fileobj(self, bucket_name, key):
        url = self.s3_client.generate_presigned_url(
            "get_object", ExpiresIn=3600, Params={"Bucket": bucket_name, "Key": key}
        )
        return url

    def check_obj_exists(self, bucket_name, key):
        obj = self.s3.Object(bucket_name, key)
        try:
            obj.load()
            return True
        except:
            return False
