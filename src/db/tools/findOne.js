export const findOne = (client) => (db) => async (collection) => {
  const res = await client.db(db).collection(collection).findOne({});
  return res;
};
