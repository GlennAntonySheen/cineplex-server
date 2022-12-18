import mongoose from 'mongoose'

mongoose.set('strictQuery', true);
mongoose.connect('mongodb://localhost:27017/cineplex', { useNewUrlParser: true });

const MovieSchema = new mongoose.Schema({
    movie_name: String,
    movie_description: String,
    movie_cast: String,
    movie_picture_URL: String,
    movie_status: String,
}, { collection: 'movie' })

const MovieModel = mongoose.model('movie', MovieSchema)

export default MovieModel