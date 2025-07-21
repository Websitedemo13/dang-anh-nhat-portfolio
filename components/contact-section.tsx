"use client"

import type React from "react"

import { useLanguage } from "@/components/language-provider"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, Send, MessageSquareText, User } from "lucide-react"
import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { toast } from "@/hooks/use-toast"

export function ContactSection() {
  const { currentContent } = useLanguage()
  const { contact } = currentContent
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setFormData({ name: "", email: "", message: "" })
    toast({
      title: currentContent.language === "vn" ? "Gửi thành công!" : "Message Sent!",
      description:
        currentContent.language === "vn"
          ? "Cảm ơn bạn đã liên hệ. Tôi sẽ phản hồi sớm nhất có thể."
          : "Thank you for your message. I will get back to you soon.",
      variant: "default",
    })
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
  }

  return (
    <section
      id="contact"
      className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-background to-primary/5 scroll-mt-20"
    >
      <div className="container px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="flex flex-col items-center justify-center space-y-4 text-center"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-accent"
          >
            {contact.title}
          </motion.h2>
          <motion.p variants={itemVariants} className="max-w-[700px] text-muted-foreground md:text-xl">
            {currentContent.language === "vn"
              ? "Hãy liên hệ với tôi qua biểu mẫu hoặc thông tin dưới đây."
              : "Feel free to reach out to me using the form or information below."}
          </motion.p>
        </motion.div>
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
            className="space-y-6"
          >
            <Card className="p-6 shadow-lg transition-all duration-300 hover:scale-[1.01] hover:shadow-xl hover:border-primary relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardHeader className="relative z-10">
                <CardTitle className="text-2xl font-bold text-primary flex items-center gap-2">
                  <MessageSquareText className="h-7 w-7" />
                  {currentContent.language === "vn" ? "Gửi tin nhắn cho tôi" : "Send me a message"}
                </CardTitle>
                <p className="text-muted-foreground">
                  {currentContent.language === "vn"
                    ? "Tôi rất mong nhận được phản hồi từ bạn!"
                    : "I'd love to hear from you!"}
                </p>
              </CardHeader>
              <CardContent className="relative z-10">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-2">
                    <Label htmlFor="name" className="flex items-center gap-1">
                      <User className="h-4 w-4 text-muted-foreground" />
                      {currentContent.language === "vn" ? "Tên của bạn" : "Your Name"}
                    </Label>
                    <Input
                      id="name"
                      placeholder={currentContent.language === "vn" ? "Nhập tên của bạn" : "Enter your name"}
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="focus:border-primary focus:ring-primary transition-all duration-200"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email" className="flex items-center gap-1">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder={currentContent.language === "vn" ? "Nhập email của bạn" : "Enter your email"}
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="focus:border-primary focus:ring-primary transition-all duration-200"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="message" className="flex items-center gap-1">
                      <MessageSquareText className="h-4 w-4 text-muted-foreground" />
                      {currentContent.language === "vn" ? "Tin nhắn của bạn" : "Your Message"}
                    </Label>
                    <Textarea
                      id="message"
                      placeholder={currentContent.language === "vn" ? "Nhập tin nhắn của bạn" : "Enter your message"}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="focus:border-primary focus:ring-primary transition-all duration-200"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full group bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      currentContent.language === "vn" ? (
                        "Đang gửi..."
                      ) : (
                        "Sending..."
                      )
                    ) : (
                      <>
                        {currentContent.language === "vn" ? "Gửi tin nhắn" : "Send Message"}
                        <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
            className="grid gap-6"
          >
            <Card className="h-full shadow-lg transition-all duration-300 hover:scale-[1.01] hover:shadow-xl hover:border-accent relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardHeader className="relative z-10">
                <Mail className="h-8 w-8 text-primary group-hover:text-accent transition-colors duration-300 group-hover:scale-110" />
                <CardTitle>Email</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-muted-foreground text-base">{contact.info.email}</p>
              </CardContent>
            </Card>
            <Card className="h-full shadow-lg transition-all duration-300 hover:scale-[1.01] hover:shadow-xl hover:border-accent relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardHeader className="relative z-10">
                <Phone className="h-8 w-8 text-primary group-hover:text-accent transition-colors duration-300 group-hover:scale-110" />
                <CardTitle>{currentContent.language === "vn" ? "Điện thoại" : "Phone"}</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-muted-foreground text-base">{contact.info.phone}</p>
              </CardContent>
            </Card>
            <Card className="h-full shadow-lg transition-all duration-300 hover:scale-[1.01] hover:shadow-xl hover:border-accent relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardHeader className="relative z-10">
                <MapPin className="h-8 w-8 text-primary group-hover:text-accent transition-colors duration-300 group-hover:scale-110" />
                <CardTitle>{currentContent.language === "vn" ? "Địa chỉ" : "Address"}</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-muted-foreground text-base">{contact.info.address}</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
