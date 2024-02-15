const { TV } = require('../models')

const getAllTvs = async (req, res) => {
    try {
        const tv = await TV.find()
        res.json(tv)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const getTvById = async (req, res) => {
    try {
        const { id } = req.params
        const tv = await TV.findById(id)
        if (tv) {
            return res.json(tv)
        }
        return res.status(404).send('tv item with the specified ID does not exists');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getTvByProductName = async (req, res) => {
    try {
        const product_name = req.param
        const tv = await TV.findOne({'name': product_name.name})
        if (tv) {
            return res.json(tv)
        }
        return res.status(404).send('TV with the specified name does not exist');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const createTv = async (req, res) => {
    try {
        const tv = await new TV(req.body)
        await tv.save()
        return res.status(201).json({
            tv
        })
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

const updateTv = async (req, res) => {
    try {
        let { id } = req.params;
        let tv = await TV.findByIdAndUpdate(id, req.body, { new: true })
        if (tv) {
            return res.status(200).json(tv)
        }
        throw new Error("TV item not found")
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const deleteTv = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await TV.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("TV item deleted")
        }
        throw new Error("TV item not found")
    } catch (error) {
        return res.status(500).send(error.message)
    }
}
module.exports = {
    getAllTvs,
    getTvById,
    createTv,
    updateTv,
    deleteTv,
    getTvByProductName 
}