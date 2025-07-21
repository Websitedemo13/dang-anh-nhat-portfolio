"use client"

import { createContext, useContext, useState, type ReactNode, useEffect } from "react"
import { content, type PortfolioContent } from "@/lib/data"

type Language = "vn" | "en"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  currentContent: PortfolioContent
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("vn") // Default to Vietnamese

  useEffect(() => {
    // You could try to detect browser language or load from localStorage here
    const storedLang = localStorage.getItem("portfolio-lang") as Language
    if (storedLang && (storedLang === "vn" || storedLang === "en")) {
      setLanguage(storedLang)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("portfolio-lang", language)
  }, [language])

  const currentContent = content[language]

  return (
    <LanguageContext.Provider value={{ language, setLanguage, currentContent }}>{children}</LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
