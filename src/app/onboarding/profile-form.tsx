"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import occupations from "../onboarding/occupations";
import { useUser } from "@clerk/nextjs";
import { useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { Trash2 } from "lucide-react";

// Schema
const profileFormSchema = z.object({
  fullname: z.string().min(2, { message: "Full name must be at least 2 characters." }),
  username: z.string().min(2, { message: "Username must be at least 2 characters." }),
  email: z.string().email(),
  bio: z.string().max(160).min(4),
  urls: z.array(z.object({ value: z.string().url() })).optional(),
  occupations: z.array(
    z.object({
      occupation: z.string(),
      experience: z.number().min(1), // Ensure number is positive
      skills: z.array(z.string()),
    })
  ).optional(),
  languages: z.array(
    z.object({
      language: z.string(),
      level: z.number().min(1).max(3), // Ensure level is within 1-3 range
    })
  ).optional(),
});

type ProfileFormValues = {
  fullname: string;
  username: string;
  email: string;
  bio: string;
  urls: { value: string }[];
  occupations: { occupation: string; experience: number; skills: string[] }[];
  languages: { language: string; level: number }[];
};

// Language options
// const languages = [
//   "English", "Spanish", "French", "German", "Mandarin", "Arabic", "Hindi", "Japanese", "Russian",
// ];

export function ProfileForm() {
  const { user } = useUser();
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    mode: "onChange",
  });

  const submitOnboarding = useMutation(api.onboarding.submitOnboardingData);
  type OccupationField = {
    occupation: string;
    experience: number;
    skills: string[];
  };

  // State for dynamic fields
  const [occupationFields, setOccupationFields] = useState<OccupationField[]>([
    { occupation: "", experience: 1, skills: [] }
  ]);
  const [urlFields, setUrlFields] = useState([{ value: "" }]);
  // const [languageFields, setLanguageFields] = useState([{ language: "", level: 1 }]); // Default level is 1

  const onSubmit = async (data: ProfileFormValues) => {
    if (!user) {
      console.error("User is not authenticated.");
      return;
    }

    try {
      const formData = {
        ...data,
        userId: user.id,
        occupations: occupationFields,
        urls: urlFields,
        // languages: languageFields,
      };

      await submitOnboarding(formData);

      alert("Onboarding data submitted successfully!");
    } catch (error) {
      console.error("Error submitting onboarding data:", error);
    }
  };

  // Handlers to manage dynamic occupation fields
  const addOccupation = () => {
    setOccupationFields([...occupationFields, { occupation: "", experience: 1, skills: [] }]);
  };

  const deleteOccupation = (index: number) => {
    const updatedOccupations = occupationFields.filter((_, i) => i !== index);
    setOccupationFields(updatedOccupations);
  };

  type OccupationFieldKey = keyof OccupationField; // This will be 'occupation' | 'experience' | 'skills'

  const updateOccupation = (
    index: number,
    key: OccupationFieldKey,
    value: OccupationField[OccupationFieldKey] // Ensures the correct type is used for each key
  ) => {
    const updatedOccupations = [...occupationFields];
    
    updatedOccupations[index] = {
      ...updatedOccupations[index],
      [key]: value, // TypeScript now knows the value must match the key's type
    };
  
    setOccupationFields(updatedOccupations);
  };

  // Handlers for URL fields
  const addUrl = () => {
    setUrlFields([...urlFields, { value: "" }]);
  };

  const deleteUrl = (index: number) => {
    const updatedUrls = urlFields.filter((_, i) => i !== index);
    setUrlFields(updatedUrls);
  };

  const updateUrl = (index: number, value: string) => {
    const updatedUrls = [...urlFields];
    updatedUrls[index].value = value;
    setUrlFields(updatedUrls);
  };

  // Handlers for Language fields
  // const addLanguage = () => {
  //   setLanguageFields([...languageFields, { language: "", level: 1 }]);
  // };

  // const deleteLanguage = (index: number) => {
  //   const updatedLanguages = languageFields.filter((_, i) => i !== index);
  //   setLanguageFields(updatedLanguages);
  // };

  // type LanguageFieldKey = "language" | "level";

  // const updateLanguage = (index: number, key: LanguageFieldKey, value: any) => {
  //   const updatedLanguages = [...languageFields];
  //   updatedLanguages[index][key] = value;
  //   setLanguageFields(updatedLanguages);
  // };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 px-4 md:px-6 lg:px-8">
        {/* Full Name */}
        <FormField
          control={form.control}
          name="fullname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input {...form.register("fullname")} placeholder="John Doe" {...field} />
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
                <Input {...form.register("username")} placeholder="AdamTheFreelancer" {...field} />
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
                <Input {...form.register("email")} placeholder="example@example.com" {...field} />
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
                <Textarea {...form.register("bio")} placeholder="Talk about your skills and projects" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Occupations */}
        {occupationFields.map((field, index) => (
          <div key={index}>
            <FormItem className="flex flex-col md:flex-row gap-4">
              <FormLabel>Occupation</FormLabel>
              <Select
                onValueChange={(value) => updateOccupation(index, "occupation", value)}
                defaultValue={field.occupation}
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

              <Input
                type="number"
                placeholder="Experience in Years"
                value={field.experience}
                onChange={(e) => updateOccupation(index, "experience", Math.max(1, Number(e.target.value)))}
                className="w-full md:w-1/2"
              />

              {index > 0 && <Trash2 onClick={() => deleteOccupation(index)} />}
            </FormItem>

            <div
              className="flex flex-col md:flex-wrap mt-8"
              style={{  flexDirection: window.innerWidth < 768 ? "column" : "row" }}
            >
              {occupations
                .find((occ) => occ.category === field.occupation)?.skills
                .map((skill) => (
                  <label key={skill} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={field.skills.includes(skill as never)}
                      onChange={(e) => {
                        const isChecked = e.target.checked;
                        const updatedSkills = isChecked
                          ? [...field.skills, skill]
                          : field.skills.filter((s) => s !== skill);
                        updateOccupation(index, "skills", updatedSkills);
                      }}
                    />
                    <span>{skill}</span>
                  </label>
                ))}
            </div>
          </div>
        ))}

        <Button type="button" variant="outline" size="sm" className="mt-2" onClick={addOccupation}>
          Add Occupation
        </Button>

        {/* URLs */}
        {urlFields.map((field, index) => (
          <FormItem key={index}>
            <div className="flex gap-4">
              <div className="w-full">
                <FormLabel className={index !== 0 ? "sr-only" : ""}>URLs</FormLabel>
                <FormControl>
                  <Input
                    value={field.value}
                    onChange={(e) => updateUrl(index, e.target.value)}
                    className="w-full"
                  />
                </FormControl>
              </div>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => deleteUrl(index)}
                className="ml-4"
              >
                Delete
              </Button>
            </div>
          </FormItem>
        ))}

        <Button type="button" variant="outline" size="sm" className="mt-2" onClick={addUrl}>
          Add URL
        </Button>

        {/* Languages */}
        {/* {languageFields.map((field, index) => (
          <div key={index} className="flex flex-col md:flex-row justify-between items-center">
            <div className="w-full md:w-1/2">
              <FormLabel className={index !== 0 ? "sr-only" : ""}>Language</FormLabel>
              <Select
                onValueChange={(value) => updateLanguage(index, "language", value)}
                defaultValue={field.language}
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
                  className={`text-2xl ${star <= field.level ? "text-yellow-400" : "text-gray-300"}`}
                  onClick={() => updateLanguage(index, "level", star)}
                >
                  ★
                </button>
              ))}
            </div>

            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => deleteLanguage(index)}
              className="ml-4"
            >
              Delete
            </Button>
          </div>
        ))} */}

        {/* <Button type="button" variant="outline" size="sm" className="mt-2" onClick={addLanguage}>
          Add Language
        </Button> */}

        <Button type="submit" className="w-full md:w-auto">
          Submit
        </Button>
      </form>
    </Form>
  );
}
