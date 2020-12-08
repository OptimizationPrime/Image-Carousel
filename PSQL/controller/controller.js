// need to initialize connection with postgresql



function getListings(req, res) {
  const query = listings.ListingsModel.where({ listing_id: req.params.id });
  mongo.connect();
  query.find((err, listings) => {
    if (err) {
      res.status(404).send('error');
      console.log(err.message);
      mongo.db.close();
    } else {
      res.status(200).send(listings);
      mongo.db.close();
    }
  });
}

function post(req, res) {
  mongo.connect();
  listings.write(req.body, (err, data) => {
    if (err) {
      res.status(404).send('error');
      console.log(err.message);
      mongo.db.close();
    } else {
      res.status(200).send(data);
      mongo.db.close();
    }
  });
}

function put(req, res) {
  mongo.connect();
  const query = listings.ListingsModel.where({ listing_id: req.params.id });
  listings.updateListing(query, req.body, (err) => {
    if (err) {
      res.status(404).send('error');
      console.log(err.message);
      mongo.db.close();
    } else {
      res.status(200).send('success');
      mongo.db.close();
    }
  });
}

function remove(req, res) {
  mongo.connect();
  const query = listings.ListingsModel.where({ listing_id: req.params.id });
  listings.removeListing(query, (err) => {
    if (err) {
      res.status(404).send('error');
      console.log(err.message);
      mongo.db.close();
    } else {
      res.status(200).send('success');
      mongo.db.close();
    }
  });
}
function addImage(req, res) {
  mongo.connect();
  listings.ListingsModel.find({ listing_id: req.params.id })
    .then((response) => { response[0].images.push(req.body.url); response[0].save(); res.status(201).send('success'); })
    .catch((err) => { console.log(err); mongo.db.close(); res.status(400).send('error'); });
}

module.exports = {
  getListings,
  post,
  put,
  remove,
  addImage,
};