import { ENVIRONMENT_CONFIGS } from "../configurations/environment.js";

import { baseRoute, authenticationsRoute, topicRoute, chapterRoute, problemRoute, progressRoute } from "./endpoints/endpoint.js";


const swaggerDocs = {
  openapi: "3.0.0",
  info: {
    title: "Official Documentations",
    version: "1.0.0",
    description: "This is official documentations.",
  },
  servers: [

    {
      url: ENVIRONMENT_CONFIGS.SERVER,
      description: "Dev server",
    },
    {
      url: "http://3.111.226.44:3020",
      description: "Backend server",
    },
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
      },
    },
  },
  security: [
    {
      bearerAuth: [],
    },
  ],
  paths: {
    ...baseRoute,
    ...authenticationsRoute,
    ...topicRoute,
    ...chapterRoute,
    ...problemRoute,
    ...progressRoute,
  },
};
export default swaggerDocs;