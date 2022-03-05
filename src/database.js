const { MongoClient } = require("mongodb");
async function main() {
  const uri =
    "mongodb+srv://db_admin:hYqPtnC7K8SnFax4@cluster0.roois.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
}
const client = new MongoClient(uri);
