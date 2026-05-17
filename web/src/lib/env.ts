export const env = {
  APP_NAME: import.meta.env.VITE_APP_NAME as string,
  GITHUB_URL: import.meta.env.VITE_GITHUB_URL as string,
  X_URL: import.meta.env.VITE_X_URL as string,
  INSTAGRAM_URL: import.meta.env.VITE_INSTAGRAM_URL as string,
  DEV: import.meta.env.DEV as boolean,
  DEPLOY_URL: import.meta.env.VITE_DEPLOY_URL as string,
}
