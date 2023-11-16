import { VideosModel } from "../models/videosModel.js";

const videosRountes = async (server) => {
  const model = new VideosModel();

  server.post("/videos", async (req, reply) => {
    try {
      await model.create(req.body);
      return reply.status(201).send();
    } catch (error) {
      return reply.status(500).send(error);
    }
  });

  server.get("/videos", async (_req, reply) => {
    const result = await model.getAll();
    return reply.status(200).send(result);
  });

  server.get("/videos/:id", async (req, reply) => {
    try {
      const videoId = req.params.id;
      const result = await model.getById(videoId);
      return reply.status(200).send(result);
    } catch (error) {
      return reply.status(404).send(error);
    }
  });

  server.put("/videos/:id", async (req, reply) => {
    try {
      const videoId = req.params.id;
      await model.update(videoId, req.body);
      return reply.status(201).send();
    } catch (error) {
      return reply.status(404).send(error);
    }
  });

  server.delete("/videos/:id", async (req, reply) => {
    const videoId = req.params.id;
    await model.delete(videoId);
    return reply.status(204).send();
  });
};

export { videosRountes };
