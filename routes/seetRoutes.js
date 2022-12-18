import express from 'express';
import SeetsModel from '../models/seetModel.js'

const router = express.Router()
const seetsModel = new SeetsModel()

router.get('/', (req, res) => {
    res.json(seetsModel.getSeets())
})

router.post('/addSeet', (req, res) => {
    seetsModel.addSeet(req.body.id, req.body.name)
    console.log(seetsModel.getSeets())
    res.send(`Added new seet`)
})

export default router