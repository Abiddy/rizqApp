import { mutation } from "./_generated/server";
import { v } from "convex/values"; // Import v for defining value types

export const submitOnboardingData = mutation({
  // Define the arguments expected by the mutation
  args: {
    userId: v.string(),
    fullname: v.string(),
    username: v.string(),
    email: v.string(),
    bio: v.string(),
    urls: v.optional(v.array(v.string())), // Optional array of strings for URLs
    occupations: v.optional(
      v.array(
        v.object({
          occupation: v.string(),
          experience: v.number(),
          skills: v.array(v.string()), // Array of strings for skills
        })
      )
    ),
    languages: v.optional(
      v.array(
        v.object({
          language: v.string(),
          level: v.number(),
        })
      )
    ),
  },

  // The handler function
  handler: async (ctx, args) => {
    // Insert the form data into the onboarding table
    const newOnboardingId = await ctx.db.insert("onboarding", {
      userId: args.userId,
      fullname: args.fullname,
      username: args.username,
      email: args.email,
      bio: args.bio,
      urls: args.urls || [], // If URLs are undefined, default to an empty array
      occupations: args.occupations || [], // Default to an empty array if undefined
      languages: args.languages || [], // Default to an empty array if undefined
    });

    return newOnboardingId; // Return the ID of the newly created record
  },
});
