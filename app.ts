import logger from "./logger";
import { DaoTest } from "./src/dao/dao";

const express = require("express");

const PORT = process.env.PORT || "8082";
const app = express();


app.get("/", async (req: any, res: any) => {
  logger.info(`Request received`)

  const dao = new DaoTest();
  res.send(await dao.fetchDataFromDB());
});

app.listen(parseInt(PORT, 10), () => {
  console.log(`Listening for requests on http://localhost:${PORT}`);
});
