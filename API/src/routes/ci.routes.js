const express = require('express');
const router = express.Router();
const ciController = require('../controllers/ci.controller');

router.get('/', ciController.getAll);
router.get('/:id', ciController.getById);
router.post('/', ciController.create);
router.put('/:id', ciController.update);
router.delete('/:id', ciController.delete);

module.exports = router;
