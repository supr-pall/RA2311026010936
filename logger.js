const axios = require("axios");

const LOG_API = "http://20.207.122.201/evaluation-service/logs";

const clientID = "YOUR_CLIENT_ID";
const clientSecret = "YOUR_CLIENT_SECRET";

async function Log(stack, level, pkg, message) {
  try {
    await axios.post(
      LOG_API,
      {
        stack,
        level,
        package: pkg,
        message
      },
      {
        headers: {
          clientID,
          clientSecret
        }
      }
    );
  } catch (err) {
    console.error("Logging failed:", err.message);
  }
}

module.exports = Log;
