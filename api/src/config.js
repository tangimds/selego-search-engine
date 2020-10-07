const MONGO_URL = process.env.DB_ENDPOINT || "mongodb+srv://tangimds:Showtime@cluster0.xpgyv.mongodb.net/lorem?retryWrites=true&w=majority";
const PORT = process.env.PORT || 8080;
const secret = process.env.SECRET || "not-so-secret";
const APP_URL = process.env.DEV === "true" ? "http://localhost:8083" : "http://localhost:8083";

const ENVIRONMENT = process.env.DEV === "true" ? "development" : "production";

module.exports = {
  PORT,
  MONGO_URL,
  secret,
  APP_URL,
  ENVIRONMENT,
};
