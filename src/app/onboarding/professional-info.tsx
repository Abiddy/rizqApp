"use client"

import { useState } from "react"
import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"

// Example occupations and skills
const occupations = [
  {
    category: "Digital Marketing",
    skills: [
      "Affiliate Marketing", "Crowdfunding", "Email Marketing", "Local SEO", "Public Relations",
    ],
  },
  {
    category: "Business",
    skills: [
      "Business Consulting", "Customer Care", "Event Management", "HR Consulting", "Market Research",
    ],
  },
  {
    category: "Programming & Tech",
    skills: [
      "AI Applications", "DevOps & Cloud", "Mobile Apps", "Web Programming", "User Testing",
    ],
  },
]

const professionalInfoSchema = z.object({
  profession: z.string().min(1, { message: "Profession must be selected." }),
  skills: z
    .array(z.string())
    .min(2, { message: "You must select at least 2 skills." })
    .max(5, { message: "You can select up to 5 skills." }),
})

type ProfessionalInfoValues = z.infer<typeof professionalInfoSchema>

export function ProfessionalInfoForm({ onSubmit }: { onSubmit: (data: ProfessionalInfoValues) => void }) {
  const [selectedProfession, setSelectedProfession] = useState<string | null>(null)
  const form = useForm<ProfessionalInfoValues>({
    resolver: zodResolver(professionalInfoSchema),
    mode: "onChange",
  })

  const handleProfessionChange = (value: string) => {
    setSelectedProfession(value)
    form.setValue("skills", []) // Reset selected skills when the profession changes
  }

  function handleSubmit(data: ProfessionalInfoValues) {
    onSubmit(data)
  }

  const availableSkills = occupations.find(occ => occ.category === selectedProfession)?.skills || []

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
        {/* Profession Dropdown */}
        <FormField
          control={form.control}
          name="profession"
          render={({  }) => (
            <FormItem>
              <FormLabel>Profession</FormLabel>
              <FormControl>
                <Select onValueChange={handleProfessionChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a profession" />
                  </SelectTrigger>
                  <SelectContent>
                    {occupations.map((occupation) => (
                      <SelectItem key={occupation.category} value={occupation.category}>
                        {occupation.category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Skills Checkboxes */}
        {selectedProfession && (
          <FormField
            control={form.control}
            name="skills"
            render={() => (
              <FormItem>
                <FormLabel>Select Skills</FormLabel>
                <FormControl>
                  <div className="grid grid-cols-2 gap-4">
                    {availableSkills.map((skill) => (
                      <div key={skill} className="flex items-center">
                        <Controller
                          name="skills"
                          control={form.control}
                          render={({ field }) => (
                            <input
                              type="checkbox"
                              value={skill}
                              checked={field.value.includes(skill)}
                              onChange={(e) => {
                                const newSkills = e.target.checked
                                  ? [...field.value, skill]
                                  : field.value.filter((s) => s !== skill)
                                field.onChange(newSkills)
                              }}
                              className="mr-2"
                            />
                          )}
                        />
                        <label>{skill}</label>
                      </div>
                    ))}
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}

        {/* Submit Button */}
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
