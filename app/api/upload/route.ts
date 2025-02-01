import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  const formData = await request.formData()
  const file = formData.get("file") as File

  if (!file) {
    return NextResponse.json({ success: false, message: "No file uploaded" }, { status: 400 })
  }

  // Here you would typically upload the file to a storage service
  // For this example, we'll just return the file details
  return NextResponse.json({
    success: true,
    file: {
      name: file.name,
      type: file.type,
      size: file.size,
    },
  })
}

