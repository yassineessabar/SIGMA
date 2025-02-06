import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { Alert, AlertDescription, AlertTitle } from "../components/ui/alert"
import { InfoIcon } from "lucide-react"
import { InfoModal } from "./info-modal"
import Image from "next/image"
import Link from "next/link"

interface FormData {
  brokerAccountNumber: string
}

interface StepOneProps {
  formData: FormData
  updateFormData: (updatedFields: Partial<FormData>) => void
}

export function StepOne({ formData, updateFormData }: StepOneProps) {
  const signupSteps = [
    {
      title: "Visit Errante  website",
      description: "Go to the link: Errante homepage to begin your registration.",
    },
    {
      title: "Fill in Your Information",
      description: "Complete the registration form with your personal details.",
      personalDetail: {
        title: "Provide accurate personal details, including:",
        fullName: 'Full Name',
        PhoneNumber: 'Phone number',
        emailPass: 'Email and password',
      },
      image: "/information-pic.jpg",
    },
    {
      title: "Confirm Your Email",
      description: "Check your inbox for a confirmation email “Welcome to Errante” from Errante. Click on “Verify Your Email”  or enter the provided PIN code to confirm your email address.",
      image: "/confirm-email-pic.jpg",
    },
    {
      title: "Complete the Questionnaire",
      description: "Log into your dashboard and fill out the 'Questionnaire' form with details about your trading experience and financial background.",
      image: "/questionair-pic.jpg",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Step 1: Sign Up with Errante</h2>
        <InfoModal title="How to Sign Up with VT Markets">
          <ol className="list-decimal list-inside space-y-2">
            {signupSteps.map((step, index) => (
              <li key={index}>
                <strong>{step.title}</strong>: {step.description}
              </li>
            ))}
          </ol>
        </InfoModal>
      </div>
      <p className="text-sm text-gray-600 mb-4">
        Get started with Errante, our recommended broker for Sigmatic Trading. Follow these simple steps to create your account:
      </p>

      {signupSteps.map((step, index) => (
        <div key={index} className="bg-gray-50 p-4 rounded-lg space-y-4">
          <h3 className="font-semibold text-lg">
            {index + 1}. {step.title}
          </h3>
          <p className="text-sm text-gray-600">{step.description}</p>
          <p className="pt-2">{step.personalDetail?.title}</p>
          {step.personalDetail && (
            <ul className="list-disc pl-10">
              <li>{step.personalDetail?.fullName}</li>
              <li>{step.personalDetail?.PhoneNumber}</li>
              <li>{step.personalDetail?.emailPass}</li>
            </ul>
          )}
          {
            step.image && (
              <Image
                src={step.image}
                alt={step.title}
                width={350}
                height={200}
                className="rounded-lg border border-gray-200"
              />
            )}
        </div>
      ))}
      <div className="bg-gray-50 p-4 rounded-lg space-y-4">
        <h1 className="font-bold text-[20px]">5. Upload Required Documents</h1>
        <p className="pt-2">Go to the <span className="font-bold">"Upload Documents"</span> section:</p>
        <ul className=" pl-20">
          <li className="pt-2">• Upload a valid Identification Document (Passport, ID card, or Driver’s License).
            <li>
              <a className="text-blue-500" href="https://myportal.errante.com/profile/documents?cid=1">https://myportal.errante.com/profile/documents?cid=1</a>
              <Image
                src='/upload-doc-pic.jpg'
                alt='upload document pic'
                width={600}
                height={300}
                className=" mt-5 rounded-lg border border-gray-200"
              />
            </li>
          </li>
          <li className=" pt-5">• Upload a Proof of Address (utility bill, bank statement, etc., dated within the last 3 months).).
            <li className="">
              <a className="text-blue-500" href="https://myportal.errante.com/profile/documents?cid=2">https://myportal.errante.com/profile/documents?cid=2</a>
              <Image
                src='/upload-address-pic.jpg'
                alt='upload address pic'
                width={600}
                height={300}
                className="mt-5 rounded-lg border border-gray-200"
              />
            </li>
          </li>
        </ul>
      </div>

      <Alert>
        <InfoIcon className="h-4 w-4" />
        <AlertTitle>Why Errante </AlertTitle>
        <AlertDescription>
          Errante offers competitive spreads, fast execution, and a user-friendly platform that integrates seamlessly
          with Sigmatic Trading strategies.
        </AlertDescription>
      </Alert>

      <div className="space-y-2">
        <Label htmlFor="brokerAccountNumber">Errante Account Number</Label>
        <Input
          id="brokerAccountNumber"
          value={formData.brokerAccountNumber}
          onChange={(e) => updateFormData({ brokerAccountNumber: e.target.value })}
          placeholder="Enter your Errante account number"
        />
        <p className="text-sm text-gray-600">
          Your account number is a unique identifier provided by Errante after your account is approved.
        </p>
      </div>
    </div>
  )
}
