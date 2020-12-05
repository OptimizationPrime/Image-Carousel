var express = require('express');
var bodyParser = require('body-parser');
var controller = require('../controllers/listing.js');

// const path = require('path')

const app = express();
const PORT = 8030;

app.use(bodyParser.json());
app.use('/carousel/:id', express.static('client/dist'));


// app.get('/listings/:id/db', controller.getAll);

app.listen(PORT, () => {
  console.log(`Listening on 127.0.0.1:${PORT}`);
});

// CRUD

// app.get('/db', controller.get);
app.get('/*/:id/homesData', controller.getListings);
app.post('/*/:id/addHomeData', controller.post)
app.put('/*/:id/updateHomeData', controller.put)
app.delete('/*/:id/removeHomeData', controller.remove)