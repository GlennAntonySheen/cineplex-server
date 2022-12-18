import mongoose from 'mongoose'

mongoose.set('strictQuery', true);
mongoose.connect('mongodb://localhost:27017/cineplex', { useNewUrlParser: true });

const ScreenSchema = new mongoose.Schema({
    screen_name: String,
    screen_status: String,
}, { collection: 'screen' })

const ScreenModel = mongoose.model('screen', ScreenSchema)

export default ScreenModel