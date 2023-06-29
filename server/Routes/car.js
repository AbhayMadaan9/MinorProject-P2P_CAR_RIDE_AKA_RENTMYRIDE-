const express = require('express')
const router = express.Router()
const car = require('../Controllers/car')
const verifyUser = require('../VerifyUser')

router.post("/add", verifyUser, car.add)
router.get("/listall", car.listall)
router.get("/show/:id", car.show)
router.get("/user", verifyUser, car.UserCar)
router.get("/userinfo", car.CarOwner)

module.exports = router;