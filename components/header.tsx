"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Moon, Sun, Menu, Globe, Download, Sparkles } from "lucide-react"
import { useTheme } from "next-themes"
import { useLanguage } from "@/components/language-provider"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { motion } from "framer-motion"
import { useActiveSection } from "@/hooks/use-active-section" // Import the new hook

export function Header() {
  const { setTheme, theme } = useTheme()
  const { language, setLanguage, currentContent } = useLanguage()
  const { navLinks, hero } = currentContent

  const sectionIds = navLinks.map((link) => link.href.substring(1)) as (
    | "about"
    | "skills"
    | "education"
    | "experience"
    | "awards"
    | "goals"
    | "contact"
  )[]
  const activeSection = useActiveSection(sectionIds)

  const handleDownloadCV = () => {
    window.location.href = "/api/download-cv" // Call the API route for direct download
  }

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-md shadow-lg"
    >
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <Sparkles className="h-6 w-6 text-primary animate-pulse" />
          <span className="text-lg font-bold text-primary animate-text-glow">Đặng Anh Nhật</span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-all duration-300 hover:text-primary hover:scale-105 hover:underline underline-offset-4 ${
                activeSection === link.href.substring(1) ? "text-accent font-bold underline" : "text-foreground"
              }`}
              prefetch={false}
            >
              {link.name}
            </Link>
          ))}
          <Button
            variant="outline"
            onClick={handleDownloadCV}
            className="group bg-transparent hover:bg-primary/10 border-primary text-primary hover:text-primary-foreground transition-all duration-300"
          >
            <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
            {hero.cta.downloadCV}
          </Button>
          <Link href="#contact">
            <Button className="group bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300">
              {hero.cta.contactMe}
              <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
            </Button>
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="hover:bg-accent/10 text-accent">
                <Globe className="h-[1.2rem] w-[1.2rem]" />
                <span className="sr-only">Toggle language</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-card border-border">
              <DropdownMenuItem onClick={() => setLanguage("vn")}>Tiếng Việt</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLanguage("en")}>English</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="hover:bg-accent/10 text-accent">
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-card border-border">
              <DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>System</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-background/95 backdrop-blur-md">
            <div className="grid gap-4 py-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex w-full items-center py-2 text-lg font-semibold hover:text-primary ${
                    activeSection === link.href.substring(1) ? "text-accent font-bold" : "text-foreground"
                  }`}
                  prefetch={false}
                >
                  <link.icon className="mr-2 h-5 w-5 text-primary" />
                  {link.name}
                </Link>
              ))}
              <Button
                variant="outline"
                onClick={handleDownloadCV}
                className="w-full bg-transparent group hover:bg-primary/10 border-primary text-primary hover:text-primary-foreground"
              >
                <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                {hero.cta.downloadCV}
              </Button>
              <Link href="#contact" className="w-full">
                <Button className="w-full group bg-primary text-primary-foreground hover:bg-primary/90">
                  {hero.cta.contactMe}
                  <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                </Button>
              </Link>
              <div className="flex items-center justify-between pt-4">
                <span className="text-lg font-semibold">Language</span>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="text-accent">
                      <Globe className="h-[1.2rem] w-[1.2rem]" />
                      <span className="sr-only">Toggle language</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="bg-card border-border">
                    <DropdownMenuItem onClick={() => setLanguage("vn")}>Tiếng Việt</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setLanguage("en")}>English</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-lg font-semibold">Theme</span>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="text-accent">
                      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                      <span className="sr-only">Toggle theme</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="bg-card border-border">
                    <DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setTheme("system")}>System</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  )
}
