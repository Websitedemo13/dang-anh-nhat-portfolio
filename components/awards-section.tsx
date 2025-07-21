"use client"

import { useLanguage } from "@/components/language-provider"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Trophy, Medal } from "lucide-react"

export function AwardsSection() {
  const { currentContent } = useLanguage()
  const { awards } = currentContent

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
      id="awards"
      className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-background to-secondary/5 scroll-mt-20"
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
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary"
          >
            {awards.title}
          </motion.h2>
          <motion.p variants={itemVariants} className="max-w-[700px] text-muted-foreground md:text-xl">
            {currentContent.language === "vn"
              ? "Những thành tựu và giải thưởng tôi đã đạt được, minh chứng cho sự nỗ lực và tài năng."
              : "My achievements and awards, a testament to my effort and talent."}
          </motion.p>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="mt-12 grid gap-6 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3"
        >
          {awards.items.map((award, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:border-primary relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative z-10">
                  <div>
                    <CardTitle className="text-lg font-semibold">{award.name}</CardTitle>
                    {award.year && <p className="text-sm text-muted-foreground">{award.year}</p>}
                  </div>
                  {index % 2 === 0 ? (
                    <Trophy className="h-6 w-6 text-primary group-hover:text-accent transition-colors duration-300 group-hover:scale-110" />
                  ) : (
                    <Medal className="h-6 w-6 text-primary group-hover:text-accent transition-colors duration-300 group-hover:scale-110" />
                  )}
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-sm text-muted-foreground">
                    {currentContent.language === "vn" ? "Thành tích nổi bật." : "Notable achievement."}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
