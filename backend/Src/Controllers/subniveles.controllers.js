const subnivelesCtrl = {}
const subnivelesModel = require('../models/subniveles.model')


subnivelesCtrl.list = async (req, res) => {
    try {
        const subniveles = await subnivelesModel.find();
        res.json({
            ok: true,
            subniveles
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            message: error.message
        })
    }
};

subnivelesCtrl.listid = async (req, res) => {
    try {
        const { id } = req.params;
        const subniveles = await subnivelesModel.findById({ _id: id });
        if (!subniveles) {
            return res.status(404).json({
                ok: false,
                message: " subnivel no encontrado"
            });
        }
       
        res.json({ ok: true, genero });
    } catch (error) {
        res.status(500).json({
            ok: false,
            message: error.message
        });
    }
};

subnivelesCtrl.add = async (req, res) => {
    try {
        const { genero, nivel } = req.body
        if (!genero || genero.trim() === "") {
            return res.status(400).json({
                ok: false,
                message: "El campo genero es requerido y no puede estar vacio"
            })
        }
    /*const verificar = await subnivelesModel.findOne({ genero })
        if (verificar) {
            return res.json({
                ok: false,
                message: "El subnivel ya esta registrado "
            });
        }*/

        const newsubnivel = new subnivelesModel({
            nivel,
            genero,
        });

        await newsubnivel.save()
        res.json({
            ok: true,
            newsubnivel
        })
    } catch (error) {
        res.status(500).json({
            ok: false,
            message: error.message
        })
    }
}
subnivelesCtrl.update = async (req, res) => {
    try {
        const { id } = req.params
        const subniveles = await subnivelesModel.findById({ _id: id })

        if (!subniveles) {
            return res.status(404).json({
                ok: false,
                message: "subnivel no encontrado"
            });
        }


        const nivel  = req.body.nivel || subniveles.nivel;
        const genero = req.body.genero || subniveles.genero;

        const subnivelesUpdate = {
           nivel,
           genero,
        };

        await subniveles.updateOne(subnivelesUpdate);
        res.json({
            ok: true,
            message: "Subnivel actualizado"
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            message: error.message
        });
    }
}
subnivelesCtrl.delete = async (req, res) => {
    try {
        const { id } = req.params;
        const subniveles = await subnivelesModel.findById({ _id: id });

        if (!subniveles) {
            return res.status(404).json({
                ok: false,
                message: "Subnivel no encontrado"
            });
        }

        await subniveles.deleteOne()
        res.json({ Ok: true, message: 'Subnivel Eliminado' });
    } catch (error) {
        res.status(500).json({
            ok: false,
            message: error.message
        });
    }
};

module.exports = subnivelesCtrl;