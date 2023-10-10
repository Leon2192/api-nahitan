import { Schema, model } from "mongoose";

const projectSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String },
  technology: { type: String },
  image: { type: String },
  githug: { type: String },
  source: { type: String },
});

export default model("Project", projectSchema);
