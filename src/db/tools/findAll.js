export const findAll =
  (client) =>
  (db) =>
  (collectionName) =>
  async (args = {}) => {
    const collection = client.db(db).collection(collectionName);
    const cursor = collection.find(args);
    const allValues = await cursor.toArray();
    await cursor.close();
    return allValues;
  };
