const gruposCtrl = {}
const gruposModel = require('../models/grupos.model')


gruposCtrl.list = async (req, res) => {
    try {
        const gruposs = await gruposModel.find();
        res.json({
            ok: true,
            gruposs
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            message: error.message
        })
    }
};

gruposCtrl.listid = async (req, res) => {
    try {
        const { id } = req.params;
        const grupos = await gruposModel.findById({ _id: id });
        if (!grupos) {
            return res.status(404).json({
                ok: false,
                message: " grupos no encontrado"
            });
        }
       
        res.json({ ok: true, grupos });
    } catch (error) {
        res.status(500).json({
            ok: false,
            message: error.message
        });
    }
};

gruposCtrl.add = async (req, res) => {
    try {
        const { genero,profesorname1,profesorname2,profesorlastname1,profesorlastname2,cantidadestudiantes } = req.body
        if (!genero || genero.trim() === "") {
            return res.status(400).json({
                ok: false,
                message: "El campo genero es requerido y no puede estar vacio"
            })
        }

        /*const verificar = await gruposModel.findOne({ email })
        if (verificar) {
            return res.json({
                ok: false,
                message: "El correo ya esta reigistrado con otro usuario"
            });
        }*/

        const newgrupos = new gruposModel({
            genero,
            profesorname1,
            profesorname2,
            profesorlastname1,
            profesorlastname2,
            cantidadestudiantes,
        });

        await newgrupos.save()
        res.json({
            ok: true,
            newgrupos
        })
    } catch (error) {
        res.status(500).json({
            ok: false,
            message: error.message
        })
    }
}
gruposCtrl.update = async (req, res) => {
    try {
        const { id } = req.params
        const grupos = await gruposModel.findById({ _id: id })

        if (!grupos) {
            return res.status(404).json({
                ok: false,
                message: "grupos no encontrado"
            });
        }


        const genero = req.body.genero || grupos.genero;
        const profesorname1 = req.body.profesorname1 || grupos.profesorname1;
        const profesorname2 = req.body.profesorname2 || grupos.profesorname2;
        const profesorlastname1 = req.body.profesorlastname1 || grupos.profesorlastname1;
        const profesorlastname2 = req.body.profesorlastname2 || grupos.profesorlastname2;
        const cantidadestudiantes = req.body.cantidadestudiantes || grupos.cantidadestudiantes;

        const gruposUpdate = {
            genero,
            profesorname1,
            profesorname2,
            profesorlastname1,
            profesorlastname2,
            cantidadestudiantes,
        };

        await grupos.updateOne(gruposUpdate);
        res.json({
            ok: true,
            message: "grupos actualizado"
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            message: error.message
        });
    }
}
gruposCtrl.delete = async (req, res) => {
    try {
        const { id } = req.params;
        const grupos = await gruposModel.findById({ _id: id });

        if (!grupos) {
            return res.status(404).json({
                ok: false,
                message: "grupos no encontrado"
            });
        }

        await grupos.deleteOne()
        res.json({ Ok: true, message: 'grupos Eliminado' });
    } catch (error) {
        res.status(500).json({
            ok: false,
            message: error.message
        });
    }
};

module.exports = gruposCtrl;