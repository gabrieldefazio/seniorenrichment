'use strict';

const express = require('express');
const router = express.Router();
const models = require('../../db/models/index');
const Student = models.Student
module.exports = router;

router.get('/', (req, res, next) => {
  Student.findAll()
    .then(student =>{
      res.json(student)
    })
    .catch(next);
});

router.put('/:studentId', (req, res, next) => {
  Student.update(req.body, {
    where:{
      id: req.params.studentId
    }
  }).then(campus =>{
    res.json(campus)
  })
    .catch(next);
})

router.post('/', (req, res, next) => {
  Student.create(req.body)
    .then(student => res.status(201).json(student))
    .catch(next)
})

router.get('/:studentId', (req, res, next) => {
  Student.findOne({
    where: {
      id: req.params.studentId
    }
  }).then(student =>{
    res.json(student)
  })
    .catch(next);
})

router.get('/:studentId/:campusId', (req, res, next) => {
  Student.destroy({
    where: {
      id: req.params.studentId
    }
  })
    .then(() =>{
      res.redirect(`/campi/${req.params.campusId}`)
    })
    .catch(next);
})
