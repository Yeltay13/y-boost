# Y-Boost Website

A multilingual website for Y-Boost English coaching services, built with Astro.

## Features

- 🌍 **Multilingual Support**: English and Russian languages
- 📱 **Responsive Design**: Works on all devices
- ⚡ **Fast Performance**: Built with Astro for optimal speed
- 🎨 **Modern UI**: Clean and professional design

## Language Support

The website supports two languages:

- **English**: Available at `/en`
- **Russian**: Available at `/ru`

### Language Switching

Users can switch between languages using the language selector in the navigation bar. The language switcher automatically detects the current language and provides options to switch to the other language.

## Development

### Prerequisites

- Node.js >= 18.14.1
- npm or yarn

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

### Build

```bash
npm run build
```

## Internationalization Structure

The internationalization is implemented using Astro's built-in i18n support:

- **Configuration**: `astro.config.mjs` - i18n settings
- **Translations**: `src/i18n/ui.ts` - All text content in both languages
- **Pages**:
  - `src/pages/en/index.astro` - English version
  - `src/pages/ru/index.astro` - Russian version
  - `src/pages/index.astro` - Redirects to English version
- **Components**: All components use the translation system

### Adding New Content

To add new text content:

1. Add the English translation to `src/i18n/ui.ts` in the `en` object
2. Add the Russian translation to `src/i18n/ui.ts` in the `ru` object
3. Use the translation key in your component with `{t('your.key')}`

### Adding New Languages

To add a new language:

1. Add the language to the `languages` object in `src/i18n/ui.ts`
2. Add the language to the `locales` array in `astro.config.mjs`
3. Create a new directory `src/pages/[lang]/` with your pages
4. Add translations for all keys in the `ui` object

## Deployment

The site is configured for GitHub Pages deployment. The build process will generate static files that can be deployed to any static hosting service.

## License

ISC
