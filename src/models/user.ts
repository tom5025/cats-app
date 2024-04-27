import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    google_id: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true }
});

export default mongoose.models.User || mongoose.model('User', userSchema);