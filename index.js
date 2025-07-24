import cors from "cors";
import { corsOptions } from "./middleware/index.js";
import express from "express";
const app = express();
const port = 5000;
import router from "./router/router.js";
app.use(express.json());
app.use(cors(corsOptions));

app.use("/api", router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
