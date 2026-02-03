# Quick Reference Guide - Portfolio Customization

## 📋 Table of Contents
1. [How to Update Projects](#update-projects)
2. [How to Update Copy](#update-copy)
3. [How to Update Contact Info](#update-contact)
4. [How to Update Images](#update-images)
5. [How to Deploy](#deploy)
6. [Common Customizations](#customizations)

---

## Update Projects {#update-projects}

### Adding a New Project

Edit `src/data/projects.ts` and add a new project object to the `projects` array:

```typescript
{
  id: "5",
  slug: "your-project-slug",  // URL-friendly name (use hyphens)
  title: "Project Title",
  location: "Cairo, Egypt",
  year: "2024",
  buildingType: "Industrial / Data Center / Commercial / Residential",
  role: "Your Role Description",
  shortDescription: "1-2 sentence summary of the project",
  image: "https://images.unsplash.com/photo-xxx?w=1200&h=600&fit=crop",
  tags: ["Tag1", "Tag2", "Tag3"],
  icon: "Factory" | "Server" | "Building2" | "Home",
  
  problem: [
    "Problem 1",
    "Problem 2",
    "Problem 3"
  ],
  
  solution: [
    "Solution approach 1",
    "Solution approach 2",
    "Solution approach 3"
  ],
  
  engineeringDecisions: [
    "Decision 1: explanation",
    "Decision 2: explanation",
    "Decision 3: explanation"
  ],
  
  impact: [
    "Result 1 (quantified)",
    "Result 2 (quantified)",
    "Result 3 (quantified)"
  ],
  
  area: "50,000 sqm",
  client: "Client Name",
  tools: ["Revit MEP", "Navisworks", "HAP"],
  standards: ["ASHRAE 90.1", "SMACNA"],
  
  gallery: [
    { src: "image-url", caption: "Image description" },
    { src: "image-url", caption: "Image description" }
  ]
}
```

### Editing an Existing Project
1. Open `src/data/projects.ts`
2. Find the project by its `slug`
3. Update any fields
4. Rebuild: `npm run build`

### Icon Options
Use one of these for the `icon` field:
- `"Factory"` - Industrial projects
- `"Server"` - Data Center projects
- `"Building2"` - Commercial projects
- `"Home"` - Residential projects

---

## Update Copy {#update-copy}

### Hero Section Title & Subtitle
File: `src/components/portfolio/HeroSection.tsx`

```typescript
<h1>Edit this title</h1>
<p>Edit this subtitle</p>
```

### Availability Statement
File: `src/components/portfolio/ContactSection.tsx`

```typescript
const availability = "Open to roles in Egypt, KSA, and Remote positions";
```

### About Section Bullet Points
File: `src/components/portfolio/AboutSection.tsx`

Update arrays like:
```typescript
const specialties = [
  "Specialty 1",
  "Specialty 2",
  // ...
];
```

---

## Update Contact Info {#update-contact}

### Email, Phone, LinkedIn

Files to update:
1. `src/components/portfolio/ContactSection.tsx`
2. `src/components/portfolio/Footer.tsx`
3. `src/components/portfolio/HeroSection.tsx`

Find and replace these constants:
```typescript
const contactEmail = "tadrwsm@gmail.com";
const contactPhone = "+20 127 259 9987";
const linkedinUrl = "https://www.linkedin.com/in/tadros-makram/";
```

### Location
Update in multiple files:
```typescript
"Cairo, Egypt"  // Change to your location
```

---

## Update Images {#update-images}

### Profile Photo
1. Replace: `src/assets/profile-photo.jpg`
2. Keep same filename or update import in `HeroSection.tsx`

### Project Images
Update URLs in `src/data/projects.ts`:
```typescript
image: "https://your-image-hosting/project-image.jpg?w=1200&h=600&fit=crop",

gallery: [
  { src: "https://your-image-hosting/image1.jpg", caption: "..." },
  { src: "https://your-image-hosting/image2.jpg", caption: "..." }
]
```

### Image Hosting Options
- **AWS S3** - Scalable cloud storage
- **Cloudinary** - Image optimization + CDN
- **Imgix** - Dynamic image resizing
- **GitHub** - Free for public repos
- **Unsplash** - Free stock photos (keep URLs as-is for demo)

### Recommended Image Dimensions
- Project card images: 1200×600 px (2:1 ratio)
- Gallery images: 1200×800 px (3:2 ratio)
- Hero image: 1200×900 px (4:3 ratio)
- Profile photo: 400×400 px (square)

---

## How to Deploy {#deploy}

### Build Production Version
```bash
npm run build
```
Output goes to: `dist/` folder

### Deploy to Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

### Deploy to Firebase
```bash
npm install -g firebase-tools
firebase login
firebase deploy
```

### Deploy to GitHub Pages
1. Update `vite.config.ts` to add `base: "/repo-name/"`
2. Add deploy script to `package.json`:
```json
"deploy": "npm run build && gh-pages -d dist"
```
3. Run: `npm run deploy`

### Environment Setup
Before deploying:
1. Ensure CV file exists: `public/Tadros_Awad_CV.pdf`
2. Update canonical URL in `index.html` (change `https://tadrosawad.com` to your domain)
3. Test build locally: `npm run build && npm run preview`
4. Check Lighthouse score: Run audit in Chrome DevTools

---

## Common Customizations {#customizations}

### Change Site Colors
File: `src/index.css`

```css
:root {
  --primary: 210 100% 45%;      /* Blue - change these HSL values */
  --secondary: 280 90% 50%;     /* Purple */
  // ...
}

.dark {
  --primary: 210 100% 50%;      /* Dark mode primary */
  // ...
}
```

**HSL Format Explanation:**
- First number (0-360): Hue (red=0, green=120, blue=240)
- Second number (0-100%): Saturation
- Third number (0-100%): Lightness

### Change Font
File: `src/index.css`

```css
@import url('https://fonts.googleapis.com/css2?family=YourFont:wght@300;400;500;600;700&display=swap');
```

Then update CSS variables:
```css
--font-display: 'Your Font', sans-serif;
--font-sans: 'Inter', sans-serif;
```

### Add Social Media Links
File: `src/components/portfolio/Footer.tsx` and `src/components/portfolio/ContactSection.tsx`

Add new link:
```typescript
<a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer">
  <TwitterIcon className="w-5 h-5" />
  Twitter
</a>
```

### Disable Dark Mode
File: `src/components/portfolio/Navigation.tsx`

Remove or comment out dark mode toggle:
```typescript
{/* <Button variant="ghost" size="icon" onClick={toggleDarkMode}>
  {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
</Button> */}
```

### Add Google Analytics
Add to `index.html` in `<head>`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Add Contact Form
Install: `npm install react-hook-form`

Example component:
```typescript
import { useForm } from "react-hook-form";

const { register, handleSubmit } = useForm();
const onSubmit = (data) => {
  // Send data to backend or email service
};

<form onSubmit={handleSubmit(onSubmit)}>
  <input {...register("name")} placeholder="Your Name" />
  <input {...register("email")} type="email" placeholder="Your Email" />
  <textarea {...register("message")} placeholder="Your Message" />
  <button type="submit">Send</button>
</form>
```

### Add Download Project Portfolio PDF
1. Upload PDF to `/public/Tadros_Portfolio.pdf`
2. Add button in hero or projects section:
```typescript
<Button asChild>
  <a href="/Tadros_Portfolio.pdf" download>
    Download Project Portfolio
  </a>
</Button>
```

---

## File Structure Quick Reference

```
your-engineer-story-main/
├── src/
│   ├── data/projects.ts          ← Edit projects here
│   ├── pages/
│   │   ├── Index.tsx             ← Home page sections
│   │   ├── Projects.tsx          ← Projects listing
│   │   └── CaseStudy.tsx         ← Case study template
│   ├── components/portfolio/
│   │   ├── HeroSection.tsx       ← Update hero copy
│   │   ├── ContactSection.tsx    ← Update contact info
│   │   └── [others...]
│   ├── index.css                 ← Update colors/fonts
│   └── main.tsx
├── public/
│   ├── Tadros_Awad_CV.pdf        ← Upload CV here
│   └── favicon.png
├── index.html                    ← Update meta tags
└── package.json
```

---

## Commands Reference

```bash
# Development
npm run dev              # Start development server (http://localhost:8080)
npm run build           # Build for production
npm run preview         # Preview production build locally
npm run lint            # Run ESLint
npm run build:dev       # Build in development mode

# Deployment
npm run build           # Create optimized build
# Then deploy dist/ folder to your hosting
```

---

## Testing & Quality

### Before Deploying
1. **Build test:** `npm run build` (should complete without errors)
2. **Preview:** `npm run preview` (check all pages load correctly)
3. **Mobile test:** Use Chrome DevTools to test responsive design
4. **Performance:** Run Lighthouse audit (DevTools → Lighthouse)
5. **Links:** Click all navigation links and CTAs
6. **Forms:** Test contact email/phone functionality
7. **Images:** Verify all images load correctly
8. **Browser compatibility:** Test on Chrome, Firefox, Safari

### Lighthouse Targets
- **Performance:** 85+
- **Accessibility:** 95+
- **Best Practices:** 90+
- **SEO:** 95+

---

## Support & Troubleshooting

### Issue: Build fails
```bash
# Clear cache and try again
rm -rf node_modules
npm install
npm run build
```

### Issue: Images not showing
- Check image URLs are accessible from production domain
- Verify image dimensions (recommended: 1200×600 px)
- Use modern formats (WebP with fallback)

### Issue: Navigation not working
- Ensure all routes are configured in `App.tsx`
- Check browser console for routing errors
- Clear browser cache

### Issue: Page takes too long to load
- Check image file sizes (should be <200KB each)
- Enable gzip compression on hosting
- Consider using image CDN (Cloudinary, Imgix)

---

**Last Updated:** January 28, 2026
**Version:** 1.0
**Tech Stack:** React 18 + TypeScript + Tailwind CSS + Vite
