export const siteDetails = {
    // Basic Site Identity
    companyName: "EatX",
    siteName: "EatX - Restaurant Technology Solutions",
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://youreatxdomain.com",
    
    // Core Metadata
    metadata: {
      title: "EatX | Next-Gen POS & Online Ordering System",
      description: "Transform your restaurant operations with EatX's all-in-one POS and web ordering solutions. Boost sales and streamline service.",
      keywords: [
        "restaurant POS",
        "online ordering system",
        "EatX software",
        "food delivery solutions",
        "restaurant management"
      ] as string[],
    },
  
    // Technical SEO
    language: "en-us",
    locale: "en-US",
    timezone: "America/New_York",
  
    // Brand Assets
    // logo: {
    //   light: "/images/logo-light.png",
    //   dark: "/images/logo-dark.png",
    //   alt: "EatX Logo",
    //   width: 180,
    //   height: 40
    // },
  
    // Social Profiles
    // socialLinks: {
    //   twitter: "https://twitter.com/eatxsoftware",
    //   facebook: "https://facebook.com/eatxsoftware",
    //   linkedin: "https://linkedin.com/company/eatx"
    // },
  
    // Verification & Analytics
    // verification: {
    //   google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
    //   bing: process.env.NEXT_PUBLIC_BING_VERIFICATION
    // },
    // googleAnalyticsId: process.env.NEXT_PUBLIC_GA_ID,
  
    // Contact Info (for schema markup)
    contact: {
      email: "support@eatx.com",
      phone: "+1-800-EATX-NOW",
      address: {
        street: "123 Tech Park Drive",
        city: "Austin",
        state: "TX",
        zip: "78701",
        country: "USA"
      }
    }
  } as const;
  
  // Helper types for TypeScript
  export type SiteDetails = typeof siteDetails;
  export type MetadataConfig = typeof siteDetails.metadata;