const express = require('express');
const router = express.Router();
const {check, validationResult} = require('express-validator/check');
const User = require('../models/User');
// @route POST api/users.
// @desc Register a user.
// @access Public.
router.post(
  '/',
  [
    check('name', 'please add name').not().isEmpty(),
    check('email', 'please add email').isEmail(),
    check('password', 'please add password with 6 characters').isLength({
      min: 6,
    }),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      // errors is not Empty!.
      return res.status(400).json({errors: errors.array()});
    }
    res.send(req.body);
  }
);

module.exports = router;
