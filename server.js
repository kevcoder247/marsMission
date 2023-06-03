const express = require('express');
const app = express();
const PORT = 3000;
const missions = require('./models/missions')


//INDEX
app.get('/missions/', (req, res) => {
  res.render('index.ejs', {missions})

  //console.log(missions)
});



//SHOW
app.get('/missions/:id', (req, res) =>{
  console.log(missions[req.params.id])
  const currentMission = missions[req.params.id];
  res.render('show.ejs', {missions: currentMission})
});




app.listen(PORT, () => {
  console.log(`App is listening on port: ${PORT}`)
});

