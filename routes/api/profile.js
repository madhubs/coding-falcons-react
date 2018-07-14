const express = require("express"); //to use router we need express first

const router = express.Router();

//HEADER INFO BELOW
//@route GET api/profile/test
//@desc  Tests profile route
//@access Public
router.get("/test", (req, res) => res.json({ message: "profile works!" })); //equivalent to app.get/post/put/etc...  in the server file. We want this file to server json.

module.exports = router;
