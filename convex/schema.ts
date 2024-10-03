import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values"; // Import v for defining value types

export default defineSchema({
  onboarding: defineTable({
    fullname: v.string(),
    username: v.string(),
    email: v.string(),
    bio: v.string(),
    urls: v.array(v.string()), // Define array of strings
    occupations: v.array(
      v.object({
        occupation: v.string(),
        experience: v.number(),
        skills: v.array(v.string()), // Array of strings for skills
      })
    ),
    languages: v.array(
      v.object({
        language: v.string(),
        level: v.number(), // Assuming level is a numeric value
      })
    ),
  }),
  users: defineTable({
    tokenIdentifier: v.string(),
    email: v.string(),
    endsOn: v.optional(v.number()),
    subscriptionId: v.optional(v.string()),
})
    .index("by_token", ["tokenIdentifier"])
    .index("by_subscriptionId", ["subscriptionId"]),
});
