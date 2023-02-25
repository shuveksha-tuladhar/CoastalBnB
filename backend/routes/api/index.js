const router = require("express").Router();
const usersRouter = require("./users.js");
const propertiesRouter = require("./properties.js");

router.use("/users", usersRouter);
router.use("/properties", propertiesRouter );

module.exports = router;
