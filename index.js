const express = require('express');
const path = require('path');



const port = 3900;
var app = express();
//Set static folder
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res, next) => {
  res.send('hello');
});

app.listen(port, ()=>{
  console.log('server running at port '+port);
});
