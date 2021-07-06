const express = require('express');
const router = express.Router();

//@route GET api/contacts.
//@desc Get all users contacts.
//@access Private.

router.get('/', (req, res) => {
  res.send('Get all contacts');
});
//@route POST api/auth.
//@desc Auth user and get Token
//@access Public.

router.post('/', (req, res) => {
  res.send('Add contacts');
});

//@route PUT api/auth.
//@desc Update contact
//@access Private.

router.put('/:id', (req, res) => {
  res.send('Add contacts');
});
//@route Delete api/auth.
//@desc Delte
//@access Private.

router.delete('/:id', (req, res) => {
  res.send('Delete contacts');
});
module.exports = router;
