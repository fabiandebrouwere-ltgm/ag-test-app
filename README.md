# 🌍 Hello World App

A production-ready, fully tested, and easily maintainable web application.

[![CI/CD Pipeline](https://github.com/YOUR_USERNAME/hello-world-app/actions/workflows/ci.yml/badge.svg)](https://github.com/YOUR_USERNAME/hello-world-app/actions/workflows/ci.yml)

## 🎯 Features

- ✅ **Easy Content Editing** - Change text without coding (edit `content.json`)
- ✅ **Full Test Coverage** - Unit tests, integration tests, and E2E tests
- ✅ **CI/CD Pipeline** - Automated testing with GitHub Actions
- ✅ **Cloud Deployment** - One-click deploy to Vercel
- ✅ **Responsive Design** - Works on desktop and mobile
- ✅ **Screenshot Testing** - Visual regression testing with Playwright

---

## 📋 Table of Contents

- [For Non-Developers](#-for-non-developers)
- [Quick Start](#-quick-start)
- [Testing](#-testing)
- [Deployment](#-deployment)
- [Project Structure](#-project-structure)
- [Troubleshooting](#-troubleshooting)

---

## 👨‍👩‍👧 For Non-Developers

### How to Change the Text on the Website

1. Open the file `src/content.json` in any text editor
2. Find the text you want to change
3. Edit the text between the quotation marks `""`
4. Save the file
5. The website will update automatically (if deployed to Vercel)

**Example:**
```json
{
  "hero": {
    "greeting": "Hello, World!",  ← Change this text!
    "subtitle": "Welcome to your first application"
  }
}
```

> ⚠️ **Important:** Do not remove the quotation marks, commas, or brackets. Only change the text between `""`.

---

## 🚀 Quick Start

### Prerequisites

- [Node.js](https://nodejs.org/) (version 20 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/YOUR_USERNAME/hello-world-app.git

# 2. Navigate to the project folder
cd hello-world-app

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

---

## 🧪 Testing

### Run All Tests

```bash
# Unit & Integration Tests
npm test

# With coverage report
npm run test:coverage

# E2E Tests (requires browsers)
npm run test:e2e

# E2E Tests with visible browser
npm run test:e2e:headed
```

### Test Types

| Type | Location | What it tests |
|------|----------|---------------|
| Unit Tests | `__tests__/*.test.tsx` | Individual components |
| Integration Tests | `__tests__/*.test.ts` | Content configuration |
| E2E Tests | `e2e/*.spec.ts` | Full user flows + screenshots |

### Screenshots

E2E tests automatically capture screenshots in `test-results/screenshots/`:
- `hero-section.png` - Main heading area
- `features-section.png` - Feature cards
- `mobile-view.png` - Mobile responsive view
- `full-page.png` - Complete page

---

## 🌐 Deployment

### Deploy to Vercel (Recommended)

Vercel provides free, secure hosting with automatic deployments.

#### Option 1: One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR_USERNAME/hello-world-app)

#### Option 2: Manual Setup

1. **Create a Vercel Account**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with your GitHub account

2. **Import Project**
   - Click "Add New..." → "Project"
   - Select your `hello-world-app` repository
   - Click "Deploy"

3. **Automatic Deployments**
   - Every push to `main` branch triggers a new deployment
   - Preview deployments are created for pull requests

### Environment Variables

No environment variables are required for basic functionality.

### Security

Vercel provides:
- ✅ HTTPS by default
- ✅ DDoS protection
- ✅ Automatic SSL certificates
- ✅ Edge network caching

---

## 📁 Project Structure

```
hello-world-app/
├── src/
│   ├── app/
│   │   ├── page.tsx        # Main page component
│   │   ├── layout.tsx      # App layout
│   │   └── globals.css     # Global styles
│   └── content.json        # ⭐ EDIT THIS FILE to change text
├── __tests__/              # Unit & integration tests
├── e2e/                    # End-to-end tests
├── .github/workflows/      # CI/CD configuration
└── README.md               # This file
```

---

## 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm test` | Run unit tests |
| `npm run test:coverage` | Run tests with coverage |
| `npm run test:e2e` | Run E2E tests |

---

## ❓ Troubleshooting

### "npm command not found"

You need to install Node.js. Download it from [nodejs.org](https://nodejs.org).

### "Tests are failing"

1. Make sure you haven't broken the JSON structure in `content.json`
2. Run `npm install` to ensure all dependencies are installed
3. Check the error message for details

### "Deploy failed on Vercel"

1. Check the build logs in your Vercel dashboard
2. Make sure all tests pass locally first (`npm test`)
3. Ensure no syntax errors in your code

### "I changed content.json but nothing happened"

- **Local development:** Refresh the browser
- **Vercel:** Changes deploy automatically within ~1 minute

---

## 📞 Support

If you need help:
1. Check the [Troubleshooting](#-troubleshooting) section
2. Open an issue on GitHub
3. Contact the development team

---

## 📄 License

MIT License - feel free to use this project as you wish.
