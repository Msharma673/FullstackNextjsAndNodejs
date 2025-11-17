# Setup Instructions

## Environment Variables

Create a `.env.local` file in the `frontend` directory with the following content:

```
NEXT_PUBLIC_API_URL=http://localhost:4000/api/v1
```

## Installation Steps

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create the environment file:
```bash
# Create .env.local file manually or use:
echo "NEXT_PUBLIC_API_URL=http://localhost:4000/api/v1" > .env.local
```

4. Start the development server:
```bash
npm run dev
```

5. Open your browser and navigate to:
```
http://localhost:3000
```

## Authentication Note

The form requires a JWT token for submission. You need to:

1. Register/Login via the backend API to get a token
2. Store the token in localStorage with key `authToken`
3. The form will automatically use this token when submitting

Example to set token:
```javascript
localStorage.setItem('authToken', 'your-jwt-token-here');
```

## Form Structure

The form is organized in the following structure:

- **Step 1**: Name (text input)
- **Step 2**: Email (email input)
- **Step 3**: Phone (tel input)
- **Step 4**: City (dropdown)
- **Step 5**: Country (dropdown)
- **Step 6**: Course Apply For & Education (option buttons - 4 options each)
- **Step 7**: Target Country (dropdown)

## Validation

- All fields are required
- Name: Minimum 2 characters, letters and spaces only
- Email: Valid email format
- Phone: Valid international phone format
- Dropdowns: Must select an option
- Option buttons: Must select one option

