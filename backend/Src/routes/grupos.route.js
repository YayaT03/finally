const { Router } = require("express")
const {check} = require (`express-validator`)
const gruposCtrl = require("../Controllers/grupos.controller");
const route = Router();
const validarCampos = require("../middlewares/validar")

//enlista tdos los usuarios
route.get('/list', gruposCtrl.list);

//muesta usuario por id
route.get('/listid/:id', gruposCtrl.listid);

route.post('/add', 
[
    check(`genero`,`el campo es requerido y no puede estar vacio`)
    .exists()
    .trim()
    .notEmpty()
  
  ],
  validarCampos, gruposCtrl.add);

route.put('/update/:id', gruposCtrl.update);

route.delete('/delete/:id', gruposCtrl.delete);

module.exports = route