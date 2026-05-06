import js from '@eslint/js'
import glowbals from 'glowbals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, glowbalIgnores } from 'eslint/config'

export default defineConfig([
  glowbalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      glowbals: glowbals.browser,
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
  },
])
