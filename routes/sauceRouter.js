const express = require('express');
const sauceRouter = express.Router();
const Sauce = require('../models/sauce');

// GET request
sauceRouter.get('/', async (req, res) => {
    try {
        const sauces = await Sauce.find();
        res.json(sauces);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// POST request
sauceRouter.post('/', async (req, res) => {
    const sauce = new Sauce({
        name: req.body.name,
        description: req.body.description,
        heat: req.body.heat,
        price: req.body.price,
        image: req.body.image,
    });

    try {
        const newSauce = await sauce.save();
        res.status(201).json(newSauce);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = sauceRouter;