///////////////    NODE MODULES    ///////////////
const express     = require('express');
const router      = express.Router();
const cronUpdate = require('./_cronjobUpdate');
// const retrieveGeneric = require('./retrieve_user_plants');

//////////////    SERVER MODULES    //////////////
// const db = require('../../models/pg-config');

router.post('/daily', (req, res) => {
  cronUpdate(req, res);

});

// router.post('/retrieveGeneric', (req, res) => {
//   console.log('lookie!! userid: ', req);
//   retrieveGeneric(req, res);
// })


module.exports = router;
