const router = require('express').Router();
const PinController = require('../controllers/PinController');

router.post('/', PinController.create);
router.get('/', PinController.getPins);
module.exports = router;