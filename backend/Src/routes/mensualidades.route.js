const { Router } = require('express')
const {check} = require (`express-validator`)
const mensualidadesCtrl = require('../controllers/mensualidades.controller');
const route = Router();
const validarCampos = require("../middlewares/validar")

route.get('/list', mensualidadesCtrl.list);
route.get('/listid/:id', mensualidadesCtrl.listid);
route.post('/add',
[
    check(`idmensualidad`,`el campo es requerido y no puede estar vacio`)
    .exists()
    .trim()
    .notEmpty()
  
],
validarCampos, mensualidadesCtrl.add);
route.put('/update/:id', mensualidadesCtrl.update);
route.delete('/delete/:id', mensualidadesCtrl.delete);

module.exports = route