'use strict';

const express = require('express');
const router = express.Router();
const models = require('../../db/models/index');
const Campus = models.Campus
module.exports = router;

router.get('/', (req, res, next) => {
  Campus.findAll()
    .then(campi =>{
      res.json(campi)
    })
    .catch(next);
});

router.get('/:campusId', (req, res, next) => {
  Campus.findOne({
    where: {
      id: req.params.campusId
    }
  }).then(campus =>{
    res.json(campus)
  })
    .catch(next);
})

router.put('/:campusId', (req, res, next) =>{
  Campus.update(req.body,{
    where:{
      id: req.params.campusId
    }
  }).then(campus =>{
    res.json(campus)
  })
    .catch(next);
})

router.get('/:campusId/delete', (req, res, next) => {
  Campus.destroy({
    where: {
      id: req.params.campusId
    }
  })
    .then(() => {
    res.status(202).end()
  })
    .catch(next);
})

router.post('/', (req, res, next) => {
  Campus.create(req.body)
    .then(campus => res.status(201).json(campus))
    .catch(next)
})

