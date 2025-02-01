import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  const formData = await request.formData()
  const file = formData.get("file") as File

  if (!file) {
    return NextResponse.json({ success: false, message: "No file uploaded" }, { status: 400 })
  }
  
  return NextResponse.json({
    success: true,
    file: {
      name: file.name,
      type: file.type,
      size: file.size,
    },
  })
}

