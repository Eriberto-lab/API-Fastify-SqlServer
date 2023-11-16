import { db } from "../database/db_connection.js";

export class VideosModel {
  async create(body) {
    const { title, duration, director } = body;
    await db.query`INSERT INTO Videos VALUES (${title}, ${duration}, ${director})`;
  }

  async getAll() {
    const data = await db.query`SELECT * FROM Videos`;

    return data.recordset;
  }

  async getById(id) {
    const data = await db.query`SELECT * FROM Videos WHERE Id = ${id}`;

    return data.recordset[0];
  }

  async update(id, body) {
    const { title, duration, director } = body;

    const data =
      await db.query`UPDATE Videos SET Title = ${title}, Duration = ${duration}, Director = ${director}
    WHERE Id = ${id}`;

    return data.recordset[0];
  }

  async delete(id) {
    await db.query`DELETE Videos WHERE Id = ${id}`;
  }
}
