const mongodb = require('mongodb'); 
const MongoClient = mongodb.MongoClient; 
const connectionURL = 'mongodb://127.0.0.1:27017'; 
const databaseName = 'dbglobaltemperature'; 
MongoClient.connect(connectionURL, 
 { useNewUrlParser: true, useUnifiedTopology: true }, 
 (error, client) => { 
 if (error) { 
 console.log('Cannot connect to the database'); 
 return; 
 } 
 const database = client.db(databaseName); 
 if (database) { 
 console.log("Database connected successfully"); 
 
 database.collection("TemperatureChangesByCountry").find({'dt':'1749-10-01'}) 
 .toArray ((error, TemperatureChangesByCountry) =>  
 
 TemperatureChangesByCountry.forEach((TemperatureChangesByCountry) => { 
 console.log("------"); 
 console.log ("The Average temperature in" ,TemperatureChangesByCountry.Country, "for the date 1749-10-01 is", TemperatureChangesByCountry.AverageTemperature);}) 
 )} 
 } 
)