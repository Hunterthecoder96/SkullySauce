const express = require('express');
const merchRouter = express.Router();
const Merch = require('../models/merch');

// GET request
merchRouter.get('/', async (req, res) => {
    try {
        const product = await Merch.find();
        res.json(product);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// POST request
merchRouter.post('/', async (req, res) => {
    const product = new Merch({
        name: req.body.name,
        description: req.body.description,
        size:req.body.size,
        price: req.body.price,
        image: req.body.image,
    });

    try {
        const newMerch = await product.save();
        res.status(201).json(newMerch);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = merchRouter;