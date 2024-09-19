import express from "express";
import cors from "cors";
import httpResponseMessages from "../constants/httpResponseMessages.js";
// import authenticationRouter from "../routes/authentications";
// import todoRouter from "../routes/todos";
import morgan from "morgan";
import router from "../routes/route.js";

export function createServer() {
  const app = express();
  let corsOptions = {
    origin: "*",
    optionsSuccessStatus: 200,
  };
  app.use(cors(corsOptions));
  app.use(express.json());
  app.use(morgan("dev"));

  // Route endpoints
  app.use("/api/v1", router);

  app.get("/", (request, response) => {
    return response.status(200).json({
      success: true,
      message: httpResponseMessages.SERVER_UP_AND_RUNNING,
      data: new Date(),
    });
  });
  return app;
}

export default createServer;