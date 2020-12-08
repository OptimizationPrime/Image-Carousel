const fs = require('fs');
const faker = require('faker');
const { argv } = require('yargs');
const lines = argv.lines || 10000000;
const filename = argv.output || 'data.csv';
const stream = fs.createWriteStream(filename);

const createListing = (i) => {
  const listing_id = i;
  const price = Math.floor(Math.random() * (2000000 - 500000 + 1)) + 500000;
  const bed = Math.floor(Math.random() * (5 - 2 + 1)) + 2;
  const bath = Math.floor(Math.random() * 3) + 1;
  const sqft = Math.floor(Math.random() * (2000000 - 500000 + 1)) + 500000;
  const homeAddress = faker.address.streetAddress();
  const neighborhood = 'SoHo';
  const imageURL = `https://s3-us-west-1.amazonaws.com/hackreactor.fec.trulia.photos/Home1/Home-1-1.jpg`;

  return `${listing_id},${price},${bed},${bath},${sqft},${homeAddress},${neighborhood},${imageURL}\n`;
};

const seed = (writeStream, encoding, done) => {
  let i = lines;
  function writing() {
    let ok = true;
    do {
      i -= 1;
      const post = createListing(i);
      // check if i === 0 so we would write and call `done`
      if (i === 0) {
        // we are done so fire callback
        writeStream.write(post, encoding, done);
      } else {
        // we are not done so don't fire callback
        writeStream.write(post, encoding);
      }
      // else call write and continue looping
    } while (i > 0 && ok);
    if (i > 0 && !ok) {
      writeStream.once('drain', writing);
    }
  }
  writing();
};

// header line in the csv file
stream.write('listing_id,price,bed,bath,sqft,homeAddress,neighborhood,imageURL\n', 'utf-8');

seed(stream, 'utf-8', () => {
  stream.end();
  console.log('finished seeding');
});