// Public links; explicit overrides support an isolated local recipe at build time.
// https://docs.astro.build/en/guides/environment-variables/
const app = new URL(import.meta.env.PUBLIC_APP_URL || "https://app.najahai.com.au");
if (app.username || app.password || app.search || app.hash || app.pathname !== "/" ||
    (app.protocol !== "https:" && !(app.protocol === "http:" && ["localhost", "127.0.0.1", "[::1]"].includes(app.hostname)))) {
  throw new Error("Invalid public application URL");
}
export const APP_URL = app.origin;
export const BETA_GUIDE_URL = "/beta";
const archive = new URL(import.meta.env.PUBLIC_BETA_ZIP_URL || "/static/downloads/najah-ai-beta.zip", APP_URL);
if (archive.origin !== APP_URL || archive.username || archive.password || archive.search || archive.hash || !archive.pathname.endsWith(".zip")) {
  throw new Error("Beta ZIP must be hosted by the configured application");
}
export const BETA_ZIP_URL = archive.href;
export const SUPPORT_EMAIL = "bachirdiaw56100@gmail.com";
export const OPERATOR_NAME = "Bachir Diaw";
