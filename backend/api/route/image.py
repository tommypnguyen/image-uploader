from flask_restful import Resource, reqparse
from flask import request
from api.service.s3 import S3_Helper
import werkzeug


class Image(Resource):
    parser = reqparse.RequestParser()
    parser.add_argument(
        "name",
        type=str,
        required=True,
        help="This field cannot be left blank",
    )
    s3 = S3_Helper()

    def post(self):
        data = self.parser.parse_args()
        try:
            file_name = request.files["image"]
            self.s3.upload_fileobj(
                bucket_name="image-uploader-db",
                key=data["name"],
                data=file_name,
                ExtraArgs={"ContentType": "image/jpeg"},
            )
            return {"message": "Image successfully uploaded"}, 200
        except Exception as e:
            print("LOG: {}".format(e))
            return {"message": "Failed to upload image"}, 500
