# Robot Control - WeChat Mini Program

Robot Control is a premium WeChat Mini Program for AI toys, robots, drones, and smart pet play. It offers a sleek dark-tech interface, mission-driven tasks, and an educational Robot Academy for kids aged 8–14.

## Features

- Home Dashboard: premium status and device summaries
- Control Panel: smooth robot and drone command actions
- Tasks & Missions: complete missions to earn XP
- Robot Academy: fun learning paths for robot safety and coding
- Profile & XP: reward progress and premium status

## Tech stack

- WeChat Mini Program
- WXML
- WXSS
- JavaScript
- Custom components and tab bar navigation

## Project structure

- `app.json` — global pages, window settings, custom tab bar
- `app.wxss` — shared visual style and premium dark theme
- `pages/` — app pages for home, control, tasks, academy, and profile
- `custom-tab-bar/` — custom bottom navigation
- `components/` — reusable UI components

## Installation

1. Open Weixin DevTools.
2. Open this project folder: `miniprogram-1`.
3. Use `touristappid` in `project.config.json` if needed for preview.
4. Preview and compile in DevTools.

## Development notes

- The app uses a custom tab bar with 5 pages.
- Academy content is local mock data only.
- No backend, authentication, or cloud services are included.

## Security note

- Do not commit real `AppID`, `AppSecret`, or tokens.
- `project.config.json` should use `touristappid` for local preview.
- Keep private/local config files out of source control.

## Author

Nicolas Stedile (@Nicosted)

## Educational purpose

Designed to deliver premium robotics learning experiences with kid-friendly Academy content and modern dark-tech styling.
