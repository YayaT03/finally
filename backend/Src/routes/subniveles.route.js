const { Router } = require("express")
const {check } = require('express-validator')
const subnivelesCtrl = require("../controllers/subniveles.controllers");
const route = Router();
const validarCampos = require("../middlewares/validar")

route.get('/list', subnivelesCtrl.list);
route.get('/list/:id', subnivelesCtrl.listid);
route.post('/add',
[
    check(`genero`,`el campo es requerido y no puede estar vacio`)
    .exists()
    .trim()
    .notEmpty()
  
  ],
validarCampos, subnivelesCtrl.add);

route.put('/update/:id', subnivelesCtrl.update);
route.delete('/delete/:id', subnivelesCtrl.delete);

module.exports = route