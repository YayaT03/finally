const { Router } = require('express');
const acudientesCtrl = require('../controllers/acudientes.controllers');
const route = Router();
const {check} = require (`express-validator`)
const validarCampos = require("../middlewares/validar")


route.get('/list', acudientesCtrl.list);
route.get('/listid/:id', acudientesCtrl.listid);
route.post('/add',
  [
      check(`documentid`, `el campo es requerido y no puede estar vacio`)
      .exists()
      .trim()
      .notEmpty()

  ],
validarCampos, acudientesCtrl.add);
route.put('/update/:id', acudientesCtrl.update);
route.delete('/delete/:id', acudientesCtrl.delete);

module.exports = route 