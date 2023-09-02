const express = require('express');
const router  = express.Router();

const servicioControler = require('../controllers/serviciosController');


router.get('/',servicioControler.all);
router.get('/create',servicioControler.create);
router.get('/update/:id',servicioControler.update);
router.get('/delete/:id',servicioControler.delete);

module.exports = router;