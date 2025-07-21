"use client"

import { useLanguage } from "@/components/language-provider"
import { motion } from "framer-motion"
import { UserCheck, Lightbulb } from "lucide-react"

export function AboutSection() {
  const { currentContent } = useLanguage()
  const { about } = currentContent

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section
      id="about"
      className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-background to-secondary/5 scroll-mt-20"
    >
      <div className="container px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.1 }}
          className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center"
        >
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl flex items-center gap-2 text-secondary">
              <UserCheck className="h-8 w-8 text-primary" />
              {about.title}
            </h2>
            {about.description.map((paragraph, index) => (
              <motion.p
                key={index}
                variants={itemVariants}
                className="text-muted-foreground md:text-lg leading-relaxed"
              >
                {paragraph}
              </motion.p>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex justify-center items-center relative"
          >
            <div className="relative h-64 w-64 rounded-full bg-primary/20 flex items-center justify-center animate-pulse-slow">
              <Lightbulb className="h-32 w-32 text-primary opacity-50" />
            </div>
            <motion.div
              className="absolute top-1/4 left-1/4 h-16 w-16 bg-accent/30 rounded-full filter blur-xl animate-float"
              animate={{ x: [0, 20, 0], y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute bottom-1/4 right-1/4 h-20 w-20 bg-secondary/30 rounded-full filter blur-xl animate-float"
              animate={{ x: [0, -20, 0], y: [0, 10, 0] }}
              transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.5 }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
