const express = require("express");
const asyncHandler = require("express-async-handler");

const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");

const { jwtSign } = require("../../utils/auth");
const { Property, User } = require("../../db/models");

const router = express.Router();

const newPropertyValidators = [
    
    check("address")
        .exists({ checkFalsy: true })
        .withMessage("Please provide an Address for the Listing")
        .isLength({ max: 256 })
        .withMessage("Address must not be more than 256 characters long"),
    check("city")
        .exists({ checkFalsy: true })
        .withMessage("Please provide a City for the Listing")
        .isLength({ max: 100 })
        .withMessage("City must not be more than 100 characters long"),
    check("state")
        .exists({ checkFalsy: true })
        .withMessage("Please provide a State for the Listing")
        .isLength({ max: 100 })
        .withMessage("State must not be more than 100 characters long"),
    check("country")
        .exists({ checkFalsy: true })
        .withMessage("Please provide a Country for the Listing")
        .isLength({ max: 100 })
        .withMessage("Country must not be more than 100 characters long"),
    check("zipcode")
        .exists({ checkFalsy: true })
        .withMessage("Please provide a Zip Code for the Listing"),
    check("name")
        .exists({ checkFalsy: true })
        .withMessage("Please provide a name for the Listing")
        .isLength({ max: 256 })
        .withMessage("Name must not be more than 256 characters long"),
    check("description")
        .exists({ checkFalsy: true })
        .withMessage("Please provide a description for the Listing")
        .isLength({ max: 256 })
        .withMessage("Description must not be more than 256 characters long"),
    check("price")
        .exists({ checkFalsy: true })
        .withMessage("Please provide a value for Price"),
    check("bedrooms")
        .exists({ checkFalsy: true })
        .withMessage("Please provide a count of Bedrooms for the Listing"),
    check("baths")
        .exists({ checkFalsy: true })
        .withMessage("Please provide a count of Bathsfor the Listing"),
    check("maxGuest")
        .exists({checkFalsy: true})
        .withMessage("Please provide maximum number of guest allowed")
        .isLength({max: 20})
        .withMessage("Maximum number of guest allowed is 20"),
    handleValidationErrors,
];

/* GET All Listings */
router.get('/', asyncHandler(async (req, res) => {
    const property = await Property.findAll({
        include: [
            // Image,
            // Booking,
            // Review,
            User
        ]
    });

    return res.json(property);
}))



/* GET EACH LISTING BY ID */
router.get("/:id", asyncHandler(async (req, res, next) => {
    const propertyById = await Property.findByPk(req.params.id, {
        include: [
            // Image,
            // Booking,
            User
            // Review,
            // {model: Review, include: [User]}
        ]
    });
    if (!propertyById) {
        const err = new Error('No property found');
        err.status = 404;
        err.title = 'No property foun';
        err.errors = ['Property Id invalid.'];
        return next(err);
    }
    return res.json(propertyById)
}))

/* POST CREATE A PROPERTY LISTING */
router.post("/", newPropertyValidators, asyncHandler(async (req, res, next) => {
    // const userId = req.user.id;
    const userId = 1; // TODO: update userID later
    const { address, city, state, country, zipcode, name, description, bedrooms, baths, price, maxGuest, image } = req.body;

    const newProperty = await Property.create({address, city, state, country, zipcode, name, description, bedrooms, baths, price, maxGuest, image, userId });

    if (!newProperty) {
        const err = new Error('New Listing failed');
        // err.status = 401;
        // err.title = 'New Listing failed';
        // err.errors = ['The provided credentials were invalid.'];
        return next(err);
    } else {
        return res.json(newProperty)
    }

}))

module.exports = router;