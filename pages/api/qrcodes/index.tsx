// Import Dependencies
const url = require('url')
const MongoClient = require('mongodb').MongoClient

// Create cached connection variable
let cachedDb = null

function makeid(length) {
  var result           = [];
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
      result.push(characters.charAt(Math.floor(Math.random() * 
      charactersLength)));
 }
 return result.join('');
}
// A function for connecting to MongoDB,
// taking a single parameter of the connection string
async function connectToDatabase(uri) {
  // If the database connection is cached,
  // use it instead of creating a new connection
  if (cachedDb) {
    return cachedDb
  }

  // If no connection is cached, create a new one
  const client = await MongoClient.connect(uri, { useNewUrlParser: true })

  // Select the database through the connection,
  // using the database path of the connection string
  const db = await client.db(url.parse(uri).pathname.substr(1))

  // Cache the database connection and return the connection
  cachedDb = db
  return db
}

// The main, exported, function of the endpoint,
// dealing with the request and subsequent response
export default async (req, res) => {

  // Get a database connection, cached or otherwise,
  // using the connection string environment variable as the argument
  console.log("Inside POST to add to db")
  if(req.method === "POST"){
    const db = await connectToDatabase(process.env.MONGODB_URI)

    // Select the "users" collection from the database
    const collection = await db.collection('qrcodes')
  
    const body = req.body;
    const doc = { 
      name: body.name,
      number:body.number,
      waitingTime:body.waitingTime,
      code:makeid(6) ,
      createdAt:new Date().toUTCString()
    }
    collection.insertOne(doc)
    .then( data => {
      console.log(data.result.ok)
      res.json({success:true})
    })
  }
  

   
  if(req.method === "GET")
  // Respond with a JSON string of all users in the collection
  res.status(200).json({ "qrcodes":"d" })
   
}