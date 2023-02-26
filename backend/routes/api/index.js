const router = require("express").Router();
const usersRouter = require("./users.js");
const propertiesRouter = require("./properties.js");
const bookingsRouter = require("./bookings.js");
const reviewsRouter = require("./reviews.js");

router.use("/users", usersRouter);
router.use("/properties", propertiesRouter );
router.use("/bookings", bookingsRouter );
router.use("/reviews", reviewsRouter );

module.exports = router;
