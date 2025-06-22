# Reiki Healer Website

A beautiful, responsive website for a Reiki healing practitioner built with React, React Router, and Tailwind CSS. Features full internationalization support for English and Spanish.

## Features

- **Multi-page Navigation**: React Router for seamless page transitions
- **Internationalization**: Full English and Spanish language support with dynamic switching
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Smooth Animations**: Sections fade in as you scroll using intersection observer
- **Background Music**: Ambient music player for a calming experience
- **Modern UI**: Clean, professional design with green healing theme
- **Service Showcase**: Displays different Reiki services with beautiful imagery
- **Contact Form**: Functional contact form for client inquiries
- **Professional Biography**: Detailed information about the practitioner

## Pages

- **Home**: Introduction to Reiki, how remote healing works, and benefits
- **Services**: Detailed service offerings with pricing and descriptions
- **Biography**: About the practitioner, certifications, and philosophy
- **Contact**: Contact form and contact information

## Getting Started

### Prerequisites

Make sure you have Node.js installed on your system. You can download it from [nodejs.org](https://nodejs.org/).

### Installation

1. Clone or download this project
2. Open a terminal in the project directory
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

To start the development server:

```bash
npm start
```

The application will open in your browser at `http://localhost:3000`.

### Building for Production

To create a production build:

```bash
npm run build
```

## Project Structure

```
reiki-healer-website/
├── public/
│   └── index.html          # Main HTML file
├── src/
│   ├── components/
│   │   ├── AnimatedSection.js  # Scroll-triggered animations
│   │   ├── MusicPlayer.js      # Background music player
│   │   ├── Navigation.js       # Navigation with language switcher
│   │   └── Footer.js           # Footer component
│   ├── pages/
│   │   ├── Home.js             # Home page with introduction
│   │   ├── Services.js         # Services page
│   │   ├── Biography.js        # Biography page
│   │   └── Contact.js          # Contact page with form
│   ├── App.js              # Main application with routing
│   ├── index.js            # Application entry point
│   ├── index.css           # Styles and Tailwind CSS
│   └── i18n.js             # Internationalization configuration
├── package.json            # Dependencies and scripts
├── tailwind.config.js      # Tailwind CSS configuration
└── postcss.config.js       # PostCSS configuration
```

## Technologies Used

- **React 18**: Modern React with hooks
- **React Router**: Client-side routing
- **React i18next**: Internationalization
- **Tailwind CSS**: Utility-first CSS framework
- **React Intersection Observer**: For scroll animations
- **Create React App**: Development environment

## Internationalization

The website supports both English and Spanish languages. Users can switch languages using the language toggle in the navigation bar. All text content is dynamically translated based on the selected language.

### Adding New Languages

To add support for additional languages:

1. Add new language translations to `src/i18n.js`
2. Update the language switcher in `src/components/Navigation.js`

## Customization

You can easily customize the website by:

1. **Content**: Edit the text in the translation files (`src/i18n.js`)
2. **Images**: Replace the placeholder images with your own
3. **Colors**: Modify the green theme in `tailwind.config.js`
4. **Music**: Change the background music URL in `MusicPlayer.js`
5. **Services**: Update service offerings in `src/pages/Services.js`
6. **Contact Info**: Update contact details in `src/pages/Contact.js`

## License

This project is open source and available under the MIT License. 