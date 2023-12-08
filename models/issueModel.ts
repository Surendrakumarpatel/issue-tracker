import mongoose from "mongoose";

const statusEnumValues = ['open', 'progress', 'closed'];

const issueSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: statusEnumValues,
        default: 'open'
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
}, { timestamps: true });

const Issue = mongoose.models.issue || mongoose.model("issue", issueSchema);
export default Issue;