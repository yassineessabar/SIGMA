import mongoose, { Schema, Document } from "mongoose"

interface IFormData extends Document {
  fullName: string
  email: string
  brokerAccountNumber: string
  depositAmount: string
  selectedRobot: string
  createdAt: Date
}

const FormDataSchema = new Schema<IFormData>({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  brokerAccountNumber: { type: String, required: true },
  depositAmount: { type: String, required: true },
  selectedRobot: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
})

const FormDataModel = mongoose.models.FormData || mongoose.model<IFormData>("FormData", FormDataSchema)

export default FormDataModel
