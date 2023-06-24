const matriculaCtrl = {}
const matriculaModel = require('../models/matricula.models')

  matriculaCtrl.list = async (req, res) => {
    try {
        const matricula = await matriculaModel.find();
        res.json({
            ok: true,
            matricula
        });
    } catch (error) {
        res.status(500), json({
            ok: false,
            message: error.message
        })
    }
};

  matriculaCtrl.listid = async (req, res) => {
    try {
        const { id } = req.params;
        const matricula = await matriculaModel.findById({ _id: id });
        if (!matricula) {
            return res.status(404).json({
                ok: false,
                message: "Matricula no encontrada"
            });
        }

        res, json({ ok: true, matricula });
    } catch (error) {
        res.status(500).json({
            ok: false,
            message: error.message
        });
    }
};

  matriculaCtrl.add = async (req, res) => {
    try {
        const { matriculaid,fecha,estudiantenombre1,estudiantenombre2,estudianteapellido1, estudianteapellido2,documentoestudiante,telefono,email,
        acudientenombre1,acudientenombre2,acudienteapellido1,acudienteapellido2,documentoacudiente, profesornombre1,profesorapellido1, grupo, subnivel } = req.body
        if (!matriculaid || matriculaid.trim() === "") {
            return res.status(400).json({
                ok: false,
                message: "El campo matricula Id es requerido y no puede estar vacio"
            })
        }

        const verificar = await matriculaModel.findOne({ matriculaid })
        if (verificar) {
            return res.json({
                ok: false,
                message: "El estudiante ya esta registrado con otro usuario"
            });
        }

        const newMatricula = new matriculaModel({
            matriculaid,
            fecha,
            estudiantenombre1,
            estudiantenombre2,
            estudianteapellido1,
            estudianteapellido2,
            documentoacudiente,
            profesornombre1,
            profesorapellido1,
            documentoestudiante,
            telefono, 
            email, 
            acudientenombre1,
            acudientenombre2,
            acudienteapellido1,
            acudienteapellido2,
            grupo,
            subnivel,
        });

        await newMatricula.save()
        res.json({
            ok: true,
            newMatricula
        })

    } catch (error) {
        res.status(500).json({
            ok: false,
            message: error.message
        })
    }
}
 matriculaCtrl.update = async (req, res) => {
    try {
        const { id } = req.params
    
    const matricula = await matriculaModel.findById({ _id: id })

    if (!matricula) {
        return res.status(404).json({
            ok: false,
            message: "Matricula no encontrada"
        });

    }

    const matriculaid = req.body.matriculaid || matricula.matriculaid;
    const fecha = req.body.fecha || matricula.fecha;
    const estudiantenombre1 = req.body.estudiantenombre1 || matricula.estudiantenombre1;
    const estudiantenombre2 = req.body.estudiantenombre2 || matricula.estudiantenombre2;
    const estudianteapellido1 = req.body.estudianteapellido1 || matricula.estudianteapellido1;
    const estudianteapellido2 = req.body.estudianteapellido2 || matricula.estudianteapellido2;
    const documentoestudiante= req.body.documentoestudiante || matricula.documentoestudiante;
    const profesornombre1 = req.body.profesornombre1 || matricula.profesornombre1;
    const profesorapellido1 = req.body.profesorapellido1 || matricula.profesorapellido1;
    const acudientenombre1 = req.body.acudientenombre1 || matricula.acudientenombre1;
    const acudientenombre2 = req.body.acudientenombre2 || matricula.acudientenombre2;
    const acudienteapellido1 = req.body.acudienteapellido1 || matricula.acudienteapellido1;
    const acudienteapellido2 = req.body.acudienteapellido2 || matricula.acudienteapellido2;
    const documentoacudiente = req.body.documentoacudiente|| matricula.documentoacudiente;
    const grupo = req.body.grupo || matricula.grupo;
    const subnivel = req.body.subnivel || matricula.subnivel;
    const email = req.body.email || matricula.email;
    const telefono = req.body.telefono || matricula.telefono;
    

    const matriculaUpdate = {
        matriculaid,
        fecha,
        estudiantenombre1,
        estudiantenombre2,
        estudianteapellido1,
        estudianteapellido2,
        documentoacudiente,
        profesornombre1,
        profesorapellido1,
        documentoestudiante,
        telefono, 
        email, 
        acudientenombre1,
        acudientenombre2,
        acudienteapellido1,
        acudienteapellido2,
        grupo,
        subnivel,
    };
    await matricula.updateOne(matriculaUpdate);
    res.json({
        ok: true,
        message: "matricula actualizada",
    });
    }catch (error) {
        res.status(500).json({
            ok: false,
            message: error.message
        });
    }
}


    matriculaCtrl.delete = async (req, res) => {
        try {
            const { id } = req.params;
            const matricula = await matriculaModel.findById({ _id: id });

            if (!matricula) {
                return res.status(404).json({
                    ok: false,
                    message: "matricula no encontrada"
                });
            }
            await matricula.deleteOne()
            res.json({ ok: true, message: "matricula eliminada" });
        } catch (error) {
            res.status(500).json({
                ok: false,
                message: error.message,
            });
        }
    };

    module.exports = matriculaCtrl;
