"use client"

import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { EducationSection } from "@/components/education-section"
import { ExperienceSection } from "@/components/experience-section"
import { AwardsSection } from "@/components/awards-section"
import { GoalsSection } from "@/components/goals-section"
import { ContactSection } from "@/components/contact-section"
import { useLanguage } from "@/components/language-provider"
import { motion } from "framer-motion"
import { Chatbot } from "@/components/chatbot"
import { Toaster } from "@/components/ui/toaster"
import { Linkedin, Facebook, Instagram } from "lucide-react"
import Link from "next/link"

export default function Home() {
  const { currentContent } = useLanguage()

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <EducationSection />
        <ExperienceSection />
        <AwardsSection />
        <GoalsSection />
        <ContactSection />
      </main>
      <motion.footer
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="flex flex-col gap-4 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-border/50 bg-muted/80 backdrop-blur-sm rounded-t-xl"
      >
        <div className="flex flex-col sm:flex-row items-center gap-2">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Đặng Anh Nhật. All rights reserved.
          </p>
          <span className="hidden sm:inline-block text-muted-foreground">|</span>
          <p className="text-xs text-muted-foreground">
            {currentContent.language === "vn" ? "Được xây dựng bởi" : "Built by"}{" "}
            <a
              href="https://quachthanhlong.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              StephenSouth13
            </a>
          </p>
        </div>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            href="https://www.linkedin.com/in/dang-anh-nhat"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </Link>
          <Link
            href="https://www.facebook.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
            aria-label="Facebook"
          >
            <Facebook className="h-5 w-5" />
          </Link>
          <Link
            href="https://www.instagram.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
            aria-label="Instagram"
          >
            <Instagram className="h-5 w-5" />
          </Link>
        </nav>
      </motion.footer>
      <Chatbot />
      <Toaster />
    </div>
  )
}
