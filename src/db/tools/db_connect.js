require("dotenv").config();
import { MongoClient } from "mongodb";

// config for connection to cluster
const dbConfig = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  poolSize: 10,
  connectTimeoutMS: 2500,
};

// uri to connect to cluster
const dbUri = process.env.DB_URI;

/**
 *
 * @param {string} uri
 * @param {object} config
 * @param {string} db name of the db
 * @param {string} collection name
 * @param {function} a given crud function
 * @returns
 */
const initAction =
  (uri) =>
  (config) =>
  (db) =>
  (collection) =>
  (action) =>
  async (args = null) => {
    //init client
    const client = new MongoClient(uri, config);
    try {
      // connect to cluster
      await client.connect();

      // if ars run action with args
      // else note
      // since return promi all error cath outside
      return args
        ? await action(client)(db)(collection)(args)
        : await action(client)(db)(collection);
    } finally {
      //one done close connection
      await client.close();
    }
  };

export const runAction = initAction(dbUri)(dbConfig)("test");
