const estudiantesCrtl = {};
const estudiantesModel = require("../models/estudiantes.model")


estudiantesCrtl.list = async (req, res) => {
    try {
        const limit=parseInt(req.params.limit) || 10;
        const page=parseInt(req.query.page) || 1;
        const options={
         limit,
         page,
        }

        //const estudiantes = await estudiantesModel.find();
        const estudiantes = await estudiantesModel.paginate({},options);
        res.json({
            ok: true,
            estudiantes
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            message: error.message
        });
    }
};

estudiantesCrtl.listid = async (req, res) => {
    try {
        const { id } = req.params;
        const estudiantes = await estudiantesModel.findById({ _id: id });
        if (!estudiantes) {
            return res.statues(400).json({
                ok: false,
                message: "estudiante no encontrado"
            });
        }
        res.json({ ok: true, estudiantes});
    } catch (error) {
        res.status(500).json({
            ok: false,
            message: error.message
        });
    }
};

estudiantesCrtl.add = async (req, res) => {
    try {
        const { documentid, name1, name2, lastname1, lastname2, email, phonenumber, direction, edad, fechadenacimiento } = req.body
        if (!documentid || documentid.trim() === "") {
            return res.statues(400).json({
                ok: false,
                message: "el campo documentid es requerido y no puede estar vacio"
            })
        }

        const verificar = await estudiantesModel.findOne({ email })
        if (verificar) {
            return res.json({
                ok: false,
                message: "el correo ya esta registrado con otro estudiante"
            });
        }
        const newEstudiante = new estudiantesModel({
            documentid,
            name1,
            name2,
            lastname1,
            lastname2,
            email,
            phonenumber,
            direction,
            edad,
            fechadenacimiento,

        });

        await newEstudiante.save()
        res.json({
            ok: true,
            newEstudiante
        })


    } catch (error) {
        res.status(500).json({
            ok: false,
            message: error.message
        });
    }



}

estudiantesCrtl.update = async (req, res) => {
    try {
        const { id } = req.params
        const estudiantes = await estudiantesModel.findById({ _id: id })

        if (!estudiantes) {
            return res.status(400).json({
                ok: false,
                message: "estudiante no encontrado"
            });
        }

        const documentid = req.body.documentid || estudiantes.documentid;
        const name1 = req.body.name1 || estudiantes.name1;
        const name2 = req.body.name2 || estudiantes.name2;
        const lastname1 = req.body.lastname1 || estudiantes.lastname1;
        const lastname2 = req.body.lastname2 || estudiantes.lastname2;
        const email = req.body.email || estudiantes.email;
        const phonenumber = req.body.phonenuember || estudiantes.phonenumber;
        const direction = req.body.direction || estudiantes.direction;
        const edad = req.body.edad || estudiantes.edad;
        const fechadenacimiento = req.body.fechadenacimiento || estudiantes.fechadenacimiento;

        const estudiantesUpdate = {
            documentid,
            name1,
            name2,
            lastname1,
            lastname2,
            email,
            phonenumber,
            direction,
            edad,
            fechadenacimiento,

        };
        await estudiantes.updateOne(estudiantesUpdate);
        res.json({
            ok: true,
            message: "estudiante actualizado",
        });


    } catch (error) {
        res.status(500).json({
            ok: false,
            message: error.message
        });
    }


}

estudiantesCrtl.delete = async (req, res) => {
    try {
        const { id } = req.params;
        const estudiantes = await estudiantesModel.findById({ _id: id });

        if (!estudiantes) {
            return res.statues(400).json({
                ok: false,
                message: "estudiante no encontrado"
            });
        }
        await estudiantes.deleteOne()
        res.json({ ok: true, message: "estudiante eliminado" });

    } catch (error) {
        res.status(500).json({
            ok: false,
            message: error.message
        });
    }

};


module.exports = estudiantesCrtl;




