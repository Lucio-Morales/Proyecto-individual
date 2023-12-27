const { Router } = require("express");
const { typesControllers } = require("../controllers");

const typesRouter = Router();

typesRouter.get("/all", typesControllers.getAllTypes);

module.exports = typesRouter;
