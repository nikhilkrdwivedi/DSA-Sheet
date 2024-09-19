import swagger from "swagger-ui-express";

import {ENVIRONMENT_CONFIGS} from "./configurations/environment.js";

import swaggerDocs from "./swagger/docs.js";
import dbConnect from "./utils/db.js";
import createServer from "./utils/server.js";

const app = createServer();
app.use("/docs", swagger.serve);
app.use("/docs", swagger.setup(swaggerDocs));

app.listen(ENVIRONMENT_CONFIGS.PORT, async () => {
  console.log(`Server started on PORT [${ENVIRONMENT_CONFIGS.PORT}]`);
  await dbConnect();
});