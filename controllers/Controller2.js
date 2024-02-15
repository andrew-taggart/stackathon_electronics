//We only need this once!
const Model2 = require('../models/model1')

const getAllModel2 = async (req, res) => {
    try {
        const model2 = await Model2.find()
        res.json(model2)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const getModel2ById = async (req, res) => {
    try {
        const { id } = req.params
        const model2 = await Model2.findById(id)
        if (model2) {
            return res.json(model2)
        }
        return res.status(404).send('Model2 item with the specified ID does not exists');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const createModel2 = async (req, res) => {
    try {
        const model2 = await new Model2(req.body)
        await model2.save()
        return res.status(201).json({
            model2
        })
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

const updateModel2 = async (req, res) => {
    try {
        let { id } = req.params;
        let model2 = await Model2.findByIdAndUpdate(id, req.body, { new: true })
        if (model2) {
            return res.status(200).json(model2)
        }
        throw new Error("Model2 item not found")
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const deleteModel2 = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Model2.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Model2 item deleted")
        }
        throw new Error("Model2 item not found")
    } catch (error) {
        return res.status(500).send(error.message)
    }
}
module.exports = {
    getAllModel2,
    getModel2ById,
    createModel2,
    updateModel2,
    deleteModel2
}