//We only need this once!
const { response } = require('express')
const { Computer } = require('../models')
//const { json } = require('body-parse')

const getAllComputer = async (req, res) => {
    try {
        const computers = await Computer.find()
        res.json(computers)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const getComputersById = async (req, res) => {
    try {
        const { id } = req.params
        const computers = await Computer.findById(id)
        if (computers) {
            return res.json(computers)
        }
        return res.status(404).send('Computer with the specified ID does not exists');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getComputersByProductName = async (req, res) => {
    try {
        const product_name = req.param.name
        
        console.log(" Product name ",product_name)
        //const { id } = req.params
        const computers = await Computer.find({name: product_name})
        //console.log(computers)
        
        if (computers) {
            return res.json(computers)
        }else{
            //console.log(computers)
        }
        return res.status(404).send('Computer with the specified name does not exists');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getComputersByBrandName = async (req, res) => {
    try {
        const brand_name = req.param.name
        
        console.log("Brand name",brand_name)
        
        const computers = await Computer.find({'category.brand': brand_name})
        //console.log(computers)
        
        if (computers) {
            return res.json(computers)
            // console.log("if yes results :", computers)
        }else{
            //console.log("if no results :", computers)
        }
        return res.status(404).send('Computer with the specified name does not exists');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const createComputer = async (req, res) => {
    try {
        const computers = await new Computer(req.body)
        await computers.save()
        return res.status(201).json({
            computers
        })
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

const updateComputer = async (req, res) => {
    try {
        let { id } = req.params;
        let update_computer = await Computer.findByIdAndUpdate(id, req.body, { new: true })
        if (update_computer) {
            return res.status(200).json(update_computer)
        }
        throw new Error("Computer not found")
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const deleteComputer = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Computer.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Computer item deleted")
        }
        throw new Error("Computer item not found")
    } catch (error) {
        return res.status(500).send(error.message)
    }
}
module.exports = {
    getAllComputer,
    getComputersById,
    createComputer,
    updateComputer,
    deleteComputer,
    getComputersByProductName,
    getComputersByBrandName
}