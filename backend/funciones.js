const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "postgres",
  database: "like_me",
  allowExitOnIdle: true,
});

// función para leer los posts
const leerPosts = async () => {
  const { rows } = await pool.query("SELECT * FROM posts;");
  return rows;
};

// función para escribir los posts
const escribirPosts = async (titulo, url, descripcion) => {
  const consulta = "INSERT INTO posts values (DEFAULT,$1,$2,$3,0)";
  const values = [titulo, url, descripcion];
  await pool.query(consulta, values);
};

module.exports = { leerPosts, escribirPosts };
