"use client"

import { useEffect, useState, useRef } from "react"
import { useLanguage } from "@/components/language-provider"
import type { SectionKey } from "@/lib/data"

type UseActiveSectionReturn = SectionKey | null

export function useActiveSection(sectionIds: SectionKey[]): UseActiveSectionReturn {
  const [activeSection, setActiveSection] = useState<SectionKey | null>(null)
  const observerRef = useRef<IntersectionObserver | null>(null)
  const { language } = useLanguage() // Re-observe on language change

  useEffect(() => {
    if (observerRef.current) {
      observerRef.current.disconnect()
    }

    const observerOptions = {
      root: null, // viewport
      rootMargin: "-50% 0px -50% 0px", // Trigger when 50% of the section is in view
      threshold: 0,
    }

    const callback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id as SectionKey)
        }
      })
    }

    observerRef.current = new IntersectionObserver(callback, observerOptions)

    sectionIds.forEach((id) => {
      const element = document.getElementById(id)
      if (element) {
        observerRef.current?.observe(element)
      }
    })

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [sectionIds, language]) // Re-run effect if sectionIds or language changes

  return activeSection
}
