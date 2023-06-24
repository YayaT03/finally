const { Router } = require('express')
const profesoresCtrl = require('../controllers/profesores.controllers');
const route = Router();
const {check} = require (`express-validator`)
const validarCampos = require("../middlewares/validar")

route.get('/list', profesoresCtrl.list);
route.get('/listid/:id', profesoresCtrl.listid);
route.post('/add', 
[
    check(`documentid`,`el campo es requerido y no puede estar vacio`)
    .exists()
    .trim()
    .notEmpty()
  
  ],
validarCampos, profesoresCtrl.add);
route.put('/update/:id', profesoresCtrl.update);
route.delete('/delete/:id', profesoresCtrl.delete);

module.exports = route 