import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://benabdurrehman.com",
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 1,
    },
    // Example: if you add more pages later, add them like this:
    // {
    //   url: "https://benabdurrehman.com/about",
    //   lastModified: new Date().toISOString(),
    //   changeFrequency: "monthly",
    //   priority: 0.7,
    // },
  ];
}
