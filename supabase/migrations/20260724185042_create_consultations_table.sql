/*
# Create consultations table (single-tenant, no auth)

## Purpose
Stores consultation booking requests submitted from the Swayam Interior
Designs website's "Book a Consultation" form. This is a marketing site with
no user sign-in, so the table is intentionally public-write (anyone can
submit a lead) and the data is shared/public — there is no per-user ownership.

## New Tables
- `consultations`
  - `id` (uuid, primary key, auto-generated)
  - `name` (text, not null) — full name of the enquirer
  - `email` (text, nullable) — optional contact email
  - `phone` (text, not null) — primary contact number
  - `room_type` (text, nullable) — selected room type (Kitchen, Bedroom, etc.)
  - `budget` (text, nullable) — selected budget band (2-5, 5-10, 10-20, 20+)
  - `message` (text, nullable) — optional project description
  - `created_at` (timestamptz, defaults to now) — submission timestamp

## Security
- RLS enabled on `consultations`.
- Allow anon + authenticated to INSERT new consultation requests (the form
  is public; anyone visiting the site can submit a lead).
- No SELECT / UPDATE / DELETE for anon or authenticated — leads are managed
  privately by the Swayam team through the Supabase dashboard.
*/

CREATE TABLE IF NOT EXISTS consultations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text,
  phone text NOT NULL,
  room_type text,
  budget text,
  message text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE consultations ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_consultations" ON consultations;
CREATE POLICY "anon_insert_consultations"
ON consultations FOR INSERT
TO anon, authenticated
WITH CHECK (true);
