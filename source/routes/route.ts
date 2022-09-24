import express from 'express';
import controller from '../controllers/controller';
const router = express.Router();

router.get('/lists', controller.getArrayData);
router.get('/lists/:id', controller.getArraySingle);
router.put('/update/:id', controller.updateArrayData);
router.delete('/delete/:id', controller.deleteArrayData);
router.post('/add', controller.addArrayData);

export = router;