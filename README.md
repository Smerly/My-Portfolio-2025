# Ernest Cheung - Portfolio Website

A modern, responsive portfolio website built with Next.js 15, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Sleek dark theme with gradient accents and glass morphism effects
- **Responsive**: Fully responsive design that works on all devices
- **Performance Optimized**: Built with Next.js 15 and optimized for speed
- **SEO Ready**: Proper meta tags and structured data for search engines
- **Type Safe**: Built with TypeScript for better development experience
- **Accessible**: Follows accessibility best practices

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI + shadcn/ui
- **Icons**: Lucide React
- **Deployment**: Vercel

## 📦 Installation

1. Clone the repository:
\`\`\`bash
git clone https://github.com/yourusername/ernest-portfolio.git
cd ernest-portfolio
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
# or
yarn install
# or
pnpm install
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
# or
yarn dev
# or
pnpm dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Project Structure

\`\`\`
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── layout/           # Layout components
│   ├── sections/         # Page sections
│   └── ui/               # UI components
├── lib/                  # Utility functions and data
├── types/                # TypeScript type definitions
└── public/               # Static assets
\`\`\`

## 🎨 Customization

### Updating Content

1. **Personal Information**: Edit `lib/data.tsx` to update your personal details, experience, projects, and skills.

2. **Styling**: Modify `app/globals.css` and component styles to match your preferences.

3. **Components**: Customize individual components in the `components/` directory.

### Adding New Sections

1. Create a new component in `components/sections/`
2. Add it to the main page in `app/page.tsx`
3. Update navigation in `lib/data.tsx`

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

The portfolio can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📞 Contact

Ernest Cheung - ernestcheung02@gmail.com

Project Link: [https://github.com/yourusername/ernest-portfolio](https://github.com/yourusername/ernest-portfolio)
