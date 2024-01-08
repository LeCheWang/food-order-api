const express = require("express")
const router = express.Router()

const {
    register,
    login,
    getAccounts
} = require("../controllers/account.controller")

router
    .route("/")
    .get(getAccounts);

router
    .route("/login")
    .post(login);

router
    .route("/register")
    .post(register);

module.exports = router;