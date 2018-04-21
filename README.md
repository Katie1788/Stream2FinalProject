# Stream2FinalProject
Final project for stream 2

This project makes use of a database downloaded from data.world at the following link https://data.world/harishkgarg/harry-potter-universe
and then edited by myself to create graphs to display the data. It was created using Flask in pycharm, and uses the following;

D3.js- a javascript library for visualising data with HTML, SVG and CSS
Dc.js- a javascript charting library
Crossfilter.js- javascript library that manages the data behind charts, to allow data to be grouped and filtered in the browser
Queue.js- an asynchronous helper library for javascript
MongoDB- a noSQL database used to convert and present data in JSON format

It displays data from the Harry Potter dataset above using the lessons learned in stream 2 of the code institute course.

I began by downloading and editing the above dataset, and storing it in MongoDB. I did this using the command line and the following command;

mongoimport -d harrypotterprojects -c harryprojects --type csv --file characters.csv --headerline

I then used the command 'mongod'and left this window open, then opened a new command line widow and ran the command 'mongo', and also left this running, in order to work with the data. I created a flask project and structured it as seen above in the github project. I set up the connection to the mongo databse in the harry_potter.py file, and created the html file to display my page, the css file to style it and the javascript file to create the graphs. I tested the finsihed page in multiple browsers to ensure it displayed correctly. I finally deployed the code to heroku to allow it to be displayed. 
