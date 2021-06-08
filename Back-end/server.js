const mongoose = require('mongoose');
const express = require('express');
// const cors = require('cors');
const data = require('./Data/furnitureData');
require('dotenv/config')
const FunrnitureCategSchema = require('./schemas/furnitureCateg')
const FurnitureSchema = require('./schemas/furniture');

const app = express();
app.use(express.json());

app.post('/furnitureCateg', async(req, res) => {
    try{
        const furnitureCateg = new FunrnitureCategSchema(req.body)
        await furnitureCateg.save();
        res.send(furnitureCateg)
    } catch(err) {
        res.status(404).send({message: err})
    }
})

app.post('/furniture', async(req, res) => {
    try{
        for(let i=0; i<data.length; i++) {
            const furniture = new FurnitureSchema(data[i])
            await furniture.save();
        }
        res.status(201).send("Successfully added!")
    } catch(err) {
        res.status(404).send({message: err})
    }
})
// getting the furniture category
app.get('/furnitureCateg', async(req, res) => {
    try{
        const furnitureCateg = await FunrnitureCategSchema.find();
        res.send(furnitureCateg)
    } catch(err) {
        res.status(404).send({message: err})
    }
})

// getting the furniture
app.get('/furniture', async(req, res) => {
    try{
        const furniture = await FurnitureSchema.find();
        res.send(furniture)
    } catch(err) {
        res.status(404).send({message: err})
    }
})

const start = () => {
    mongoose.connect(process.env.DATABASE_STRING, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }, (req, res) => {
        console.log("connected to the datatbase!")
    })
    app.listen(5000, ()=> {
        console.log("Listening to the port 5000...");
    })
}
start()


