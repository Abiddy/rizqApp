"use client"

import { useFieldArray, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormDescription,
} from "@/components/ui/form"
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select"
import occupations from "../onboarding/occupations"

const profileFormSchema = z.object({
  fullname: z.string().min(2, { message: "Full name must be at least 2 characters." }),
  username: z.string().min(2, { message: "Username must be at least 2 characters." }),
  email: z.string().email(),
  bio: z.string().max(160).min(4),
  urls: z
    .array(
      z.object({
        value: z.string().url({ message: "Please enter a valid URL." }),
      })
    )
    .optional(),
  languages: z
    .array(
      z.object({
        language: z.string(),
        level: z.number(),
      })
    )
    .optional(),
  occupations: z
    .array(
      z.object({
        occupation: z.string(),
        experience: z.number(),
        skills: z.array(z.string()).min(2, { message: "Choose at least two skills." }),
      })
    )
    .optional(),
})

type ProfileFormValues = z.infer<typeof profileFormSchema>

// Language options
const languages = [
  "English", "Spanish", "French", "German", "Mandarin", "Arabic", "Hindi", "Japanese", "Russian",
]

export function ProfileForm({ onNext }: { onNext: (data: ProfileFormValues) => void }) {
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    mode: "onChange",
  })

  const { fields, append } = useFieldArray({
    name: "urls",
    control: form.control,
  })

  const { fields: languageFields, append: appendLanguage } = useFieldArray({
    name: "languages",
    control: form.control,
  })

  const { fields: occupationFields, append: appendOccupation } = useFieldArray({
    name: "occupations",
    control: form.control,
  })

  function onSubmit(data: ProfileFormValues) {
    onNext(data) // Move to the next step with the form data
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {/* Full Name */}
        <FormField
          control={form.control}
          name="fullname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Username */}
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="AdamTheFreelancer" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Email */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="example@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Bio */}
        <FormField
          control={form.control}
          name="bio"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Bio</FormLabel>
              <FormControl>
                <Textarea placeholder="Talk about your skills and projects" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Occupations */}
        <div>
          {occupationFields.map((field, index) => (
            <FormField
              control={form.control}
              key={field.id}
              name={`occupations.${index}`}
              render={({ field }) => (
                <FormItem className="space-y-4">
                  <FormLabel className={index !== 0 ? "sr-only" : ""}>Occupation</FormLabel>
                  <div className="flex gap-4">
                    <Select
                      onValueChange={(value) => field.onChange({ ...field.value, occupation: value })}
                      defaultValue={field.value.occupation}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select Occupation" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="bg-white z-50">
                        {occupations.map((occ) => (
                          <SelectItem key={occ.category} value={occ.category}>
                            {occ.category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    {/* Year Selection */}
                    <Input
                        type="number"
                        placeholder="Experience in Years"
                        value={field.value.experience} // Ensure only the `experience` field is used
                        onChange={(e) => field.onChange({ ...field.value, experience: e.target.value })} // Handle change correctly
                        name={`occupations.${index}.experience`}
                        />
                  </div>

                  <div className="space-y-2">
                    {occupations
                        .find((occ) => occ.category === field.value.occupation)?.skills
                        .map((skill) => (
                        <label key={skill} className="flex items-center space-x-2">
                            <input
                            type="checkbox"
                            {...field} // Spread all necessary field props from useFieldArray
                            name={`occupations.${index}.skills`}
                            value={skill} // Correctly pass the value of the skill
                            />
                            <span>{skill}</span>
                        </label>
                        ))}
                    </div>
                </FormItem>
              )}
            />
          ))}
          <Button type="button" variant="outline" size="sm" className="mt-2" onClick={() => appendOccupation({ occupation: "", experience: 0, skills: [] })}>
            Add Occupation
          </Button>
        </div>

        {/* URLs */}
        <div>
          {fields.map((field, index) => (
            <FormField
              control={form.control}
              key={field.id}
              name={`urls.${index}.value`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className={index !== 0 ? "sr-only" : ""}>URLs</FormLabel>
                  <FormDescription className={index !== 0 ? "sr-only" : ""}>
                    Add links to your website, blog, or social media profiles.
                  </FormDescription>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}
          <Button type="button" variant="outline" size="sm" className="mt-2" onClick={() => append({ value: "" })}>
            Add URL
          </Button>
        </div>

        {/* Languages */}
        <div>
          {languageFields.map((field, index) => (
            <FormField
              control={form.control}
              key={field.id}
              name={`languages.${index}`}
              render={({ field }) => (
                <FormItem className="flex justify-between items-center">
                  <div className="w-1/2">
                    <FormLabel className={index !== 0 ? "sr-only" : ""}>Language</FormLabel>
                    <Select
                      onValueChange={(value) => field.onChange({ ...field.value, language: value })}
                      defaultValue={field.value.language}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select Language" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="bg-white z-50">
                        {languages.map((lang) => (
                          <SelectItem key={lang} value={lang}>
                            {lang}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-center">
                    <FormLabel className="mr-4">Level</FormLabel>
                    {[1, 2, 3].map((star) => (
                      <button
                        type="button"
                        key={star}
                        className={`text-2xl ${star <= field.value.level ? "text-yellow-400" : "text-gray-300"}`}
                        onClick={() => field.onChange({ ...field.value, level: star })}
                      >
                        ★
                      </button>
                    ))}
                  </div>
                </FormItem>
              )}
            />
          ))}
          <Button type="button" variant="outline" size="sm" className="mt-2" onClick={() => appendLanguage({ language: "", level: 0 })}>
            Add Language
          </Button>
        </div>

        <Button type="submit">Next</Button>
      </form>
    </Form>
  )
}
