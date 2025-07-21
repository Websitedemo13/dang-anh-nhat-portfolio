"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Download, Sparkles } from "lucide-react"

export function HeroSection() {
  const { currentContent } = useLanguage()
  const { hero } = currentContent

  const handleDownloadCV = () => {
    window.location.href = "/api/download-cv" // Call the API route for direct download
  }

  return (
    <section
      id="hero"
      className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center overflow-hidden bg-gradient-to-br from-primary/10 via-secondary/10 to-background py-12 md:py-24 lg:py-32 scroll-mt-20"
    >
      <div className="container relative z-10 px-4 text-center md:px-6">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="relative h-64 w-64 overflow-hidden rounded-full shadow-2xl md:h-80 md:w-80 lg:h-96 lg:w-96 animate-pulse-glow"
            >
              <Image
                src="/nhat-profile.png"
                alt="Đặng Anh Nhật Profile"
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-500 hover:scale-105"
              />
              <div
                className="absolute inset-0 rounded-full ring-4 ring-primary/50 animate-border-spin"
                style={{ "--speed": "5s" } as React.CSSProperties}
              ></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Sparkles className="h-24 w-24 text-accent opacity-70 animate-sparkle-fade" />
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-4 text-center lg:text-left"
          >
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none animate-text-glow">
              {hero.title}
            </h1>
            <p className="mx-auto max-w-[700px] text-lg text-muted-foreground md:text-xl lg:mx-0">{hero.subtitle}</p>
            <p className="mx-auto max-w-[800px] text-base text-muted-foreground md:text-lg lg:mx-0">
              {hero.description}
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <Button
                onClick={handleDownloadCV}
                className="px-8 py-3 text-lg bg-transparent group hover:bg-primary/10 border-primary text-primary hover:text-primary-foreground transition-all duration-300"
                variant="outline"
              >
                <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                {hero.cta.downloadCV}
              </Button>
              <Link href="#contact">
                <Button className="px-8 py-3 text-lg group bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300">
                  {hero.cta.contactMe}
                  <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
      {/* Subtle background animation */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "radial-gradient(circle at 50% 50%, var(--primary-foreground) 0%, transparent 70%)",
          opacity: 0.05,
        }}
      />
    </section>
  )
}
