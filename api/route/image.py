from flask_restful import Resource, reqparse
from flask import request
from api.service.s3 import S3_Helper
import uuid
import werkzeug


class Image(Resource):
    parser = reqparse.RequestParser()
    s3 = S3_Helper()

    def post(self):
        try:
            file_name = request.files["image"]
            id = str(uuid.uuid4())
            self.s3.upload_fileobj(
                bucket_name="image-uploader-db",
                key=id,
                data=file_name,
                ExtraArgs={"ContentType": "image/jpeg"},
            )
            image_url = self.s3.get_fileobj(bucket_name="image-uploader-db", key=id)
            return {"data": {"url": image_url}}, 201
        except Exception as e:
            print("LOG: {}".format(e))
            return {"message": "Failed to upload image"}, 500
