import mongoose from "mongoose";
const { Schema, model } = mongoose;

const TopicSchema = new Schema(
    {
        title: {
            type: String,
            trim: true,
            required: true,
        },
        description: {
            type: String,
            trim: true,
        },
        tags: [{ type: String }],
        chapters: [{ type: Schema.Types.ObjectId, ref: 'chapters' }],
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
TopicSchema.index({ title: 1 }, { unique: true });

export const TopicModel = model(`topics`, TopicSchema, `topics`);