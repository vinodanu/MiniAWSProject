const { addPatient } = require('../controller/register.contoller');

const router = require('express').Router();


router.get("/add", (req, resp) => {
    resp.render("register")
})

router.post("/register", addPatient)

module.exports = router;