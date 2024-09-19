import mongoose from "mongoose";
const { Schema, model } = mongoose;

const ProgressSchema = new Schema(
    {
        type: { type: String, enum: ["chapter", "problem"], required: true },
        chapter: { type: Schema.Types.ObjectId, ref: 'chapter' },
        problem: { type: Schema.Types.ObjectId, ref: 'problems' },
        createdBy: { type: Schema.Types.ObjectId, ref: 'users', required: true },
        isCompleted: {
            type: Boolean,
            default: false,
            required: true
        },
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
ProgressSchema.index({ type: 1, createdBy: 1 });

export const ProgressModel = model(`progress`, ProgressSchema, `progress`);