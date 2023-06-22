import { defineConfig } from "windicss/helpers"

export default defineConfig({
  extract: {
    include: [".vitepress/**/*.{vue,html,jsx,tsx}"]
  }
})
