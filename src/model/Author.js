import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const authorSchema = new Schema(
    {
        id: String,
        name: String,
        twitterHandle: String
    },
    {
        collection: "Author"
    }
);

const Author = mongoose.model("Author", authorSchema);

export default Author;