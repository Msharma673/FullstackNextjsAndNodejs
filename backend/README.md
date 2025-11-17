# Backend – Form CRUD API

Simple Node.js + Express REST API with JWT auth and MySQL persistence for capturing applicant information (name, email, phone, city, country, course applied for, education, target country).

## 1. Tech Stack

- Node.js + Express
- MySQL (via `mysql2/promise`)
- JWT auth (`jsonwebtoken`)
- Validation (`joi`)

## 2. Folder Layout

```
backend/
├── docs/                 # Additional guides
├── env/                  # Environment samples
├── scripts/              # DB helper scripts
├── sql/                  # SQL migrations & seeds
└── src/
    ├── config/           # DB + logger config
    ├── controllers/
    ├── env/              # Runtime env loader
    ├── middleware/
    ├── models/
    ├── routes/
    ├── services/
    └── utils/
```

## 3. Getting Started

1. Install dependencies
   ```bash
   cd backend
   npm install
   ```
2. Copy environment sample and provide your values
   ```bash
   cp env/sample.env .env
   ```
3. Create the database manually or from script:
   ```sql
   CREATE DATABASE form_crud_db;
   ```
4. Create tables (choose one)
   - **Node script**: `npm run db:setup`
   - **SQL file**: run `sql/migrations/001_create_applicants_table.sql`
5. (Optional) Seed demo data
   - `npm run db:seed` (uses script)
   - or run `sql/seeds/sample_applicants.sql`
6. Start the API
   ```bash
   npm run dev
   ```

## 4. Auth & Authorization

- Register: `POST /api/v1/auth/register`
- Login: `POST /api/v1/auth/login`
- All `/api/v1/applicants/*` routes expect a `Bearer <token>` header returned from login/register.

## 5. Applicant CRUD Fields

`name`, `email`, `phone`, `city`, `country`, `courseApplyFor`, `education`, `targetCountry`

## 6. API Reference

Detailed curl commands and workflow live in `docs/API_GUIDE.md`.

## 7. Migration Options

- Run `npm run db:setup` to auto-create tables.
- Alternatively, execute SQL in `sql/migrations/001_create_applicants_table.sql`.

## 8. Troubleshooting

- Verify `.env` credentials match MySQL user.
- Ensure MySQL server is running.
- Use `npm run db:seed` to reset sample data quickly.

