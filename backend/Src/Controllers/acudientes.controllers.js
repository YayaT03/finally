const acudientesCrtl = {};
const acudientesModel =require('../models/acudientes.model')


acudientesCrtl.list = async (req, res) => {
    try {
        //const limit=parseInt(req.params.limit) || 10;
        //const page=parseInt(req.query.page) || 1;
        //const options={
        // limit,
        // page,

        const acudientes = await acudientesModel.find();
        //const users = await userModel.paginate({},options);
        res.json({
            ok: true,
            acudientes
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            message: error.message
        });
    }
};
acudientesCrtl.listid = async (req, res) => {
    try {
        const { id } = req.params;
        const acudientes = await acudientesModel.findById({ _id: id });
        if (!acudientes) {
            return res.statues(400).json({
                ok: false,
                message: "acudiente no encontrado"
            });
        }
        res.json({ ok: true, user });
    } catch (error) {
        res.status(500).json({
            ok: false,
            message: error.message
        });
    }
};

acudientesCrtl.add = async (req, res) => {
    try {
        const { documentid, name1, name2, lastname1, lastname2, parentezco, direction, phonenumber, estudiante } = req.body
        if (!documentid || documentid.trim() === "") {
            return res.statues(400).json({
                ok: false,
                message: "el campo name es requerido y no puede estar vacio"
            })
        }

        const verificar = await acudientesModel.findOne({ documentid })
        if (verificar) {
            return res.json({
                ok: false,
                message: "el acudiente ya esta registrado "
            });
        }
        const newAcudiente = new acudientesModel({
            documentid,
            name1,
            name2,
            lastname1,
            lastname2,
            parentezco,
            phonenumber,
            estudiante,
            direction,

        });

        await newAcudiente.save()
        res.json({
            ok: true,
            newAcudiente
        })


    } catch (error) {
        res.status(500).json({
            ok: false,
            message: error.message
        });
    }



}

acudientesCrtl.update = async (req, res) => {
    try {
        const { id } = req.params
        const acudientes = await acudientesModel.findById({ _id: id })

        if (!acudientes) {
            return res.status(400).json({
                ok: false,
                message: "acudiente no encontrado"
            });
        }

        const documentid = req.body.documentid || acudientes.documentid;
        const name1 = req.body.name1 || acudientes.name1;
        const lastname1 = req.body.lastname1 || acudientes.lastname1;
        const name2 = req.body.name2 || acudientes.name2;
        const lastname2 = req.body.lastname2 || acudientes.lastname2;
        const parentezco = req.body.parentezco || acudientes.parentezco;
        const phonenumber = req.body.phonenumber || acudientes.phonenumber;
        const estudiante = req.body.estudiante || acudientes.estudiante;
        const direction = req.body.direction || acudientes.direction;
        const acudientesUpdate = {
            documentid,
            name1,
            name2,
            lastname1,
            lastname2,
            parentezco,
            phonenumber,
            estudiante,
            direction,

        };
        await acudientes.updateOne(acudientesUpdate);
        res.json({
            ok: true,
            message: "acudiente actualizado",
        });


    } catch (error) {
        res.status(500).json({
            ok: false,
            message: error.message
        });
    }


}

acudientesCrtl.delete = async (req, res) => {
    try {
        const { id } = req.params;
        const acudientes = await acudientesModel.findById({ _id: id });

        if (!acudientes) {
            return res.statues(400).json({
                ok: false,
                message: "acudiente no encontrado"
            });
        }
        await acudientes.deleteOne()
        res.json({ ok: true, message: "acudiente eliminado" });

    } catch (error) {
        res.status(500).json({
            ok: false,
            message: error.message
        });
    }

};


module.exports = acudientesCrtl;
