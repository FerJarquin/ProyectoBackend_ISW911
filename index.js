const express = require("express");

const routerAPI  = require('./routes/index.js');

const app = express();
app.use(express.json());

routerAPI(app);

app.listen(80, () => {
  console.log("Servidor iniciado en el puerto 80");
});
