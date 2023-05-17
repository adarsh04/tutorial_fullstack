import * as mongoose from 'mongoose';

export const TutorialsSchema = new mongoose.Schema({
    title: String,
    description: String,
    body: String,
    date_posted: String,
});