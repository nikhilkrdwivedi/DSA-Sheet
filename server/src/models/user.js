import mongoose from "mongoose";
const { Schema, model } = mongoose;

const UserSchema = new Schema(
    {
        name: {
            type: String,
            trim: true,
            required: true,
        },
        email: {
            type: String,
            trim: true,
            required: true,
        },
        password: {
            type: String,
            trim: true,
            required: true,
        },
        tokens: [{ type: String, trim: true }],
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
UserSchema.index({ email: 1 }, { unique: true });

export const UserModel = model(`users`, UserSchema, `users`);