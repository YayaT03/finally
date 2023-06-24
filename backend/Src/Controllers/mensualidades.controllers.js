const mensualidadesCtrl = {}
const mensualidadesModel = require('../models/mensualidades.models')

mensualidadesCtrl.list = async (req, res) => {
    try {
        const mensualidades = await mensualidadesModel.find();
        res.json({
            ok: true,
            mensualidades
        });
    } catch (error) {
        res.status(500), json({
            ok: false,
            message: error.message
        })
    }
};

mensualidadesCtrl.listid = async (req, res) => {
    try {
        const { id } = req.params;
        const mensualidades = await mensualidadesModel.findById({ _id: id });
        if (!mensualidades) {
            return res.status(404).json({
                ok: false,
                message: "Mensualidad no encontrada"
            });
        }

        res, json({ ok: true, user });
    } catch (error) {
        res.status(500).json({
            ok: false,
            message: error.message
        });
    }
};

mensualidadesCtrl.add = async (req, res) => {
    try {
        const { idmensualidad, name1, name2, lastname1, lastname2, fecha, grupo, subnivel, descripcion, cantidad, valorunitario, valortotal } = req.body
        if (!idmensualidad || idmensualidad.trim() === "") {
            return res.status(400).json({
                ok: false,
                message: "El campo id mensualidad es requerido y no puede estar vacio"
            })
        }

        const verificar = await mensualidadesModel.findOne({ fecha })
        if (verificar) {
            return res.json({
                ok: false,
                message: "El estudiante ya esta registrado con otra mensualidad"
            });
        }

        const newMensualidad = new mensualidadesModel({
            idmensualidad,
            name1,
            name2,
            lastname1,
            lastname2,
            fecha,
            grupo,
            subnivel,
            descripcion,
            cantidad,
            valorunitario,
            valortotal,
        });

        await newMensualidad.save()
        res.json({
            ok: true,
            newMensualidad
        })

    } catch (error) {
        res.status(500).json({
            ok: false,
            message: error.message
        })
    }
}
mensualidadesCtrl.update = async (req, res) => {
    try {
        const { id } = req.params

        const mensualidades = await mensualidadesModel.findById({ _id: id })

        if (!mensualidades) {
            return res.status(404).json({
                ok: false,
                message: "Mensualidad no encontrada"
            });

        }

        const idmensualidad = req.body.idmensualidad || mensualidades.idmensualidad;
        const name1 = req.body.name1 || mensualidades.name1;
        const name2 = req.body.name2 || mensualidades.name2;
        const lastname1 = req.body.lastname1 || mensualidades.lastname1;
        const lastname2 = req.body.lastname2 || mensualidades.lastname2;
        const fecha = req.body.fecha || mensualidades.fecha;
        const grupo = req.body.grupo || mensualidades.grupo;
        const subnivel = req.body.subnivel || mensualidades.subnivel;
        const descripcion = req.body.descripcion || mensualidades.descripcion;
        const cantidad = req.body.cantidad || mensualidades.cantidad;
        const valorunitario = req.body.valorunitario || mensualidades.valorunitario;
        const valortotal = req.body.valortotal || mensualidades.valortotal;

        const mensualidadesUpdate = {
            idmensualidad,
            name1,
            name2,
            lastname1,
            lastname2,
            fecha,
            grupo,
            subnivel,
            descripcion,
            cantidad,
            valorunitario,
            valortotal,
        };
        await mensualidades.updateOne(mensualidadesUpdate);
        res.json({
            ok: true,
            message: "mensualidad actualizada",
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            message: error.message
        });
    }
}


mensualidadesCtrl.delete = async (req, res) => {
    try {
        const { id } = req.params;
        const mensualidades = await mensualidadesModel.findById({ _id: id });

        if (!mensualidades) {
            return res.status(404).json({
                ok: false,
                message: "mensualidad no encontrada"
            });
        }
        await mensualidades.deleteOne()
        res.json({ ok: true, message: "mensualidad eliminada" });
    } catch (error) {
        res.status(500).json({
            ok: false,
            message: error.message,
        });
    }
};

module.exports = mensualidadesCtrl;
