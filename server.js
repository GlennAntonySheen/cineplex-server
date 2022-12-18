import express from 'express';
import cors from 'cors';
import bookings from './routes/bookingRoutes.js'
import seets from './routes/seetRoutes.js'
import movies from './routes/movieRoutes.js'
import screens from './routes/screenRoutes.js'
import mongoose from 'mongoose'

const app = express()
const PORT = 4000

// Middlewares
app.use(express.json());
app.use(cors());

app.use('/seets', seets)
app.use('/bookings', bookings)
app.use('/movies', movies)
app.use('/screens', screens)

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));