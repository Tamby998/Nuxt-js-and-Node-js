const express = require('express');
const {check} = require('express-validator');
const multer = require('multer');

const User = require('../controllers/user');
const auth = require('../controllers/auth');
const validate = require('../middlewares/validate');

const router = express.Router();

const upload = multer().single('profileImage');

//INDEX
router.get('/allUser', User.index);

//STORE
router.post('/', [
    check('email').isEmail().withMessage('Enter a valid email address'),
    check('username').not().isEmpty().withMessage('You username is required'),
    check('firstName').not().isEmpty().withMessage('You first name is required'),
    check('lastName').not().isEmpty().withMessage('You last name is required')
], validate, User.store);

//User Actif
router.get('/', auth.getUser);

//SHOW
router.get('/:id',  User.show);

//UPDATE
router.put('/:id', upload, User.update);

//DELETE
router.delete('/:id', User.destroy);

module.exports = router;


