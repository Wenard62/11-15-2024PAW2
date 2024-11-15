const Fakultas = require("../models/Fakultas");

const getAllFakultas = async (req,res) =>{
    try{
        const fakultas = await Fakultas.find();
        res.status(200).json(fakultas);
    } catch(err){
        res.status(500).json({message: err.message});
    }
};
const getFakultasById = async (req,res) => {
    try{
        const fakultas = await Fakultas.findById(req.params.id);
        if(!fakultas)
            return res.status(404).json({message : "Fakultas not found"});
        res.status(200).json(fakultas);
    } catch (err){
        res.status(500).json({message: err.message});
    }
};
const createFakultas = async (req,res) => {
    const fakultas = new Fakultas({
        nama: req.body.nama,
        singkatan: req.body.singkatan,
    });
    try{
        const newFakultas = await fakultas.save();
        res.status(201).json(newFakultas);
    } catch(err){
        res.status(400).json({message:err.message});
    }
};
const updateFakultas = async (req,res) => {
    try{
        const fakultas = await Fakultas.findById(req.params.id);
        if(!fakultas)
            return res.status(404).json({ message: "fakultas not found"});
        if (req.body.nama != null){
            fakultas.nama = req.body.nama;
        }
        if (req.body.singkatan != null){
            fakultas.singkatan = req.body.singkatan;
        }
        const updatedFakultas = await fakultas.save();
        res.status(200).json(updatedFakultas);
    } catch(err){
        res.status(400).json({message: err.message});
    }
};
const deleteFakultas = async (req,res) => {
    try{
        const fakultas = await Fakultas.findById(req.params.id);
        if(!fakultas)
            return res.status(404).json({message: "fakultas not found"});
        await fakultas.deleteOne();
        res.status(200).json({message : "fakultas deleted"});
    } catch (err){
        res.status(500).json({message: err.message});
    }
};

module.exports = {
    getAllFakultas,
    createFakultas,
    getFakultasById,
    updateFakultas,
    deleteFakultas,
};