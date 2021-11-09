from api.service.s3 import S3_Helper

if __name__ == "__main__":
    s3 = S3_Helper()
    s3.create_bucket("image-uploader-db")
