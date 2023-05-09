const express = require('express')
const router = express.Router()
const car = require('../Controllers/car')
const verifyUser = require('../VerifyUser')

router.post("/add", verifyUser, car.add)
router.get("/listall/:location", car.listall)
router.get("/show/:id", car.show)

module.exports = router;