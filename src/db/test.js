const { MongoClient } = require('mongodb');

async function addAllowedMails() {
  // Connection URI and database name
  const uri = "mongodb+srv://admin:admin@cluster0.0nk9cwk.mongodb.net/test"; // Change this to your MongoDB server URI
  const dbName = "test"; // Change this to your database name

  // Create a new MongoClient
  const client = new MongoClient(uri, { useUnifiedTopology: true });

  try {
    // Connect to the MongoDB server
    await client.connect();

    // Get a reference to the database
    const db = client.db(dbName);

    // Define the collection name
    const collectionName = "allowedMails";

    // Get a reference to the "allowedMails" collection
    const collection = db.collection(collectionName);

    // Data to be inserted
    const allowedEmails = [
      { email: 'huzaifaghori000@gmail.com' },
      { email: 'anotheremail@example.com' },
    ];

    // Insert data into the collection
    const result = await collection.insertMany(allowedEmails);

    console.log(`Inserted ${result.insertedCount} documents into the "${collectionName}" collection.`);
  } catch (err) {
    console.error('Error:', err);
  } finally {
    // Close the client
    client.close();
  }
}

addAllowedMails();
