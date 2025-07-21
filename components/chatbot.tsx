"use client"

import { useState, useRef, useEffect, FormEvent } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Bot, MessageSquare, Send, X, Sparkles, Lightbulb, User } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useLanguage } from "@/components/language-provider"
import { cn } from "@/lib/utils" // Giả sử bạn có hàm tiện ích này từ shadcn/ui

interface Message {
  role: "user" | "assistant"
  content: string
}

// --- Dữ liệu Mockup ---
const mockResponses = {
  vn: {
    "kỹ năng của nhật là gì?":
      "Nhật có nhiều kỹ năng lắm! Anh ấy mạnh về React, Next.js, TypeScript để xây dựng giao diện người dùng hiện đại, và cũng rành về Node.js, Express cho backend. Ngoài ra, Nhật còn có kinh nghiệm với các công cụ như Docker, Vercel và các hệ quản trị cơ sở dữ liệu như PostgreSQL.",
    "anh ấy có kinh nghiệm làm việc ở đâu?":
      "Nhật đã có kinh nghiệm làm việc tại một số công ty công nghệ, nơi anh ấy tham gia phát triển các ứng dụng web quy mô lớn, từ thương mại điện tử đến các hệ thống quản lý nội bộ. Bạn có muốn biết chi tiết hơn về dự án nào không?",
    "mục tiêu nghề nghiệp của nhật là gì?":
      "Mục tiêu của Nhật là trở thành một Lập trình viên Full-stack chuyên sâu, có khả năng xây dựng các sản phẩm công nghệ hoàn chỉnh và mang lại giá trị thực cho người dùng. Anh ấy luôn muốn học hỏi công nghệ mới và đóng góp cho các dự án có ý nghĩa.",
    "anh ấy đã đạt được giải thưởng nào?":
      "Trong quá trình học tập và làm việc, Nhật đã giành được một số giải thưởng tại các cuộc thi lập trình (hackathon) và được công nhận là nhân viên xuất sắc của quý. Điều này cho thấy sự nỗ lực và đam mê của anh ấy với ngành lập trình.",
    "giới thiệu về đặng anh nhật":
      "Đặng Anh Nhật là một lập trình viên đam mê và sáng tạo, luôn tìm kiếm cơ hội để giải quyết các vấn đề phức tạp bằng công nghệ. Anh ấy tin rằng một sản phẩm tốt không chỉ cần chạy đúng mà còn phải mang lại trải nghiệm tuyệt vời cho người dùng. Ngoài code ra, Nhật còn thích đọc sách và chơi game để giải trí!",
    default: "Cảm ơn câu hỏi của bạn! Đây là một chủ đề thú vị. Mặc dù tôi chưa được lập trình để trả lời câu này, bạn có thể liên hệ trực tiếp với Nhật qua email hoặc LinkedIn để trao đổi thêm nhé.",
  },
  en: {
    "what are nhat's skills?":
      "Nhat has a wide range of skills! He's proficient in front-end technologies like React, Next.js, and TypeScript for building modern user interfaces, and also skilled in back-end with Node.js and Express. Additionally, he has experience with tools like Docker, Vercel, and databases like PostgreSQL.",
    "where has he worked?":
      "Nhat has worked at several tech companies where he contributed to developing large-scale web applications, from e-commerce platforms to internal management systems. Would you like to know more about a specific project?",
    "what are nhat's career goals?":
      "Nhat aims to become a senior Full-stack Developer, capable of building complete tech products that deliver real value to users. He is always eager to learn new technologies and contribute to meaningful projects.",
    "what awards has he received?":
      "Throughout his academic and professional journey, Nhat has won several awards at programming competitions (hackathons) and was recognized as an employee of the quarter. This demonstrates his dedication and passion for the programming field.",
    "tell me about dang anh nhat":
      "Dang Anh Nhat is a passionate and creative developer, always seeking opportunities to solve complex problems with technology. He believes a great product not only needs to function correctly but also provide an amazing user experience. Besides coding, Nhat enjoys reading and gaming!",
    default: "That's an excellent question! While I'm not programmed to answer that specifically, you can connect directly with Nhat via email or LinkedIn to discuss it further.",
  },
}

const getMockResponse = (question: string, lang: "vn" | "en"): string => {
  const normalizedQuestion = question.toLowerCase().replace("?", "").trim()
  const responses = mockResponses[lang]
  return responses[normalizedQuestion as keyof typeof responses] || responses.default
}
// --- Kết thúc dữ liệu Mockup ---

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const scrollAreaRef = useRef<HTMLDivElement>(null)
  const { language, currentContent } = useLanguage()

  const initialGreeting =
    language === "vn"
      ? "Chào bạn! Tôi là trợ lý AI của Đặng Anh Nhật. Tôi có thể giúp gì cho bạn?"
      : "Hi there! I'm Dang Anh Nhat's AI assistant. How can I help you today?"

  const suggestedQuestions =
    language === "vn"
      ? [
          "Kỹ năng của Nhật là gì?",
          "Anh ấy có kinh nghiệm làm việc ở đâu?",
          "Mục tiêu nghề nghiệp của Nhật là gì?",
        ]
      : ["What are Nhat's skills?", "Where has he worked?", "What are Nhat's career goals?"]

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([{ role: "assistant", content: initialGreeting }])
    }
  }, [isOpen, messages.length, initialGreeting])

  useEffect(() => {
    // Tự động cuộn xuống tin nhắn mới nhất
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTo({
        top: scrollAreaRef.current.scrollHeight,
        behavior: "smooth",
      })
    }
  }, [messages])

  const handleSendMessage = (e: FormEvent<HTMLFormElement> | null = null, question?: string) => {
    if (e) e.preventDefault()
    const messageContent = question || input
    if (messageContent.trim() === "" || isLoading) return

    const userMessage: Message = { role: "user", content: messageContent }
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    // Giả lập bot đang "gõ"
    setTimeout(() => {
      const botResponseContent = getMockResponse(messageContent, language)
      const botMessage: Message = { role: "assistant", content: botResponseContent }

      setMessages((prev) => [...prev, botMessage])
      setIsLoading(false)
    }, 1500 + Math.random() * 500) // Thời gian chờ ngẫu nhiên cho thực tế
  }

  return (
    <>
      {/* Nút Chat nổi */}
      <motion.div
        initial={{ scale: 0, rotate: -90 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.5, delay: 1, type: "spring", stiffness: 200, damping: 20 }}
        className="fixed bottom-6 right-6 z-[100]"
      >
        <Button
          size="icon"
          className="h-16 w-16 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 bg-gradient-to-br from-indigo-500 to-purple-600 text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={isOpen ? "x" : "message"}
              initial={{ opacity: 0, scale: 0.5, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.5, y: 10 }}
              transition={{ duration: 0.2 }}
            >
              {isOpen ? <X className="h-8 w-8" /> : <MessageSquare className="h-8 w-8" />}
            </motion.div>
          </AnimatePresence>
        </Button>
      </motion.div>

      {/* Cửa sổ Chat */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed bottom-24 right-6 z-[99] w-[calc(100vw-48px)] max-w-md"
          >
            <Card className="h-[600px] flex flex-col shadow-2xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border-2 border-transparent bg-clip-padding [border-image:linear-gradient(to_bottom_right,theme(colors.indigo.400),theme(colors.purple.500))_1]">
              <CardHeader className="flex flex-row items-center justify-between p-4 border-b dark:border-slate-700">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                      <Bot className="h-7 w-7 text-white" />
                    </div>
                    <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full bg-green-500 border-2 border-white dark:border-slate-900" />
                  </div>
                  <div className="flex flex-col">
                    <CardTitle className="text-base font-bold text-slate-800 dark:text-slate-100">
                      {language === "vn" ? "Trợ lý AI của Nhật" : "Nhat's AI Assistant"}
                    </CardTitle>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Online</p>
                  </div>
                </div>
                <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700">
                  <X className="h-5 w-5" />
                </Button>
              </CardHeader>
              
              <CardContent className="flex-1 p-0 overflow-hidden">
                <ScrollArea className="h-full" ref={scrollAreaRef}>
                  <div className="space-y-4 p-4">
                    {messages.map((msg, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                        className={cn("flex items-end gap-2", msg.role === "user" ? "justify-end" : "justify-start")}
                      >
                        {msg.role === 'assistant' && (
                           <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                             <Bot className="h-5 w-5 text-white" />
                           </div>
                        )}
                        <div
                          className={cn(
                            "max-w-[80%] rounded-2xl p-3 text-sm leading-relaxed shadow-md",
                            msg.role === "user"
                              ? "bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-br-none"
                              : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 rounded-bl-none"
                          )}
                        >
                          {msg.content}
                        </div>
                      </motion.div>
                    ))}
                    {isLoading && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-end gap-2 justify-start"
                      >
                         <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                           <Bot className="h-5 w-5 text-white" />
                         </div>
                        <div className="max-w-[80%] rounded-2xl p-3 text-sm bg-white dark:bg-slate-800 rounded-bl-none shadow-md">
                          <div className="flex items-center gap-2 text-slate-500">
                            <Sparkles className="h-4 w-4 animate-pulse text-indigo-500" />
                            <span>{language === "vn" ? "Đang gõ..." : "Typing..."}</span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </ScrollArea>
              </CardContent>

              <CardFooter className="p-4 border-t dark:border-slate-700 flex flex-col items-start gap-3">
                <div className="w-full">
                  <ScrollArea className="w-full max-w-full">
                    <div className="flex gap-2 pb-2">
                      {suggestedQuestions.map((q, idx) => (
                        <Button
                          key={idx}
                          variant="outline"
                          size="sm"
                          disabled={isLoading}
                          onClick={() => handleSendMessage(null, q)}
                          className="text-xs h-auto py-1 px-3 border-slate-300 dark:border-slate-600 bg-white/50 dark:bg-slate-800/50 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-slate-700 flex-shrink-0 whitespace-nowrap"
                        >
                          <Lightbulb className="h-3 w-3 mr-1.5" />
                          {q}
                        </Button>
                      ))}
                    </div>
                  </ScrollArea>
                </div>
                <form onSubmit={handleSendMessage} className="flex w-full items-center space-x-2">
                  <Input
                    placeholder={language === "vn" ? "Hỏi gì đó về Nhật..." : "Ask something about Nhat..."}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    disabled={isLoading}
                    className="flex-1 bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-xl focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900"
                  />
                  <Button
                    type="submit"
                    size="icon"
                    disabled={isLoading || !input.trim()}
                    className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-xl shadow-lg hover:brightness-110 transition-all disabled:opacity-50 disabled:brightness-100"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </form>
              </CardFooter>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}