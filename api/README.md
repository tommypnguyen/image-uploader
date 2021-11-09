All the application magic happens inside the API module (/api), there, we split the code into 4 main parts:

The models are the data descriptor of our application, in many cases related to the database model. How each model is defined will heavily depend on the library you use to connect to your database.
The routes are the URIs to our application, where we define our resources and actions.
The schemas are the definitions for inputs and outputs of our API, what parameters are allowed, what information we will output. They correlate to our resources, but they are not necessarily the same as our models.
The services are modules that define application logic or interact with other services or the db layer. Routes should be as simple as possible and delegate all logic to the services.