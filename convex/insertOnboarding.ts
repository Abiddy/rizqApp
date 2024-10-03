// import { mutation } from "./_generated/server";

// // Define the mutation to insert onboarding data
// export const insert = mutation({
//   // Define the arguments structure based on your form fields
//   args: {
//     fullname: s.string(),
//     username: s.string(),
//     email: s.string(),
//     bio: s.string().optional(),
//     urls: s.array(s.string()).optional(),
//     languages: s.array(
//       s.object({
//         language: s.string(),
//         level: s.number(),
//       })
//     ).optional(),
//   },
//   // Handler function to insert the data into the "onboarding" table
//   handler: async (ctx, { fullname, username, email, bio, urls, languages }) => {
//     // Insert the data into the onboarding table
//     await ctx.db.insert("onboarding", {
//       fullname,
//       username,
//       email,
//       bio: bio || "", // Handle optional field
//       urls: urls || [], // Handle optional array
//       languages: languages || [], // Handle optional array
//       createdAt: new Date(), // Optionally, add a timestamp
//     });
//   },
// });
