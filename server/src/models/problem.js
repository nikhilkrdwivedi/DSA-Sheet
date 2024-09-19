import mongoose from "mongoose";
const { Schema, model } = mongoose;

const ProblemSchema = new Schema(
    { 
        title:{ type: String, required:true },
        url: { type: String, required:true  },
        source: { type: String },
        note: { type: String },
        level: { type: String, enum: ['easy', 'medium', 'hard'] },
        tags: [{ type: String }],
        topics: [{ type: Schema.Types.ObjectId, ref: 'topics' }],
        chapters: [{ type: Schema.Types.ObjectId, ref: 'problems' }],
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
ProblemSchema.index({ title: 1 });

export const ProblemModel = model(`problems`, ProblemSchema, `problems`);