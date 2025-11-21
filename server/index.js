import { MongoClient, ServerApiVersion } from 'mongodb';
const uri = "mongodb+srv://senrei598_db_user:EpbbB68z9JiBOi1E@barber-app-db.s1gmbxf.mongodb.net/?appName=barber-app-db";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Conexión establecida correctamente");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);