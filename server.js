const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const path = require('path');
const fs = require('fs')

app.get('/', function(request, response) {
  console.log('Home page visited!');
  const filePath = path.resolve(__dirname, './build', 'index.html');
  fs.readFile(filePath, 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    data = data.replace(/\$OG_TITLE/g, 'Home Page');
    data = data.replace(/\$OG_DESCRIPTION/g, "Home page description");
    data = data.replace(/\$OG_URL/g, "https://local-ogp.firebaseapp.com/site/3FlAZuy4VoimmVqVm8z0");
    result = data.replace(/\$OG_IMAGE/g, 'https://i.graphicmama.com/blog/wp-content/uploads/2016/12/02071926/welcome-home.png');
    response.send(result);
  });
});

app.get('/story', function(request, response) {
  console.log('Stories page visited!');
  const filePath = path.resolve(__dirname, './build', 'index.html')
  fs.readFile(filePath, 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    data = data.replace(/\$OG_TITLE/g, 'Stories Page');
    data = data.replace(/\$OG_DESCRIPTION/g, "Stories page description");
    data = data.replace(/\$OG_URL/g, "https://local-ogp.firebaseapp.com/site/3FlAZuy4VoimmVqVm8z0");
    result = data.replace(/\$OG_IMAGE/g, 'https://static.rfstat.com/bloggers_folders/user_2591565/my_media/b6cfeb7c-c8f1-4861-8f41-3263e47a341d.jpg');
    
    response.send(result);
  });
});

app.get('/products', function(request, response) {
  console.log('Products page visited!');
  const filePath = path.resolve(__dirname, './build', 'index.html')
  fs.readFile(filePath, 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    data = data.replace(/\$OG_TITLE/g, 'Products Page');
    data = data.replace(/\$OG_DESCRIPTION/g, "Products page description");
    data = data.replace(/\$OG_URL/g, "https://local-ogp.firebaseapp.com/site/3FlAZuy4VoimmVqVm8z0");
    result = data.replace(/\$OG_IMAGE/g, 'https://i.graphicmama.com/blog/wp-content/uploads/2016/11/08104828/181.jpg');
    response.send(result);
  });
});

app.use(express.static(path.resolve(__dirname, './build')));

app.get('*', function(request, response) {
  const filePath = path.resolve(__dirname, './build', 'index.html');
  response.sendFile(filePath);
});

app.listen(port, () => console.log(`Listening on port ${port}`));