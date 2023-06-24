const { Router } = require('express')
const matriculaCtrl = require('../controllers/matricula.controllers');
const route = Router();
const {check} = require (`express-validator`)
const validarCampos = require("../middlewares/validar")


route.get('/list', matriculaCtrl.list);
route.get('/userid/:id', matriculaCtrl.listid);
route.post('/add',
[
    check(`matriculaid`,`el campo es requerido y no puede estar vacio`)
    .exists()
    .trim()
    .notEmpty()
  
  ],
  validarCampos,matriculaCtrl.add);
route.put('/update/:id', matriculaCtrl.update);
route.delete('/delete/:id', matriculaCtrl.delete);

module.exports = route
