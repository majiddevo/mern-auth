import express from 'express';
import {loginUser, registerUser, updateUserProfile, getUserProfile, logoutUser} from '../controllers/user.js';

const router = express.Router();

router.post('/login', loginUser);
router.post('/', registerUser);
router.route('/profile').get(getUserProfile).put(updateUserProfile);
router.post('/logout', logoutUser);

export default router;