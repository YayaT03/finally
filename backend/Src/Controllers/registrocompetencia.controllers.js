const registrocompetenciaCtrl = {}
const registrocompetenciaModel = require('../models/registrocompetencia.models')

  registrocompetenciaCtrl.list = async (req, res) => {
    try {
        const registrocompetencia = await registrocompetenciaModel.find();
        res.json({
            ok: true,
            registrocompetencia
        });
    } catch (error) {
        res.status(500), json({
            ok: false,
            message: error.message
        })
    }
};

  registrocompetenciaCtrl.listid = async (req, res) => {
    try {
        const { id } = req.params;
        const registrocompetencia = await registrocompetenciaModel.findById({ _id: id });
        if (!registrocompetencia) {
            return res.status(404).json({
                ok: false,
                message: "Registro de competencia no encontrado"
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

  registrocompetenciaCtrl.add = async (req, res) => {
    try {
        const { documentid,name1,name2,lastname1, lastname2,phonenumber,email, grupoactual, subnivel } = req.body
        if (!documentid || documentid.trim() === "") {
            return res.status(400).json({
                ok: false,
                message: "El campo documentid es requerido y no puede estar vacio"
            })
        }

        const verificar = await registrocompetenciaModel.findOne({ documentid })
        if (verificar) {
            return res.json({
                ok: false,
                message: "El estudiante ya esta registrado con otro usuario"
            });
        }

        const newRegistrocompetencia = new registrocompetenciaModel({
            documentid,
            name1,
            name2,
            lastname1,
            lastname2,
            phonenumber, 
            email, 
            grupoactual,
            subnivel,
        });

        await newRegistrocompetencia.save()
        res.json({
            ok: true,
            newRegistrocompetencia
        })

    } catch (error) {
        res.status(500).json({
            ok: false,
            message: error.message
        })
    }
}
 registrocompetenciaCtrl.update = async (req, res) => {
    try {
        const { id } = req.params
    
    const registrocompetencia = await registrocompetenciaModel.findById({ _id: id })

    if (!registrocompetencia) {
        return res.status(404).json({
            ok: false,
            message: "Registro no encontrado"
        });

    }

    const documentid = req.body.documentid || registrocompetencia.documentid;
    const name1 = req.body.name1 || registrocompetencia.name1;
    const name2 = req.body.name2 || registrocompetencia.name2;
    const lastname1 = req.body.lastname1 || registrocompetencia.lastname1;
    const lastname2 = req.body.lastname2 || registrocompetencia.lastname2;
    const grupoactual = req.body.grupoactual || registrocompetencia.grupoactual;
    const subnivel = req.body.subnivel || registrocompetencia.subnivel;
    const email = req.body.email || registrocompetencia.email;
    const phonenumber = req.body.phonenumber || registrocompetencia.phonenumber;
    

    const registrocompetenciaUpdate = {
        documentid,
            name1,
            name2,
            lastname1,
            lastname2,
            phonenumber, 
            email, 
            grupoactual,
            subnivel,
        };
    
    await registrocompetencia.updateOne(registrocompetenciaUpdate);
    res.json({
        ok: true,
        message: "registro actualizado",
    });
    }catch (error) {
        res.status(500).json({
            ok: false,
            message: error.message
        });
    }
}


    registrocompetenciaCtrl.delete = async (req, res) => {
        try {
            const { id } = req.params;
            const registrocompetencia = await registrocompetenciaModel.findById({ _id: id });

            if (!registrocompetencia) {
                return res.status(404).json({
                    ok: false,
                    message: "Registro no encontrado"
                });
            }
            await registrocompetencia.deleteOne()
            res.json({ ok: true, message: "Registro eliminado" });
        } catch (error) {
            res.status(500).json({
                ok: false,
                message: error.message,
            });
        }
    };

    module.exports = registrocompetenciaCtrl;