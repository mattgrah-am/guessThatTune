# Guess That Tune 🎵

![Nuxt Version](https://img.shields.io/badge/Nuxt-v3.17.5-00DC82)
![Pinia Version](https://img.shields.io/badge/Pinia-v3.0.3-yellow)
![Tailwind CSS Version](https://img.shields.io/badge/TailwindCSS-v4.1.x-38bdf8)
![License](https://img.shields.io/badge/license-MIT-green)

**Live App**: [https://guessthattune.com](https://guessthattune.com)

## 📖 About

Guess That Tune is an interactive music quiz web application that challenges your knowledge of popular artists and their songs. The app provides an engaging experience where users can:

- Search for any artist or band
- Listen to 30-second song previews
- Select the correct song title from multiple options
- Get immediate feedback on their answers
- View their final score at the end of the quiz

Songs are played randomly from the artist's discography, ensuring a fresh experience with each playthrough.

## ✨ Features

- **Artist Search**: Find any artist or band in the Deezer database
- **Dynamic Quiz Generation**: Automatically generates quiz questions based on the selected artist
- **Music Playback**: Plays 30-second clips from the artist's songs
- **Multiple Choice**: Choose from 4 possible song titles
- **Score Tracking**: Keep track of correct answers
- **Responsive Design**: Works on desktop and mobile devices
- **Visual Feedback**: Colorful interface to indicate correct/incorrect answers

## 🛠️ Tech Stack

- **Frontend Framework**: [Nuxt.js](https://nuxt.com/) v3.17.5
- **State Management**: [Pinia](https://pinia.vuejs.org/) v3.0.3
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) v4.1.x
- **API Integration**: Cloudflare Workers proxy to Deezer API
- **Deployment**: Vercel/Netlify/Custom

## 🚀 Getting Started

### Prerequisites

- Node.js v16+
- NPM or Yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/mattgrah-am/guessThatTune.git
   ```
   cd guessThatTune
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit:
   ```
   http://localhost:3000
   ```

## 📝 Environment Variables

Create a `.env` file in the root directory with the following variables:

```
DEEZER_API_URL=https://api.deezer.com
NUXT_PUBLIC_API_BASE=https://your-cloudflare-worker-url.workers.dev
```

## 🔧 Development

The project structure follows Nuxt 3 conventions:

- `components/` - Vue components
- `pages/` - Application routes
- `stores/` - Pinia stores
- `server/` - Server API routes
- `assets/` - Static assets
- `public/` - Public files

### Commands

- **Development server**:
  ```bash
  npm run dev
  ```

- **Build for production**:
  ```bash
  npm run build
  ```

- **Preview production build**:
  ```bash
  npm run preview
  ```

## 🌐 API Integration

The application uses Cloudflare Workers to proxy requests to the Deezer API, avoiding CORS issues and protecting API keys. The core endpoints used are:

- `/api/search` - Search for artists
- `/api/tracklist` - Get tracks from an artist

## 📱 Deployment

### Production Build

1. Create a production build:
   ```bash
   npm run build
   ```

2. The output will be generated in the `.output` directory

3. Deploy to your preferred hosting platform:
   - Vercel, Netlify, Cloudflare Pages - Connect to your Git repository
   - Custom hosting - Upload the `.output` directory to your server

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 🙏 Acknowledgements

- [Deezer API](https://developers.deezer.com/) for providing music data
- [Nuxt.js](https://nuxt.com/) for the excellent Vue framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Pinia](https://pinia.vuejs.org/) for state management
