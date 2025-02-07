import Image from "next/image"

interface FormData {
    brokerAccountNumber: string
}

interface StepOneProps {
    formData: FormData
    updateFormData: (updatedFields: Partial<FormData>) => void
}

export function StepFour({ formData, updateFormData }: StepOneProps) {
  
    return (
        <div className="space-y-6">

            <h2 className="text-2xl font-semibold">Step 2: Upload your documents </h2>
            <div className="bg-gray-50 p-4 rounded-lg space-y-4">
                <h3 className="font-semibold text-lg">
                    1. Complete the Questionnaire
                </h3>
                <p className="text-sm text-gray-600">Log into your dashboard and fill out the "Questionnaire" form with details about your trading experience and financial background.</p>

                <Image
                    src="/questionair-pic.jpg"
                    alt="questionair-pic"
                    width={700}
                    height={350}
                    className="rounded-lg border border-gray-200"
                />

                <h1 className="font-bold text-[20px]">2. Upload Required Documents</h1>
                <p className="pt-2">Go to the <span className="font-bold">"Upload Documents"</span> section:</p>
                <ul className="">
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
        </div >
    )
}
