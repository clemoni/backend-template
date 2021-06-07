export const insertOne =
  (client) => (db) => (collection) => async (document) => {
    return await client.db(db).collection(collection).insertOne(document);
  };
