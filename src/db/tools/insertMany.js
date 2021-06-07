export const insertMany =
  (client) => (db) => (collection) => async (documents) => {
    const options = { ordered: true };
    return await client
      .db(db)
      .collection(collection)
      .insertMany(documents, options);
  };
