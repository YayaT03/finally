const { Router } = require('express')
const {check} = require (`express-validator`)
const estudiantesCtrl = require('../controllers/estudiantes.controllers')
const route = Router()
const validarCampos = require("../middlewares/validar")


route.get('/list', estudiantesCtrl.list);
route.get('/listid/:id', estudiantesCtrl.listid);
route.post('/add',
[
  check(`documentid`,`el campo es requerido y no puede estar vacio`)
  .exists()
  .trim()
  .notEmpty()

],
validarCampos, estudiantesCtrl.add);
route.put('/update/:id', estudiantesCtrl.update);
route.delete('/delete/:id', estudiantesCtrl.delete);

module.exports = route