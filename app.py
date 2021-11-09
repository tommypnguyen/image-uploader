from flask import Flask
from flask_restful import Api
from api.route.image import Image
from api.route.image_by_name import ImageByName

app = Flask(__name__, static_url_path='', static_folder='frontend/build')
api = Api(app)

api.add_resource(Image, "/image")
api.add_resource(ImageByName, "/image/<string:name>")

@app.route('/')
def root():
    return app.send_static_file('index.html')

if __name__ == "__main__":
    app.run()
