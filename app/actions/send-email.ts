"use server"

import nodemailer from "nodemailer"

export async function sendEmail(formData: any) {
  console.log("Server action: sendEmail started")
  console.log("Received form data:", {
    ...formData,
    depositProof: formData.depositProof ? `File: ${formData.depositProof.name}` : "No file",
  })

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  })

  console.log("Nodemailer transporter created")

  const mailOptions = {
    from: process.env.SMTP_USER,
    to: process.env.SMTP_USER,
    subject: "New Sigmatic Trading Onboarding Submission",
    text: `
      New onboarding submission:
      
      Full Name: ${formData.fullName}
      Email: ${formData.email}
      Broker Account Number: ${formData.brokerAccountNumber}
      Deposit Amount: $${formData.depositAmount}
      Selected Robot: ${formData.selectedRobot}
      Deposit Proof: ${formData.depositProof ? formData.depositProof.name : "No file uploaded"}
    `,
    attachments: formData.depositProof
      ? [
          {
            filename: formData.depositProof.name,
            content: formData.depositProof,
          },
        ]
      : [],
  }

  console.log("Mail options prepared:", {
    ...mailOptions,
    attachments: mailOptions.attachments.length ? `${mailOptions.attachments.length} attachment(s)` : "No attachments",
  })

  try {
    console.log("Attempting to send email...")
    const info = await transporter.sendMail(mailOptions)
    console.log("Email sent successfully. Response:", info.response)
    return { success: true, message: "Email sent successfully" }
  } catch (error) {
    console.error("Detailed error information:", {
      name: error.name,
      message: error.message,
      stack: error.stack,
      cause: error.cause,
    })
    return { success: false, message: `Failed to send email: ${error.message}` }
  }
}

