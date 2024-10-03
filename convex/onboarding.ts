import { query } from "./_generated/server";

export const getOnboarding = query(async ({ db }) => {
  return await db.query("onboarding").collect();
});
