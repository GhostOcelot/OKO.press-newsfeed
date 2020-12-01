# OKO.press newsfeed

Newsfeed in vanila javadcript based on API data made as a recruitment assignment for OKO.press agency. Uses json-server as a dummy database.

## This newsfeed uses create-react-app and json server

In oder to run the app on localhost clone or download the repository on your computer, then install the dependencies:

`npm install`

As the next step install json-server:

`npm install -g json-server`

Run it with the posts.json file included in the project:

`json-server --watch db.json`

Finally start the create-react-app dev server with:

`npm start`

As soon as you stop watching the fake server the app will not be able to fetch data. Keep json-server running as long as you need to test the app.

## Demo:

https://giant-channel.surge.sh/
