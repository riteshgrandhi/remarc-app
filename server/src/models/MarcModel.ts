import mongoose, { Schema, Document } from "mongoose";
import { IMarc } from "remarc-app-common";

const marcsSchema = new Schema({
  marcId: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  document: { type: Array }
});

export interface IMarcDocument extends IMarc, Document {}

export default mongoose.model<IMarcDocument>("Marcs", marcsSchema);