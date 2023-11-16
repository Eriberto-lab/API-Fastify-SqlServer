import { fastify } from "fastify";
import { connect } from "./database/db_connection.js";
import { videosRountes } from "./routes/videosRoutes.js";

const server = fastify();

connect();

server.register(videosRountes);

server.listen({
  port: 5732,
});
