const express = require("express");
const pingRoutes = require("./Routes/pingRoutes");
const cepRoutes = require("./Routes/cepRoutes");
const errorMiddleware = require("./middlewares/error");

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());

app.use("/ping", pingRoutes);
app.use("/cep", cepRoutes);

app.use(errorMiddleware);

app.listen(PORT, () => console.log(`Running on PORT: ${PORT}`));
