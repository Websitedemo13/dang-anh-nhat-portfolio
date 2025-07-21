import { streamText, StreamingTextResponse } from "ai" // Import StreamingTextResponse
import { openai } from "@ai-sdk/openai"
import { content } from "@/lib/data" // Import your data

export async function POST(req: Request) {
  try {
    const { messages, lang } = await req.json()

    // Ensure lang is either 'vn' or 'en'
    const currentLang = lang === "vn" || lang === "en" ? lang : "vn"

    // Stringify the relevant personal data for the current language
    const personalData = JSON.stringify(content[currentLang])

    const systemPrompt =
      currentLang === "vn"
        ? `Bạn là trợ lý AI vui vẻ, nhiệt tình và hữu ích cho portfolio của Đặng Anh Nhật. Mục đích của bạn là trả lời các câu hỏi về Đặng Anh Nhật dựa trên dữ liệu được cung cấp. Hãy trả lời một cách chi tiết, chuyên nghiệp nhưng vẫn giữ sự thân thiện. Luôn chủ động gợi ý các câu hỏi tiếp theo về kỹ năng, kinh nghiệm, dự án hoặc mục tiêu của anh ấy để khuyến khích người dùng khám phá thêm. Dưới đây là dữ liệu cá nhân của Đặng Anh Nhật: ${personalData}`
        : `You are a cheerful, enthusiastic, and helpful AI assistant for Dang Anh Nhat's portfolio. Your purpose is to answer questions about Dang Anh Nhat based on the provided data. Respond in a detailed, professional, yet friendly manner. Always proactively suggest follow-up questions about his skills, experience, projects, or goals. Here is Dang Anh Nhat's personal data: ${personalData}`

    const result = await streamText({
      model: openai("gpt-4o"),
      system: systemPrompt,
      messages,
    })

    // Correctly return the stream response
    return new StreamingTextResponse(result.toReadableStream())
  } catch (error) {
    console.error("Error in API route:", error)
    return new Response(
      JSON.stringify({
        error:
          "An error occurred while processing your request. Please try again later." +
          (process.env.NODE_ENV === "development" ? ` Details: ${error}` : ""),
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      },
    )
  }
}
