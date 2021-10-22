from flask import Flask
from flask_restful import Api
from api.route.image import Image
from api.route.image_by_name import ImageByName

app = Flask(__name__)
api = Api(app)

api.add_resource(Image, "/image")
api.add_resource(ImageByName, "/image/<string:name>")

if __name__ == "__main__":
    app.run(port=5000, debug=True)
