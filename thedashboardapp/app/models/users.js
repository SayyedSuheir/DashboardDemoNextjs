import mongoose from 'mongoose';

const usersSchema = new mongoose.Schema(
  {
    id: { type: Number, required: true, unique: true, min: 1 },
    name: { type: String, required: true, trim: true, minlength: 2, lowercase: true },
    phone: { type: String, required: true, match: [/^\d{10}$/, 'Phone must be 10 digits'] },
    email: { type: String, required: true, unique: true, lowercase: true, match: [/^\S+@\S+\.\S+$/, 'Invalid email'] },
    password: { type: String, required: true, trim: true, minlength: 8, maxlength: 16 },
  },
  { timestamps: true }
);

const Users = mongoose.models.Users || mongoose.model('Users', usersSchema);

export default Users;
