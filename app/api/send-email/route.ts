import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"
import { connectToDatabase } from "@/lib/mongodb"
import FormDataModel from "@/models/FormData"

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json()

    // Connect to MongoDB
    await connectToDatabase()

    // Save data to MongoDB
    const newFormData = new FormDataModel(formData)
    await newFormData.save()

    // Set up Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASS,
      },
    })

    // Email options
    const mailOptions = {
      from: process.env.EMAIL,
      to: process.env.RECIEVER_EMAIL,
      subject: "New Onboarding Submission",
      html: `
        <h2>New Onboarding Submission</h2>
        <p><b>Full Name:</b> ${formData.fullName}</p>
        <p><b>Email:</b> ${formData.email}</p>
        <p><b>Broker Account Number:</b> ${formData.brokerAccountNumber}</p>
        <p><b>Deposit Amount:</b> ${formData.depositAmount}</p>
        <p><b>Selected Robot:</b> ${formData.selectedRobot}</p>
      `,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    return NextResponse.json({ success: true, message: "Data saved & email sent" })
  } catch (error) {
    console.error("Error:", error)
    return NextResponse.json({ success: false, message: "Operation failed" }, { status: 500 })
  }
}
