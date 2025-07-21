"use client"

import { useLanguage } from "@/components/language-provider"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useState } from "react"
import type { Experience } from "@/lib/data"
import { motion } from "framer-motion"
import { Briefcase, Users } from "lucide-react"

export function ExperienceSection() {
  const { currentContent } = useLanguage()
  const { experience } = currentContent
  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleCardClick = (exp: Experience) => {
    setSelectedExperience(exp)
    setIsModalOpen(true)
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
    <section id="experience" className="w-full bg-muted py-12 md:py-24 lg:py-32 scroll-mt-20">
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
            {experience.title}
          </motion.h2>
          <motion.p variants={itemVariants} className="max-w-[700px] text-muted-foreground md:text-xl">
            {currentContent.language === "vn"
              ? "Các kinh nghiệm làm việc và dự án/hoạt động tình nguyện nổi bật, thể hiện sự đa năng và nhiệt huyết."
              : "My professional experience and notable projects/volunteer activities, showcasing versatility and passion."}
          </motion.p>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="mt-12 grid gap-6 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3"
        >
          {experience.items.map((exp, index) => {
            const Icon = exp.type === "experience" ? Briefcase : Users
            return (
              <motion.div key={index} variants={itemVariants}>
                <Card
                  className="group h-full cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:border-accent relative overflow-hidden"
                  onClick={() => handleCardClick(exp)}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative z-10">
                    <div>
                      <CardTitle className="group-hover:text-accent transition-colors duration-300 text-lg font-semibold">
                        {exp.title}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground">{exp.company}</p>
                      <p className="text-xs text-muted-foreground">{exp.period}</p>
                    </div>
                    <Icon className="h-6 w-6 text-accent group-hover:text-primary transition-colors duration-300 group-hover:scale-110" />
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <ul className="list-disc pl-5 text-sm text-muted-foreground">
                      {exp.description.slice(0, 2).map((desc, i) => (
                        <li key={i}>{desc}</li>
                      ))}
                      {exp.description.length > 2 && (
                        <li className="font-semibold text-primary group-hover:text-accent transition-colors duration-300">
                          {currentContent.language === "vn" ? "Xem thêm..." : "Read more..."}
                        </li>
                      )}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>

        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="sm:max-w-[800px] bg-card border-border">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-primary">{selectedExperience?.title}</DialogTitle>
              <DialogDescription className="text-muted-foreground">
                {selectedExperience?.company} | {selectedExperience?.period}
              </DialogDescription>
            </DialogHeader>
            <div className="py-4 max-h-[60vh] overflow-y-auto">
              <ul className="list-disc space-y-2 pl-5 text-base text-foreground">
                {selectedExperience?.description.map((desc, index) => (
                  <li key={index}>{desc}</li>
                ))}
              </ul>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
