import { promises as fs } from "fs"
import path from "path"

export async function GET() {
  try {
    // SỬA LỖI: Xóa bỏ "cv" khỏi đường dẫn nếu file nằm trực tiếp trong /public
    const filePath = path.join(process.cwd(), "public", "dang-anh-nhat-cv.pdf") 
    const fileBuffer = await fs.readFile(filePath)

    return new Response(fileBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="dang-anh-nhat-cv.pdf"',
      },
    })
  } catch (error) {
    console.error("Error downloading CV:", error)
    return new Response("File not found or error reading file.", { status: 404 })
  }
}