const express = require('express')
const app = express();


// Make everything inside of public/ available
app.use(express.static('public'));




app.get('/new', (request, response, next) => { //Listening for get request to '/new'
    console.log(request);  //In the future we will do a DB query here and then 
    response.json({name:'new!'}); //return data 
  });



//   app.get('/cat', (request, response, next) => {
//     response.send(`
//       <!doctype html>
//       <html>
//         <head>
//           <meta charset="utf-8">
//           <title>Cat</title>
//           <link rel="stylesheet" href="/stylesheets/style.css" />
//         </head>
//         <body>
//           <h1>Cat</h1>
//           <p>This is my second route</p>
//           <img src="/images/cool-cat.jpg" />
//         </body>
//       </html>
//     `);
//   });

// our first Route:
app.get('/', (request, response, next) => {
    response.sendFile(__dirname + '/views/home.html');
});
  
  // cat route:
app.get('/cat', (request, response, next) => {
    response.sendFile(__dirname + '/views/cat.html');
});

app.listen(3000, () => {
    console.log('My first app listening on port 3000!')
});