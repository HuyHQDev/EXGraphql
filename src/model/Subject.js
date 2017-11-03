import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const subjectSchema = new Schema(
    {
        title: String,
        orderNumber: Number,
        createdAt: {type: Date, default: Date.now},
        updatedAt: {type: Date, default: Date.now},
        userId: Schema.Types.ObjectId,
    },
    {
        collection: "Subject"
    }
);

const Subject = mongoose.model("Subject", subjectSchema);

export default Subject;