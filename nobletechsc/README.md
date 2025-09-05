## Noble Technology Solution Center Website

Professional marketing & corporate site for Noble Technology Solution Center built with Next.js 15 (App Router) + Tailwind (v4) + Framer Motion.

### Tech Stack
- Next.js 15 App Router
- React 19
- Tailwind CSS v4 utility-first styling + custom CSS design tokens
- Framer Motion for scroll / reveal animations
- React Hook Form + Zod for form validation

### Features
- Responsive multi-page layout (Home, About, Services, Contact)
- Animated hero, service cards, values, mission/vision sections
- Reusable design tokens (colors, spacing, typography, shadows)
- Accessible navigation with mobile menu
- Contact form with validation and API route placeholder (`/api/contact`)
- SEO metadata + Open Graph + Twitter tags

### Project Structure
```
src/
	app/
		page.tsx              (Home)
		about/page.tsx        (About)
		services/page.tsx     (Services)
		contact/page.tsx      (Contact)
		api/contact/route.ts  (Contact form endpoint placeholder)
	components/
		layout/ (Navbar, Footer)
		home/   (Hero, ServicesPreview, Values, MissionVision, CTA)
		ui/     (Button, AnimatedReveal)
		contact/(ContactForm)
	lib/constants.ts        (Company, services & content data)
```

### Getting Started
Install dependencies (Node 18+ recommended):
```
npm install
```
Run development server:
```
npm run dev
```
Visit: http://localhost:3000

### Production Build
```
npm run build
npm start
```

### Environment Variables (Future Enhancements)
For email/service integration create a `.env.local` with (example):
```
RESEND_API_KEY=...
SENDGRID_API_KEY=...
GMAIL_USER=yourgmail@gmail.com
GMAIL_APP_PASSWORD=abcd efgh ijkl mnop
CONTACT_TO_EMAIL=ndsolutionsgh@gmail.com
```
Then update `/src/app/api/contact/route.ts` to send emails.

### Customization
- Update brand palette or spacing in `src/app/globals.css`
- Edit content / add services in `src/lib/constants.ts`
- Extend animations in `components/ui/AnimatedReveal.tsx`

### Deployment
You can deploy easily to Vercel:
1. Push repository to GitHub
2. Import project in Vercel dashboard
3. Set any required environment variables
4. Deploy

### Roadmap / Suggested Next Steps
- Portfolio / Case Studies section
- Blog / Insights for SEO
- CMS integration (Sanity, Contentlayer, or Headless WP)
- Light/Dark toggle + persisted theme
- Internationalization (i18n)
- Analytics (Vercel Web Analytics / Plausible)
- Email service integration for contact form

### License
All rights reserved © Noble Technology Solution Center.
