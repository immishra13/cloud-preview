# Preview Cloud — Project Deck

An interactive 21-slide presentation for **Preview Cloud**, our final-year project at VIVA Institute of Technology (CSE, AI & ML).

**Live deck:** https://immishra13.github.io/cloud-preview/

## What Preview Cloud is

Preview Cloud turns a public GitHub repository URL into a live preview, targeting under 12 seconds, with no local install and no config files.

Local setup is the pain it starts from: a new repo can mean 30+ minutes of setup, then "works on my machine" bugs. Existing options need config files (`.gitpod.yml`, `devcontainer.json`) and heavy in-browser IDEs, and start in up to 90 seconds (our gap-slide comparison of Codespaces, Gitpod and Replit).

How it works: paste a URL, the backend clones the repo, scans the files, builds it in a Docker container, and Nginx routes the preview to its own subdomain. Sandboxes stay small and locked down: a 256MB memory cap per sandbox and a read-only host filesystem.

## What this repo is

This repo is the **presentation app that pitches Preview Cloud**, not the Preview Cloud product itself. The preview backend is in progress.

## Features

- 21 slides: problem, literature survey (15 papers), research gap, objectives, methodology, timeline, work completed, tech stack, future scope
- Keynote view and a speaker dashboard (slide list + presenter cues)
- Slide timer with pause, resume and reset
- Keyboard navigation (arrows, space, PageUp/PageDown, Home, End, Esc), mouse-wheel and touch swipe
- Fullscreen mode and an auto-scaling 1920x1080 canvas
- Print to PDF and a real PPTX download (11 slides, via pptxgenjs)
- Slide screenshot button

## Stack

React 19 + Vite, lucide-react, pptxgenjs 4.0.1. Deployed to GitHub Pages with gh-pages.

## Run it

```bash
npm install
npm run dev      # local dev server
npm run build    # production build
npm run deploy   # build + publish to GitHub Pages
```

## Team

Nikhil Bendre, Riya Jadhav, Aditya Shirsath, Ankur Mishra — CSE (AI & ML), VIVA Institute of Technology, Mumbai. Timeline: July 2026 – February 2027.
