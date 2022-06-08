const router = require("express").Router();

// Controllers
const auth = require("./controllers/authController");
const game = require("./controllers/gameController");

const restrict = require("./middlewares/restrict");

// Register Page
router.post("/api/v1/auth/register", auth.register);

// Login Page
router.post("/api/v1/auth/login", auth.login);

router.get("/api/v1/auth/whoami", restrict, auth.whoami);

// Game example
router.post("/api/v1/game/play/:id", game.playGame);

module.exports = router;
