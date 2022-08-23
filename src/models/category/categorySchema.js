import mongoose from "mongoose";

const catSchema = new mongoose.Schema({
    status: {
        type: String,
        default: 'inactive'
    },
    name: {
        type: String,
        required: true,
        maxLength: 50

    },
    slug: {
        unique: true,
        type: String,
        index: 1,
        // required: true,
        trim: true,
        maxLength: 50

    },
    parentId: {
        type: mongoose.Schema.Types.ObjectId,
        default: null
    },

},
);

export default mongoose.model("Category", catSchema); 