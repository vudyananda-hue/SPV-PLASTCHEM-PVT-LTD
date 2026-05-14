# S P V Plastchem (Pvt) Ltd — Corporate Website

A modern, enterprise-grade corporate website for a Sri Lankan industrial chemical manufacturing company.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React + Vite + Tailwind CSS v4 |
| Backend | Python FastAPI |
| Database | Supabase PostgreSQL |
| Auth | Supabase + Google OAuth |
| Frontend Deploy | Vercel |
| Backend Deploy | Render / Railway |

## Quick Start

### Frontend

```bash
cd frontend
npm install
npm run dev
# → http://localhost:5173
```

### Backend

```bash
cd backend
pip install -r requirements.txt
cp .env.example .env  # Fill in Supabase credentials
uvicorn app.main:app --reload
# → http://localhost:8000/docs
```

### Database

1. Create a Supabase project at [supabase.com](https://supabase.com)
2. Run `database/schema.sql` in the Supabase SQL Editor
3. Enable Google OAuth in Authentication > Providers
4. Copy project URL and anon key to `.env` files

## Project Structure

```
spv/
├── frontend/          # React + Vite application
├── backend/           # FastAPI application
└── database/          # Supabase SQL schema
```

## Environment Variables

### Frontend (`frontend/.env`)
- `VITE_SUPABASE_URL` — Supabase project URL
- `VITE_SUPABASE_ANON_KEY` — Supabase anonymous key
- `VITE_API_URL` — Backend API URL

### Backend (`backend/.env`)
- `SUPABASE_URL` — Supabase project URL
- `SUPABASE_KEY` — Supabase anonymous key
- `SUPABASE_SERVICE_KEY` — Supabase service role key
- `CORS_ORIGINS` — Allowed CORS origins (comma-separated)
