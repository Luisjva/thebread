import mysql from "serverless-mysql";

const db = mysql({
  config: {
    host: "localhost",
    database: "thebreadboy",
    user: "root",
    password: "",
  },
});

export default async function query(query) {
  try {
    const results = await db.query(query);
    await db.end();
    return { results, error: false };
  } catch (error) {
    return { error, results: false };
  }
}
