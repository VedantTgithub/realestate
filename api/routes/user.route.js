import express from 'express';
import { test, updateUser , getUser} from '../controllers/user.controller.js';
import { verifyToken } from '../utils/verifyUser.js';
import { deleteUser } from '../controllers/user.controller.js';
import { getUserListings} from '../controllers/user.controller.js';
const router=express.Router();

router.get('/test',test);
router.post('/update/:id',updateUser);
router.delete('/delete/:id', deleteUser);
router.get('/listings/:id',getUserListings);
router.get('/:id',getUser);

export default router;