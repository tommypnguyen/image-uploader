from flask_restful import Resource
from flask import request
from api.service.s3 import S3_Helper
import werkzeug


class ImageByName(Resource):
    s3 = S3_Helper()

    def get(self, name):
        try:
            if self.s3.check_obj_exists(bucket_name="image-uploader-db", key=name):
                image_url = self.s3.get_fileobj(
                    bucket_name="image-uploader-db", key=name
                )
                return {"image_url": image_url}, 200
            return {"message": "Object with given name not found"}, 404
        except Exception as e:
            print("LOG: {}".format(e))
            return {"message": "Failed to get image"}, 500
