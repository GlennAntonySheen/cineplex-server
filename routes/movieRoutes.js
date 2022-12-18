import express from 'express';
import MovieModel from '../models/movieModel.js'

const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const allMovie = await MovieModel.find()
        console.log(allMovie)
        res.status(200).json(allMovie)
    } catch (err) {
        console.log(err)
        res.status(404).send('nothing')
    }
})

router.post('/addNewMovie', (req, res) => {
    const NewMovie = new MovieModel({ ...req.body, movie_status: 'active' })
    NewMovie.save((err, result) => {
        if (err) console.log(err)
    })
    res.send(`Added new movie`)
})

router.patch('/changeStatus', async (req, res) => {
    MovieModel.findByIdAndUpdate(req.body.id, { "movie_status": req.body.newStatus }, (err, result) => {
        if (err) res.send(err)
        res.send(result)
    })

})

export default router