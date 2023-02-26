const express = require("express");
const asyncHandler = require("express-async-handler");

const { Property, Booking, User, Review } = require("../../db/models");

const router = express.Router();

//  Get all the reviews
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const allreviews = await Review.findAll({
      include: [User, Property],
    });

    if (!req.user) {
      const error = new Error("Must log in to access bookings");
      error.status = 401;
      error.title = "Must log in to access bookings";
      error.errors = ["Please log in to access bookings"];
    }
    return res.json(allreviews);
  })
);

//Get a single review
router.get(
  "/:id(\\d+)",
  asyncHandler(async (req, res) => {
    const singleReview = await Review.findByPk(req.params.id, {
      include: [Property, User],
    });

    return res.json(singleReview);
  })
);

//Create a new review
router.post(
  "/",
  asyncHandler(async (req, res) => {
    const createReview = req.body;
    const { userId, propertyId, review } = req.body;

    const newReview = await Review.create(createReview);
    return res.json(newReview);
  })
);

//Get a new review to edit
router.get(
  "/:id(\\d+)",
  asyncHandler(async (req, res) => {
    const reviewId = req.params.id;
    const reviewToEdit = await Review.findByPk(reviewId);

    return res.json(reviewToEdit);
  })
);

//Edit a review
router.put(
  "/:id(\\d+)",
  asyncHandler(async (req, res) => {
    const reviewId = req.params.id;
    const reviewToUpdate = await Review.findByPk(reviewId);
    const updateReview = await reviewToUpdate.update(req.body);

    return res.json(updateReview);
  })
);

//Delete a review
router.delete(
  "/:id(\\d+)",
  asyncHandler(async (req, res) => {
    const reviewId = req.params.id;
    const deleteReview = await Review.findByPk(reviewId);
    await deleteReview.destroy();
    return res.json({ deleteReview });
  })
);

module.exports = router;
