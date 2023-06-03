const express = require('express');
const app = express();
const PORT = 3000;
const missions = require('./models/missions')


//INDEX
app.get('/missions/', (req, res) => {
  res.render('index.ejs', {missions})

  //console.log(missions)
})

app.listen(PORT, () => {
  console.log(`App is listening on port: ${PORT}`)
})

