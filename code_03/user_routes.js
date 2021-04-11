const userController = require("./controllers/user_controller")
const express = require("express");
const router = express.Router();

router.get('/',userController.findAllRec)
router.post('/',userController.createRec)
router.get('/:id',userController.findOne)
router.get('/delete/:id',userController.deleteRec)
router.post('/update/:id',userController.updateRec)

module.exports = router