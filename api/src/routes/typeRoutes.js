const { Router } = require("express");
const { typeControllers } = require("../controllers");

const typeRoutes = Router();

typeRoutes.get("/all", typeControllers.getAllTypes);

module.exports = typeRoutes;
