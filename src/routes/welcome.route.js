const router = require('express').Router();

router.get("/", (req, resp) => {
    resp.render("home")
})


module.exports = router;