module.exports = {
  reactStrictMode: true,
  env: {
    MAPBOX_KEY: process.env.MAPBOX_KEY,
    FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
    FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN,
    FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
    FIREBASE_STORAGE_BUCKET: process.env.FIREBASE_STORAGE_BUCKET,
    FIREBASE_MESSAGING_SENDER_ID: process.env.FIREBASE_MESSAGING_SENDER_ID,
    FIREBASE_APP_ID: process.env.FIREBASE_APP_ID,
  },
  images: {
    domains: [
      "randomuser.me",
      "pbs.twimg.com",
      "i.pinimg.com",
      "static.globalnoticias.pt",
      "eduportugal.eu",
      "ww3.aeje.pt",
      "api-assets.ua.pt",
      "reencontrosdemusicacontemporanea.pt",
      "www.zarllor.com",
      "www.teatroaveirense.pt",
      "lh3.googleusercontent.com",
      "3.bp.blogspot.com",
      "images.unsplash.com",
    ],
  },
};
