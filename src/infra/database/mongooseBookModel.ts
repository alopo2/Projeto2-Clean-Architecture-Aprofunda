import mongoose, {Schema} from "mongoose";

const bookSchema = new Schema({
    title: {type: String, required: true, unique: true},
    content: {type: String, required: true},
    author: {type: String, required: true},
    status: {type: String, required: true},
    created_at: {type: Date, default: Date.now},
});

export const bookModel = mongoose.model('Book', bookSchema)