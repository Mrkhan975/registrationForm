const { userRegistration } = require("../controllers/user");
const router = require("express").Router();

router.post('/userRegistration',userRegistration)


module.exports = router;
