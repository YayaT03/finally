const { Router } = require('express')
const registrocompetenciaCtrl = require('../controllers/registrocompetencia.controllers');
const route = Router();
const validarCampos = require("../middlewares/validar")
const {check} = require (`express-validator`)

route.get('/list', registrocompetenciaCtrl.list);
route.get('/listid/:id', registrocompetenciaCtrl.listid);
route.post('/add',
[
    check(`name1`,`el campo es requerido y no puede estar vacio`)
    .exists()
    .trim()
    .notEmpty()
  
  ],
  validarCampos,registrocompetenciaCtrl.add);
route.put('/update/:id', registrocompetenciaCtrl.update);
route.delete('/delete/:id', registrocompetenciaCtrl.delete);

module.exports = route 