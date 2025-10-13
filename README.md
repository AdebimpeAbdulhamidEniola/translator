# Translator

A small React + TypeScript + Vite app that demonstrates a simple client-side translator UI using the MyMemory free translation API. The app lets users enter text, select source/target languages, translate text, copy or speak the input, and swap translated results back into the input.

## Features

- Translate text using the MyMemory public API (client-side GET requests).
- Source and target language selection.
- Copy input text to clipboard.
- Speech synthesis (text-to-speech) for the input text.
- Swap translated text back into the input to re-translate or edit.

## Quick start

Requirements: Node.js (16+ recommended) and npm or an equivalent package manager.

1. Install dependencies

```powershell
cd "translator"
npm install
```

2. Run development server

```powershell
npm run dev
```

This starts Vite with hot module replacement. Open the app at http://localhost:5173 (Vite will print the exact URL).

3. Build for production

```powershell
npm run build
```

4. Preview the production build

```powershell
npm run preview
```

## Available scripts

- `dev` — start Vite dev server
- `build` — run TypeScript build and produce a production build with Vite
- `preview` — preview the built app locally
- `lint` — run ESLint across the project

Scripts are defined in `translator/package.json`.

## Project structure (important files)

- `translator/` — main app folder
  - `index.html` — entry HTML
  - `src/` — source files
    - `main.tsx` — app bootstrap
    - `App.tsx` — top-level component
    - `components/` — UI components (`InputPanel.tsx`, `OutputPanel.tsx`, `LanguageSelector.tsx`)
    - `store/TranslatorContext.tsx` — simple React context used to share state
    - `Types.ts` — language and API response types
  - `public/resources/` — static assets used by the UI (icons, images)
  - `vite.config.ts`, `tsconfig.*.json`, `eslint.config.js` — dev tooling and config

## Notes about the translation API

This project calls the MyMemory free translation API (https://api.mymemory.translated.net/) from the client. That API has usage limits and is not suitable for production use when high volume or guaranteed availability is required. For production, consider using a paid translation API with proper server-side proxying and authentication.

## Minor implementation details

- Text-to-speech uses the Web Speech API `SpeechSynthesisUtterance` and will only work in browsers that support it.
- Copy uses the legacy `document.execCommand('copy')` from a textarea; this could be upgraded to the modern Clipboard API for better compatibility in some environments.

## Contributing

Feel free to open issues or PRs. Suggestions:

- Add more languages and improve the language selector UX.
- Move translation requests to a server-side endpoint to hide API usage and add caching.
- Add tests and CI lint checks.

## License

This repository does not include an explicit license file. If you want to open-source it, add a `LICENSE` file (MIT, Apache-2.0, etc.).

---

If you want, I can also:

- Add badges (build/lint)
- Improve the contributor/developer setup section
- Add a small screenshot and usage GIF to the README

Tell me which extras you want and I will add them.

## Screenshots

Desktop view:

![Desktop screenshot](translator/public/screenshots/desktop.png)

Mobile view:

![Mobile screenshot](translator/public/screenshots/mobile.png)
