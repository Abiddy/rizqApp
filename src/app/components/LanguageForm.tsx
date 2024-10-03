"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const languages = [
  "English", "Spanish", "French", "German", "Mandarin", "Arabic", "Hindi", "Japanese", "Russian",
  // Add more languages as needed
]

export function LanguageForm() {
  // Array to store multiple languages and their levels
  const [languageLevels, setLanguageLevels] = useState([{ language: "", level: 0 }])

  const handleLanguageChange = (index: number, value: string) => {
    const newLanguageLevels = [...languageLevels]
    newLanguageLevels[index].language = value
    setLanguageLevels(newLanguageLevels)
  }

  const handleStarClick = (index: number, value: number) => {
    const newLanguageLevels = [...languageLevels]
    newLanguageLevels[index].level = value
    setLanguageLevels(newLanguageLevels)
  }

  const addNewLanguage = () => {
    setLanguageLevels([...languageLevels, { language: "", level: 0 }])
  }

  return (
    <form className="space-y-8">
      {/* Render each language and its corresponding level */}
      {languageLevels.map((languageLevel, index) => (
        <div key={index} className="flex justify-between items-center mb-4">
          {/* Language Dropdown */}
          <div className="w-1/2">
            <label className="block text-sm font-medium mb-2">Language</label>
            <Select onValueChange={(value) => handleLanguageChange(index, value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select Language" />
              </SelectTrigger>
              <SelectContent>
                {languages.map((lang) => (
                  <SelectItem key={lang} value={lang}>
                    {lang}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Star Rating */}
          <div className="flex items-center">
            <label className="block text-sm font-medium mr-4">Level</label>
            {[1, 2, 3].map((star) => (
              <button
                type="button"
                key={star}
                className={`text-2xl ${star <= languageLevel.level ? "text-yellow-400" : "text-gray-300"}`}
                onClick={() => handleStarClick(index, star)}
              >
                ★
              </button>
            ))}
          </div>
        </div>
      ))}

      {/* Add New Language Button */}
      <Button type="button" variant="outline" onClick={addNewLanguage}>
        Add New Language
      </Button>
    </form>
  )
}
