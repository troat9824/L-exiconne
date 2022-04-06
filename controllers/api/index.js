const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const wordRoutes = require('./word-routes.js');

router.use('/users', userRoutes);
router.use('/words', wordRoutes);

module.exports = router;