import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        email: String,
        nickname: String,
        password: String,
        createdAt: {type: Date, default: Date.now},
        updatedAt: {type: Date, default: Date.now},
    },
    {
        collection: "User"
    }
);

const User = mongoose.model("User", userSchema);

export default User;