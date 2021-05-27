const url = require('url')
const MongoClient = require('mongodb').MongoClient

let cachedDb = null

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
export default async (req, res) => {
    console.log("Inside GET to fetch from db")
    if(req.method === "GET"){
        try{
            const db = await connectToDatabase(process.env.MONGODB_URI)

            // Select the "users" collection from the database
            const collection = await db.collection('qrcodes')
            const code = req.params.code;
            let data = await collection.findOne({ code: code });
            if(data)
              res.status(200).json(data);
            else
            res.status(404).json(data);
          }catch(err)  {
            res.status(500).send(err);
          }
    }
    
 
  }