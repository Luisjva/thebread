import mysql from "serverless-mysql";

const dbL = mysql({
    config: {
      host: "localhost",
      database: "thebreadboy",
      user: "root",
      password: "",
    },
  }),
  db = mysql({
    config: {
      host: "www.db4free.net",
      database: "thebreadboy",
      user: "luisjva",
      password: "elpanessabroso",
    },
  });

export default async function query(query, host) {
  try {
    let dbU = host == "localhost:3000" ? dbL : db;

    const results = await dbU.query(query);
    await dbU.end();
    return { results, error: false };
  } catch (error) {
    return { error, results: false };
  }
}
