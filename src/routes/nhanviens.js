const express = require('express');
const router = express.Router();

const nhanvienController = require('../app/controllers/NhanVienController');


router.get('/list', nhanvienController.list);
router.get('/create', nhanvienController.create);
router.post('/store', nhanvienController.store);

router.get('/:id', nhanvienController.detail);
module.exports = router;