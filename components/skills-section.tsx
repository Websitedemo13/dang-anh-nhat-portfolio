"use client"

import type React from "react"

import { useLanguage } from "@/components/language-provider"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Brain, TrendingUp, Video, Megaphone, Code, Palette, Zap } from "lucide-react"

const iconMap: { [key: string]: React.ElementType } = {
  "Kỹ năng văn phòng": Brain,
  "Office Skills": Brain,
  "Kỹ năng chỉnh sửa video": Video,
  "Video Editing Skills": Video,
  "Kỹ năng Marketing & Truyền thông": Megaphone,
  "Marketing & Communication Skills": Megaphone,
  "Sử dụng AI vào môi trường làm việc": Zap, // New icon for AI skill
  "Using AI in the workplace": Zap,
  "Lập kế hoạch và viết bài truyền thông": Palette, // New icon for planning
  "Planning and writing communication articles": Palette,
  "Xử lý khủng hoảng truyền thông": Code, // Placeholder, could be better
  "Crisis communication management": Code,
  // Fallback icon
  Default: TrendingUp,
}

export function SkillsSection() {
  const { currentContent } = useLanguage()
  const { skills } = currentContent

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
    <section id="skills" className="w-full bg-muted py-12 md:py-24 lg:py-32 scroll-mt-20">
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
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary"
          >
            {skills.title}
          </motion.h2>
          <motion.p variants={itemVariants} className="max-w-[700px] text-muted-foreground md:text-xl">
            {currentContent.language === "vn"
              ? "Các kỹ năng chuyên môn và công cụ tôi sử dụng để tạo ra các chiến dịch đột phá."
              : "My professional skills and tools I use to create breakthrough campaigns."}
          </motion.p>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {skills.categories.map((category, index) => {
            const Icon = iconMap[category.name] || TrendingUp
            return (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:border-primary relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative z-10">
                    <CardTitle className="text-lg font-semibold">{category.name}</CardTitle>
                    <Icon className="h-6 w-6 text-primary group-hover:text-accent transition-colors duration-300 group-hover:scale-110" />
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <ul className="space-y-2">
                      {category.items.map((skill, skillIndex) => (
                        <li key={skillIndex} className="flex items-center justify-between text-sm">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-muted-foreground">{skill.level}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
