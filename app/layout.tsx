import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/components/language-provider"
import { cn } from "@/lib/utils"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Đặng Anh Nhật - Portfolio Marketing",
  description: "Portfolio chuyên nghiệp của Đặng Anh Nhật, chuyên gia Marketing và Truyền thông.",
    generator: 'Long',
  applicationName: "Đặng Anh Nhật - Portfolio Marketing",
  keywords: [
    "Đặng Anh Nhật",
    "Marketing",
    "Truyền thông",
    "Portfolio",
    "Chuyên gia Marketing",   
    "Chuyên gia Truyền thông",
    "Chuyên gia Digital Marketing",
    "Chuyên gia Content Marketing",
    "Chuyên gia Social Media",
    "Chuyên gia SEO",
    "Chuyên gia Quảng cáo",
    "Chuyên gia Phân tích dữ liệu",
    "Chuyên gia Chiến lược Marketing",
    "Chuyên gia Tư vấn Marketing",
    "Chuyên gia Tư vấn Truyền thông",
    "Chuyên gia Tư vấn Digital Marketing",
    "Chuyên gia Tư vấn Content Marketing",
    "Chuyên gia Tư vấn Social Media",]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased", inter.className)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
