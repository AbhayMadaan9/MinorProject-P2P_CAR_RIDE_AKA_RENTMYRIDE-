const express = require('express')
const router = express.Router()
const car = require('../Controllers/car')
const verifyUser = require('../VerifyUser')

router.post("/add_car", verifyUser, car.add)
//router.get("/user_car", verifyUser, car.show)
// router.get("/search_car", verifyUser, car.search)


module.exports = router;