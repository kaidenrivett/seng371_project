// const MongoClient = require('mongodb').MongoClient;
// const csv = require('csv-parser');
// const fs = require('fs');

// const url = 'mongodb://localhost:27017';
// const dbName = 'health_record_db';

// MongoClient.connect(url, function(err, client) {
//   if (err) throw err;

//   const db = client.db(dbName);

//   const results = [];

//   fs.createReadStream('./test_data/health_records.csv')
//     .pipe(csv())
//     .on('data', (data) => {
//       results.push(data);
//     })
//     .on('end', () => {
//       db.collection('test').insertMany(results, function(err, result) {
//         if (err) throw err;
//         console.log(`${result.insertedCount} documents inserted`);
//         client.close();
//       });
//     });
// });