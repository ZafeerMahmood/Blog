import { PROFILE } from "@/constants/index";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
      },
    ],
    sitemap: `${PROFILE.DEPLOYMENT}/sitemap.xml`,
    host: PROFILE.DEPLOYMENT,
  };
}
