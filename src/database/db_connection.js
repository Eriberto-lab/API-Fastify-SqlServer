import sql from "mssql";

const config = {
  user: "sa",
  password: "Eriberto@Sql1234@",
  server: "localhost",
  database: "videosDB",
  options: {
    encrypt: false,
  },
};

export const db = sql;

export const connect = async () => {
  try {
    await db.connect(config);
    console.log("Conectado com sucesso!!");
  } catch (error) {
    console.log("Erro ao se conectar!!", error);
  }
};
