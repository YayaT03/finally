const profesoresCrtl = {}
const profesoresModel = require('../models/profesores.model')


profesoresCrtl.list = async (req, res) => {
    try {
        //const limit=parseInt(req.params.limit) || 10;
        //const page=parseInt(req.query.page) || 1;
        //const options={
        // limit,
        // page,

        const profesores = await profesoresModel.find();
        //const users = await userModel.paginate({},options);
        res.json({
            ok: true,
            profesores
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            message: error.message
        });
    }
};

profesoresCrtl.listid = async (req, res) => {
    try {
        const { id } = req.params;
        const profesores = await profesoresModel.findById({ _id: id });
        if (!profesores) {
            return res.statues(400).json({
                ok: false,
                message: "profesor no encontrado"
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

profesoresCrtl.add = async (req, res) => {
    try {
        const { documentid,name1,name2, lastname1,lastname2, email, phonenumber, direction,fechadenacimiento,edad } = req.body
        if (!documentid || documentid.trim() === "") {
            return res.statues(400).json({
                ok: false,
                message: "el campo name es requerido y no puede estar vacio"
            })
        }

        const verificar = await profesoresModel.findOne({ email })
        if (verificar) {
            return res.json({
                ok: false,
                message: "el correo ya esta registrado con otro profesor"
            });
        }
        const newProfesor = new profesoresModel({
            documentid,
            name1,
            name2,
            lastname1,
            lastname2,
            email,
            phonenumber,
            direction,
            fechadenacimiento,
            edad,

        });

        await newProfesor.save()
        res.json({
            ok: true,
            newProfesor
        })


    } catch (error) {
        res.status(500).json({
            ok: false,
            message: error.message
        });
    }



}

profesoresCrtl.update = async (req, res) => {
    try {
        const { id } = req.params
        const profesores = await profesoresModel.findById({ _id: id })

        if (!profesores) {
            return res.status(400).json({
                ok: false,
                message: "profesor no encontrado"
            });
        }

        const documentid = req.body.documentid || profesores.documentid;
        const name1 = req.body.name1 || profesores.name1;
        const name2 = req.body.name2 || profesores.name2;
        const lastname1 = req.body.lastname1 || profesores.lastname1;
        const lastname2 = req.body.lastname2 || profesores.lastname2;
        const email = req.body.email || profesores.email;
        const phonenumber = req.body.phonenumber || profesores.phonenumber;
        const direction = req.body.direction || profesores.direction;
        const edad = req.body.edad || profesores.edad;
        const fechadenacimiento = req.body.fechadenacimiento || profesores.fechadenacimiento;
        const profesoresUpdate = {
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
        await profesores.updateOne(profesoresUpdate);
        res.json({
            ok: true,
            message: "profesor actualizado",
        });


    } catch (error) {
        res.status(500).json({
            ok: false,
            message: error.message
        });
    }


}

profesoresCrtl.delete = async (req, res) => {
    try {
        const { id } = req.params;
        const profesores = await profesoresModel.findById({ _id: id });

        if (!profesores) {
            return res.statues(400).json({
                ok: false,
                message: "profesor no encontrado"
            });
        }
        await profesores.deleteOne()
        res.json({ ok: true, message: "profesor eliminado" });

    } catch (error) {
        res.status(500).json({
            ok: false,
            message: error.message
        });
    }

};


module.exports = profesoresCrtl;