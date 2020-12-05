var arangojs = require('arangojs');
var Database = arangojs.Database;
var db = new Database();

db.createDatabase('trulia')
  .then(() => console.log('Database created'))
  .catch(err => console.error('Failed to create database:', err));

db.useDatabase('trulia');

var listings = db.collection('listings');

listings.create()
  .then(() => console.log('Collection created'))
  .catch(err => console.error('Failed to create collection:', err));

var addressSchema = {
  street: { "type": "string"},
  unit: { "type": "string"},
  neighborhood: { "type": "string"},
  city: { "type": "string"},
  state: { "type": "string"},
  zip: { "type": "int"},
};

var listingSchema =  {
  id: { "type": "integer"},
  price: { "type": "integer"},
  roomCount: { "type": "integer"},
  bathCount: { "type": "integer"},
  sqft: { "type": "integer"},
  address: {
    "type": "object",
    "properties": addressSchema
  },
  images: {
    "type": "array",
    "items": { "type": "string" }
  }
};


collection.save(listingSchema)
  .then(meta => console.log('Document saved:', meta._rev))
  .catch(err => console.error('Failed to save document:', err));