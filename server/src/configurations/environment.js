import * as dotenv from "dotenv";
dotenv.config();

// Export the environment object
export const ENVIRONMENT_CONFIGS = {
  PORT: process.env.PORT || 3020,
  DB_URL: process.env.DB_URL || "mongodb://127.0.0.1:27017/todo-demo",
  DB_OPTIONS: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  SERVER: process.env.SERVER || `http://localhost:3020`,
  JWT_SECRET: process.env.JWT_SECRET || "ManVsWildIsAwsomeShow",
};

export default ENVIRONMENT_CONFIGS;