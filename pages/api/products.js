import query from "../../setting/db";

const productos = async (req, res) => {
  try {
    const { results, error } = await query(
      `SELECT
        *
      FROM products
      WHERE VISIBLE = "Y"
      ORDER BY NAME;`,
      req.headers.host
    );

    if (error) {
      res.send([{ nombre: "error" }]);
    } else {
      res.send(results);
    }
  } catch (error) {
    console.log(error);
  }
};

export default productos;
