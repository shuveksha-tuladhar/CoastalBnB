const express = require('express');
const asyncHandler = require('express-async-handler');

const {Property, Booking, User } = require('../../db/models');

const router = express.Router();

//Get all bookings by user
router.get('/', asyncHandler( async(req, res) => {
    const bookings = await Booking.findAll({
        include: [
            // User,
            Property,
            // {model: Property, include: [User]}
        ],
        // where: {
        //     userId: req.user.id,
        // },

    });
   

    if(!req.user) {
        const error = new Error("Must log in to access bookings");
        error.status = 401;
        error.title = "Must log in to access bookings";
        error.errors = ["Please log in to access bookings"]
    }

    return res.json(bookings);
}));

//Get a single booking
router.get('/:id(\\d+)', asyncHandler(async (req, res) => {
    const singleBooking = await Booking.findByPk(req.params.id, {
        include: [
            User,
            Property,
            {model: Property, include: [User]}
        ]
    });

    return res.json(singleBooking);
}));

//Create a new booking
router.post('/', asyncHandler(async (req, res) => {
    const createBooking = req.body;

    const newBooking = await Booking.create(createBooking)
    return res.json(newBooking)
}))

//Get a booking to edit
router.get('/:id(\\d+)', asyncHandler(async (req, res) => {
    const bookingId = req.params.id;
    const bookingToEdit = await Booking.findByPk(bookingId);

    return res.json(bookingToEdit);
}));

//Update Booking
router.put('/:id(\\d+)', asyncHandler(async (req, res) => {
    const bookingId = req.params.id;
    const bookingtToUpdate = await Booking.findByPk(bookingId);
    const updateBooking = await bookingtToUpdate.update(req.body);

    return res.json(updateBooking);
}));

//Delete Booking
router.delete('/:id(\\d+)', asyncHandler(async (req, res) => {
    const bookingId = req.params.id;
    const deleteBooking = await Booking.findByPk(bookingId);
    await deleteBooking.destroy();
    return res.json({ deleteBooking })
}))


module.exports = router;
