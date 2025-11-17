# API Guide & cURL Cheatsheet

All endpoints are prefixed with `http://localhost:4000/api/v1`.

## 1. Health Check (no auth)
```bash
curl http://localhost:4000/api/v1/health
```

## 2. Auth

### Register
```bash
curl -X POST http://localhost:4000/api/v1/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Demo Admin",
    "email": "admin@example.com",
    "password": "Secret@123"
  }'
```

### Login
```bash
curl -X POST http://localhost:4000/api/v1/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "admin@example.com",
    "password": "Secret@123"
  }'
```
Copy the `token` value from the response and pass it as `Authorization: Bearer <token>` in all applicant requests.

## 3. Applicant CRUD (requires JWT)

### Create Applicant
```bash
curl -X POST http://localhost:4000/api/v1/applicants \
  -H "Authorization: Bearer <TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Aman Sharma",
    "email": "aman@example.com",
    "phone": "+9100001111",
    "city": "Delhi",
    "country": "India",
    "courseApplyFor": "MBA",
    "education": "B.Com",
    "targetCountry": "Canada"
  }'
```

### List Applicants
```bash
curl -H "Authorization: Bearer <TOKEN>" \
  http://localhost:4000/api/v1/applicants
```

### Get Single Applicant
```bash
curl -H "Authorization: Bearer <TOKEN>" \
  http://localhost:4000/api/v1/applicants/1
```

### Update Applicant
```bash
curl -X PUT http://localhost:4000/api/v1/applicants/1 \
  -H "Authorization: Bearer <TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Aman Sharma",
    "email": "aman@example.com",
    "phone": "+9100001111",
    "city": "Delhi NCR",
    "country": "India",
    "courseApplyFor": "MBA",
    "education": "B.Com",
    "targetCountry": "Canada"
  }'
```

### Delete Applicant
```bash
curl -X DELETE http://localhost:4000/api/v1/applicants/1 \
  -H "Authorization: Bearer <TOKEN>"
```

## 4. Migration & Seeding

- Run Node script: `npm run db:setup`
- Manual SQL: `mysql -u root -p form_crud_db < sql/migrations/001_create_applicants_table.sql`
- Seed: `npm run db:seed` or `mysql -u root -p form_crud_db < sql/seeds/sample_applicants.sql`

## Notes

- All request bodies must be JSON.
- Validation errors return HTTP 422 with readable messages.
- JWT tokens expire based on `JWT_EXPIRES_IN` (default 1 hour).

