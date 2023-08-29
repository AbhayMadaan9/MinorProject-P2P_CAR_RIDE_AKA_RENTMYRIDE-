const express = require('express')
const router = express.Router()  
const aauth = require('../Controllers/auth')


router.post("/login", aauth.login)
router.post("/register", aauth.register)
router.post("/logout", aauth.logout)


module.exports = router;