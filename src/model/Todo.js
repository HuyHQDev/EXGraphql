import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const todoSchema = new Schema(
    {
        title: String,
        content: String,
        priority: Number,
        createdAt: {type: Date, default: Date.now},
        updatedAt: {type: Date, default: Date.now},
        subjectId: Schema.Types.ObjectId,
        userId: Schema.Types.ObjectId,
    },
    {
        collection: "Todo"
    }
);

const Todo = mongoose.model("Todo", todoSchema);

export default Todo;