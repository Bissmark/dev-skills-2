var express = require('express');
var router = express.Router();
var skillsCtrl = require('../controllers/skills')

// GET /skills
router.get('/', skillsCtrl.index)

// GET /skills/new
router.get('/new', skillsCtrl.new);

// GET /skills/:id
router.get('/:id', skillsCtrl.show);

// GET /skills/:id/edit
router.get('/:id/edit', skillsCtrl.edit);

// GET /skills/:id
router.post('/', skillsCtrl.create);

// GET /skills/:id
router.delete('/:id', skillsCtrl.delete);

// GET /skills/:id
router.put('/:id', skillsCtrl.update);

module.exports = router;
