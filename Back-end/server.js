const mongoose = require('mongoose');
const express = require('express');

const cors = require('cors');
const furnitureData = require('./Data/furnitureData');
const furnitureCategData = require('./Data/furnitureCateg');
const applianceCategData = require('./Data/applianceCateg');
const applianceData = require('./Data/appliance')
const electronicsCategData = require('./Data/electronicsCategData')
const electronicsData = require('./Data/electronicsData')
require('dotenv/config')
const FurnitureCategSchema = require('./schemas/furniture/furnitureCateg')
const FurnitureSchema = require('./schemas/furniture/furniture');
const ApplianceCategSchema = require('./schemas/appliance/applianceCateg')
const ApplianceSchema = require('./schemas/appliance/appliance')
const ElectronicsCategSchema = require('./schemas/electronics/electronicsCateg')
const ElectronicsSchema = require('./schemas/electronics/electronics');
const furniture = require('./schemas/furniture/furniture');
const app = express();
app.use(cors());
app.use(express.json());

// app.post('/furnitureCateg', async(req, res) => {
//     try{
//         for(let i=0; i<furnitureCategData.length; i++) {
//             const furnitureCateg = new FurnitureCategSchema(furnitureCategData[i])
//             await furnitureCateg.save();
//         }
//         res.status(201).send("Successfully added!")
//     } catch(err) {
//         res.status(404).send({message: err})
//     }
// })

// app.post('/furniture', async(req, res) => {
//     try{
//         for(let i=0; i<furnitureData.length; i++) {
//             const furniture = new FurnitureSchema(furnitureData[i])
//             await furniture.save();
//         }
//         res.status(201).send("Successfully added!")
//     } catch(err) {
//         res.status(404).send({message: err})
//     }
// })

// app.post('/applianceCateg', async(req, res) => {
//     try{
//         for(let i=0; i<applianceCategData.length; i++) {
//             const applianceCateg = new ApplianceCategSchema(applianceCategData[i])
//             await applianceCateg.save();
//         }
//         res.status(201).send("Successfully added!")
//     } catch(err) {
//         res.status(404).send({message: err})
//     }
// })

// app.post('/appliance', async(req, res) => {
//     try{
//         for(let i=0; i<applianceData.length; i++) {
//             const appliance = new ApplianceSchema(applianceData[i])
//             await appliance.save();
//         }
//         res.status(201).send("Successfully added!")
//     } catch(err) {
//         res.status(404).send({message: err})
//     }
// })
// app.post('/electronicsCateg', async(req, res) => {
//     try{
//         for(let i=0; i<electronicsCategData.length; i++) {
//             const electronicsCateg = new ElectronicsCategSchema(electronicsCategData[i])
//             await electronicsCateg.save();
//         }
//         res.status(201).send("Successfully added!")
//     } catch(err) {
//         res.status(404).send({message: err})
//     }
// })
// app.post('/electronics', async(req, res) => {
//     try{
//         for(let i=0; i<electronicsData.length; i++) {
//             const electronics = new ElectronicsSchema(electronicsData[i])
//             await electronics.save();
//         }
//         res.status(201).send("Successfully added!")
//     } catch(err) {
//         res.status(404).send({message: err})
//     }
// })
// getting the furniture category
app.get('/furnitureCateg', async(req, res) => {
    try{
        const furnitureCateg = await FurnitureCategSchema.find();
        res.send(furnitureCateg)
    } catch(err) {
        res.status(404).send({message: err})
    }
})

// get single furnitureCateg
app.get('/furnitureCateg/:id', async(req, res) => {
    try {
        id = req.params.id;
        const singleFurnitureCateg = await FurnitureCategSchema.findById(id);
        res.send(singleFurnitureCateg)
    } catch(err) {
        res.status(404).send(err.message)
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
// get single furniture
app.get('/furniture/:id', async(req, res) => {
    try {
        id = req.params.id;
        const singleFurniture = await FurnitureSchema.findById(id);
        res.send(singleFurniture)
    } catch(err) {
        res.status(404).send(err.message)
    }
})
//get furniture by categId
app.get('/furniture/categ/:categId', async(req, res) => {
    try {
        categId = req.params.categId;
        console.log(categId);
        const singleFurniture = await FurnitureSchema.find();
        // console.log(singleFurniture);
        const furnitures = singleFurniture.filter(item => item.categId === categId);
        res.send(furnitures)
    } catch(err) {
        res.status(404).send(err.message)
    }
})
//get appliance by categId
app.get('/appliance/categ/:categId', async(req, res) => {
    try {
        categId = req.params.categId;
        console.log(categId);
        const singleAppliance = await ApplianceSchema.find();
        console.log(singleAppliance);
        const appliances = singleAppliance.filter(item => item.categId === categId);
        res.send(appliances)
    } catch(err) {
        res.status(404).send(err.message)
    }
})
//get electronics by categId
app.get('/electronics/categ/:categId', async(req, res) => {
    try {
        categId = req.params.categId;
        console.log(categId);
        const singleElectronics = await ElectronicsSchema.find();
        console.log(singleElectronics);
        const electronicss = singleElectronics.filter(item => item.categId === categId);
        res.send(electronicss)
    } catch(err) {
        res.status(404).send(err.message)
    }
})
app.get('/applianceCateg', async(req, res) => {
    try{
        const applianceCateg = await ApplianceCategSchema.find();
        res.send(applianceCateg)
    } catch(err) {
        res.status(404).send({message: err})
    }
})

// get single furnitureCateg
app.get('/applianceCateg/:id', async(req, res) => {
    try {
        id = req.params.id;
        const applianceCateg = await ApplianceCategSchema.findById(id);
        res.send(applianceCateg)
    } catch(err) {
        res.status(404).send(err.message)
    }
})

// get applianceData
app.get('/appliance', async(req, res) => {
    try{
        const appliance = await ApplianceSchema.find();
        res.send(appliance)
    } catch(err) {
        res.status(404).send({message: err})
    }
})
// get single appliance
app.get('/appliance/:id', async(req, res) => {
    try {
        id = req.params.id;
        const singleAppliance = await ApplianceSchema.findById(id);
        res.send(singleAppliance)
    } catch(err) {
        res.status(404).send(err.message)
    }
})

app.get('/electronicsCateg', async(req, res) => {
    try{
        const electronicsCateg = await ElectronicsCategSchema.find();
        res.send(electronicsCateg)
    } catch(err) {
        res.status(404).send({message: err})
    }
})

// get single furnitureCateg
app.get('/electronicsCateg/:id', async(req, res) => {
    try {
        id = req.params.id;
        const singleelectronicsCateg = await ElectronicsCategSchema.findById(id);
        res.send(singleelectronicsCateg)
    } catch(err) {
        res.status(404).send(err.message)
    }
})
// getting the furniture
app.get('/electronics', async(req, res) => {
    try{
        const electronics = await ElectronicsSchema.find();
        res.send(electronics)
    } catch(err) {
        res.status(404).send({message: err})
    }
})
// get single furniture
app.get('/electronics/:id', async(req, res) => {
    try {
        id = req.params.id;
        const singleelectronics = await ElectronicsSchema.findById(id);
        res.send(singleelectronics)
    } catch(err) {
        res.status(404).send(err.message)
    }
})
const start = () => {
    mongoose.connect(process.env.DATABASE_STRING, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }, (req, res) => {
        console.log("connected to the datatbase!")
    })
    app.listen(process.env.PORT, ()=> {
        console.log("Listening to the port 8080...");
    })
}
start()


