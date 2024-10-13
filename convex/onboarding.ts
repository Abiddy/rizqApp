import { mutation } from "./_generated/server";

type OnboardingData = {
  userId: string;
  fullname: string;
  username: string;
  email: string;
  bio: string;
  urls: { value: string }[];
  occupations: { occupation: string; experience: number; skills: string[] }[];
  languages: { language: string; level: number }[];
};

export const submitOnboardingData = mutation({
  // Define the handler for the mutation
  handler: async ({ db }, formData: OnboardingData) => {
    // Destructure form data with default values for optional fields
    const {
      userId,
      fullname,
      username,
      email,
      bio,
      urls = [],
      occupations = [],
      languages = []
    } = formData;

    // Insert form data into the onboarding table
    await db.insert("onboarding", {
      fullname,
      username,
      email,
      bio,
      urls: urls.map((urlObj: { value: string }) => urlObj.value), // Extract URL values
      occupations: occupations.map((occupationObj: { occupation: string, experience: number, skills: string[] }) => ({
        occupation: occupationObj.occupation,
        experience: occupationObj.experience,
        skills: occupationObj.skills
      })),
      languages: languages.map((languageObj: { language: string, level: number }) => ({
        language: languageObj.language,
        level: languageObj.level,
      })),
      userId, // Include the Clerk user ID
    });

    // Return success response
    return { success: true };
  },
});
