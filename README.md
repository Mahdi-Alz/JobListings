# vue-crash-2024

Simple Vue 3 job board app built with Vite.

## What it does

- Shows a home page and job listings
- Lets you view a single job
- Lets you add and edit jobs
- Uses `json-server` with `src/jobs.json` as the local API

## Project Structure

The project is organized around a small Vue app with routing, views, and reusable UI components:

- `src/main.js` - app entry point. It loads global styles, sets up Vue Router, and enables toast notifications.
- `src/App.vue` - main app shell. It renders the navbar and the active route view.
- `src/router/` - route definitions for the app pages.
- `src/views/` - page-level components for home, jobs list, job details, add job, edit job, and 404.
- `src/components/` - reusable UI pieces like the navbar, cards, listings, and buttons.
- `src/jobs.json` - mock data source used by `json-server`.
- `src/assets/` - global CSS and static assets such as the logo.
- `public/` - public files served directly by Vite.

## Run locally

```sh
npm install
npm run server
npm run dev
```

## Scripts

- `npm run dev` - start the Vite dev server
- `npm run build` - build for production
- `npm run preview` - preview the production build
- `npm run server` - start the local JSON API on port `8000`

## Routes

- `/` - home
- `/jobs` - job list
- `/jobs/:id` - job details
- `/jobs/add` - add a job
- `/jobs/edit/:id` - edit a job
