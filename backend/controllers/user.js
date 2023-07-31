import asyncHandler from 'express-async-handler';
// @desc : auth user
// @route : users/loginUser
// @access : puplic
const loginUser = asyncHandler(async(req, res) => {
    res.status(200).send('Login User');
})

// @desc : register new user
// @route : user/users
// @access : puplic
const registerUser = asyncHandler(async(req, res) => {
    res.status(200).send('Register User');
})

// @desc : update user profile
// @route : users/profile
// @access : private
const updateUserProfile = asyncHandler(async(req, res) => {
    res.status(200).send('Update User');
})

// @desc : get user profile
// @route : users/profile
// @access : private
const getUserProfile = asyncHandler(async(req, res) => {
    res.status(200).send('Get User');
})

// @desc : user logout
// @route : users/logout
// @access : puplic
const logoutUser = asyncHandler(async(req, res) => {
    res.status(200).send('Logout User');
})

export {
    loginUser,
    registerUser,
    updateUserProfile,
    getUserProfile,
    logoutUser
}