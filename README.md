# Page Share on Social meadia - React JS

# Task
Add OpenGraph MetaTags to website dynamically, such that all the data should come from db. When you share the link on any social media facebook/twitter, image i.e. loaded from database should be visible in share post.

Sample app for dynamic share(meta tag)  in react app

# Deployment
Deployed in heroku. you can check the demo here
[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://react-sharing.herokuapp.com/)

# Steps
git clone https://github.com/ananthsoftcare/react-share.git

cd react-share

npm install

npm run build (not necessary. if any changes made in app, it needs to build)

node server.js

Then visit `localhost:5000` in the browser


## Note
I have added share content, description and images for each pages.Currently it is not from database. To check how I retrieved data from mongoDB please refer my another task https://github.com/ananthsoftcare/react-theme
