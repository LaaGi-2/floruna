// Application configuration
export const config = {
     app: {
          name: "Floruna",
          url: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
     },
     api: {
          baseUrl: process.env.NEXT_PUBLIC_API_URL || "/api",
     },
} as const;
