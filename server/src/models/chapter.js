import mongoose from "mongoose";
const { Schema, model } = mongoose;

const ContentSchema = new Schema({
    index: { type: Number },
    url: { type: String },
    source: { type: String },
    title: { type: String },
}, { _id: false });

const ResourceSchema = new Schema({
    video: [ContentSchema],
    blogs: [ContentSchema]
}, { _id: false });

const ChapterSchema = new Schema(
    {
        title: {
            type: String,
            trim: true,
            required: true,
        },
        level: { type: String, enum: ['easy', 'medium', 'hard'] },
        tags: [{ type: String }],
        resources: ResourceSchema,
        topics: [{ type: Schema.Types.ObjectId, ref: 'topics' }],
        problems: [{ type: Schema.Types.ObjectId, ref: 'problems' }],
        createdBy: { type: Schema.Types.ObjectId, ref: 'users', required: true },
        isActive: {
            type: Boolean,
            default: true,
        },
    },
    { timestamps: true }
);

/**
 * Add necessary index
 */
ChapterSchema.index({ title: 1 });

export const ChapterModel = model(`chapters`, ChapterSchema, `chapters`);