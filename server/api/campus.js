'use strict';

const express = require('express');
const router = express.Router();
const models = require('../../db/models/index');
const Campus = models.Campus
module.exports = router;

router.get('/', (req, res, next) => {
  console.log('gotten')
  Campus.findAll()
    .then(campi =>{
      console.log(campi)
      res.json(campi)
    })
    .catch(next);
});

router.post('/', (req, res, next) => {
  // res.send(req.body)
  Campus.create(req.body)
    .then(campus => res.status(201).json(campus))
    .catch(next)
})

router.get('/:campusId', (req, res, next) => {
  Campus.findOne({
    where: {
      id: req.params.campusId
    }
  }).then(campus =>{
    console.log(campus)
    res.json(campus)
  })
    .catch(next);
})