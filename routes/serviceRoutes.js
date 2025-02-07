const express = require('express');
const serviceController = require('../controllers/serviceController');

const router = express.Router()

router.post('/services', serviceController.create);
router.get('/services', serviceController.findAll);
router.get('/services/:id', serviceController.findById);
router.put('/services/:id', serviceController.update);
router.delete('/services/:id', serviceController.delete);

module.exports = router;