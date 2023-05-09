const express = require('express')
const router = express.Router()
const book = require('../Controllers/booking')
const verifyUser = require('../VerifyUser')

//id is of car
router.post("/:id", verifyUser, book.book)
router.delete("/:id", verifyUser, book.removeCar)
router.post("/feedback/:id", verifyUser, book.feedback)

module.exports = router;