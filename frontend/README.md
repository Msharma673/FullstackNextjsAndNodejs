# Frontend - Applicant Form

Next.js application with a 7-step multi-step form for applicant information.

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- React

## Features

- 7-step form with validation
- Step-by-step navigation
- Real-time validation
- Responsive design
- Custom fonts (Merriweather, DM Sans)

## Getting Started

1. Install dependencies:
```bash
cd frontend
npm install
```

2. Set up environment variables:
```bash
cp .env.example .env.local
```

Update `.env.local` with your API URL:
```
NEXT_PUBLIC_API_URL=http://localhost:4000/api/v1
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
frontend/
├── app/                    # Next.js app router
│   ├── layout.tsx         # Root layout with fonts
│   ├── page.tsx           # Home page
│   ├── form/              # Form page route
│   └── globals.css        # Global styles with Tailwind
├── components/            # React components
│   ├── form/              # Form-specific components
│   │   ├── ApplicantForm.tsx
│   │   └── StepIndicator.tsx
│   └── ui/                # Reusable UI components
│       ├── Input.tsx
│       ├── Dropdown.tsx
│       └── OptionButton.tsx
├── constants/             # Constants and types
│   └── formConstants.ts
├── utils/                 # Utility functions
│   ├── validation.ts
│   └── api.ts
├── helpers/               # Helper functions
│   └── formHelpers.ts
└── package.json
```

## Form Steps

1. **Personal Information** - Name (input)
2. **Contact Details** - Email (input)
3. **Phone Number** - Phone (input)
4. **Location** - City (dropdown)
5. **Country** - Country (dropdown)
6. **Course & Education** - Course and Education (option buttons)
7. **Target Country** - Target Country (dropdown)

## Validation

- Name: Required, min 2 characters, letters and spaces only
- Email: Required, valid email format
- Phone: Required, valid phone number format
- Dropdowns: Required selection
- Option buttons: Required selection

## API Integration

The form submits to the backend API at `/api/v1/applicants`. Make sure:
1. Backend server is running
2. User is authenticated (JWT token stored in localStorage)
3. API URL is correctly configured in `.env.local`

## Fonts

- **Merriweather**: Used for headings
- **DM Sans**: Used for body text and UI elements

Both fonts are loaded via Next.js font optimization.

