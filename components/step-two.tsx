import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { Alert, AlertDescription, AlertTitle } from "../components/ui/alert"
import { InfoIcon } from "lucide-react"
import { InfoModal } from "./info-modal"
import Image from "next/image"
import Link from "next/link"

interface FormData {
  depositAmount: number
}

interface StepTwoProps {
  formData: FormData
  updateFormData: (updatedFields: Partial<FormData>) => void
}

export function StepTwo({ formData, updateFormData }: StepTwoProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Step 3: Open Your Live Account & Deposit Funds</h2>
        {/* <InfoModal title="How to Deposit Funds">
          <ol className="list-decimal list-inside space-y-2">
            <li>Log in to your VT Markets account</li>
            <li>Navigate to the "Deposit" or "Fund Account" section</li>
            <li>Choose your preferred payment method (e.g., bank transfer, credit card)</li>
            <li>Enter the amount you wish to deposit (minimum $400)</li>
            <li>Follow the prompts to complete the transaction</li>
            <li>Save the confirmation or screenshot of your deposit</li>
          </ol>
          <Image
            src="/placeholder.svg?height=200&width=350&text=Account+Funding"
            alt="Account Funding Process"
            width={350}
            height={200}
            className="mt-4 rounded-lg border border-gray-200"
          />
        </InfoModal> */}
      </div>
      
      <div className="p-6 bg-gray-50 rounded-lg shadow-md">
      <h1 className="text-xl font-bold mb-2">
        1. <span className="underline">Open a Live Account</span>
      </h1>
      <p>
        Click{" "}
        <Link
          href="https://yourlink.com"
          target="_blank"
          className="text-blue-600 underline font-medium"
        >
          here to open a live account
        </Link>
        .
      </p>
      <ul className="list-disc pl-16 mt-2 space-y-1">
        <li>
          <span className="font-bold">Account Type:</span> Select{" "}
          <span className="font-bold">MT4 Standard</span>
        </li>
        <li>
          <span className="font-bold">Leverage:</span> Set to{" "}
          <span className="font-bold">1:500</span>
        </li>
        <li>
          <span className="font-bold">Currency:</span> Choose{" "}
          <span className="font-bold">USD</span>
        </li>
      </ul>
      <p className="mt-4">Proceed and confirm your account creation.</p>

      <div className=" rounded-lg overflow-hidden mt-6">
        <Image
          src="/upload-doc-pic.jpg"
          alt="Live Account Setup"
          width={700}
          height={350}
          className="rounded-lg border border-gray-200"
        />
      </div>

      <h2 className="text-xl font-bold my-6">2. Deposit Funds</h2>

      <p>
        After creating your account, make a minimum deposit of{" "}
        <span className="font-bold">$500</span> via{" "}
        <Link
          href="https://yourdepositlink.com"
          target="_blank"
          className="text-blue-600 underline font-medium"
        >
          this link.
        </Link>
        <br/>You can choose from the following deposit methods:
      </p>

      <ul className="list-disc pl-16 mt-2 space-y-1">
        <li>
          <span className="font-bold text-black">Binance Pay</span> for
          crypto payments{" "}
          <span className="italic text-gray-500">
            (Recommended if familiar with crypto payments)
          </span>
        </li>
        <li>
          <span className="font-bold text-black">AUD Bank Transfer</span> for
          direct bank deposits
        </li>
        <li>
          <span className="font-bold text-gray-700">Visa</span> for card
          payments{" "}
          <span className="italic text-gray-500">
            (Recommended for easy processing)
          </span>
        </li>
        <li>
          <span className="font-bold text-black">Volet</span> for e-wallet
          transactions
        </li>
        <li>
          <span className="font-bold text-black">Skrill</span> for fast
          online transfers
        </li>
        <li>Follow the on-screen instructions to complete your deposit.</li>
      </ul>

      <div className="rounded-lg overflow-hidden mt-6 space-y-10">
        <Image
          src="/funds-pic-one.jpg"
          alt="Live Account Setup"
          width={700}
          height={350}
          className="rounded-lg border border-gray-200"
        />
        <Image
          src="/funds-pic-two.jpg"
          alt="Live Account Setup"
          width={700}
          height={350}
          className="rounded-lg border border-gray-200"
        />
      </div>

    </div>

      <Alert>
        <InfoIcon className="h-4 w-4" />
        <AlertTitle>Why $400 minimum?</AlertTitle>
        <AlertDescription>
          This amount ensures you have sufficient capital to execute Sigmatic Trading strategies effectively while
          managing risk.
        </AlertDescription>
      </Alert>

      <div className="space-y-2">
        <Label htmlFor="depositAmount">Deposit Amount</Label>
        <Input
          id="depositAmount"
          type="number"
          value={formData.depositAmount}
          onChange={(e) => updateFormData({ depositAmount: Number(e.target.value) })}
          // placeholder="Enter deposit amount"
          min="400"
        />
        <p className="text-sm text-gray-600">Enter the exact amount you deposited into your VT Markets account.</p>
      </div>
    </div>
  )
}
