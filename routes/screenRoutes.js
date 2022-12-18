import express from 'express';
import ScreenModel from '../models/screenModel.js'

const router = express.Router()

router.post('/getScreens', async (req, res) => {
    try {
        const screens = await ScreenModel.find(req.body.filter)
        console.log(screens)
        res.status(200).json(screens)
    } catch (err) {
        console.log(err)
        res.status(404).send('nothing')
    }
})

router.post('/addNewScreen', (req, res) => {
    const NewScreen = new ScreenModel({ ...req.body, screen_status: 'active' })
    NewScreen.save((err, result) => {
        if (err) console.log(err)
    })
    res.send(`Added new Screen`)
})

router.patch('/changeStatus', async (req, res) => {
    ScreenModel.findByIdAndUpdate(req.body.id, { "screen_status": req.body.newStatus }, (err, result) => {
        if (err) res.send(err)
        res.send(result)
    })
})

export default router