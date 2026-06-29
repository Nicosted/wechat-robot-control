# Robot Control - WeChat Mini Program

Smart Toy Hub is a premium WeChat Mini Program for kids and families to control, train, and play with AI toys, robots, drones, and smart pets. The app features a playful dark-tech interface, mission-driven tasks, a Robot Academy for learning, and multilingual support.

## Features

- **Home Hub**: Choose and manage your smart toy buddies
- **Control Panel**: Joystick and action controls for your toys
- **Today's Missions**: Playful missions to earn stars and XP
- **Robot Academy**: Fun learning paths for toy safety and coding
- **Toy Trainer Profile**: Levels, stars, favorites, and language settings
- **Multilingual**: English, Español, Português, 中文

## Tech stack

- WeChat Mini Program
- WXML, WXSS, JavaScript
- Custom components and tab bar navigation
- Local mock data only

## Project structure

- `app.json` — global pages, window settings, custom tab bar
- `app.wxss` — shared visual style and premium dark theme
- `app.js` — app launch and i18n initialization
- `pages/` — home, control, tasks, academy, and profile pages
- `custom-tab-bar/` — 5-tab navigation with emoji icons
- `utils/i18n.js` — multilingual translation system
- `utils/mockDevices.js` — toy buddy data with personalities

## Installation

1. Open Weixin DevTools.
2. Open this project folder: `miniprogram-1`.
3. Use `touristappid` in `project.config.json` for preview.
4. Run in DevTools simulator (iPhone 12/13 recommended).

## Development notes

- Custom tab bar with 5 pages: Home, Control, Tasks, Academy, Profile
- All toy data is local mock; no real device integration
- Demo mode: all actions show demo feedback messages
- No backend, authentication, or cloud services
- No real Bluetooth/WiFi device pairing
- Language setting is stored locally per session

## Manufacturer & SDK Requirements

The app is designed to support multiple smart toy manufacturers in the future.

### For manufacturers:

- Provide open or documented SDK/API access for integrations
- Future stack may support:
  - ROS2 middleware
  - WebSocket/MQTT bridge
  - Webots/Gazebo simulator
  - Dynamixel SDK / OpenCR (robotics)

### For Brazil/LatAm:

- RF/WiFi/Bluetooth module compliance documentation
- Battery and charger/adapter safety certifications
- Cable and connector documentation
- Local regulatory compliance review required

### Real hardware integration requires:

- Backend service for device pairing and management
- Device security and authentication
- Manufacturer SDK integration
- Regulatory compliance review
- **Current app is a mock MVP/demo only**

## Security note

- Do not commit real `AppID`, `AppSecret`, or tokens
- `project.config.json` should use `touristappid` for preview
- Private/local config files belong in `.gitignore`
- No secrets or credentials are included in this repository

## Author

Nicolas Stedile (@Nicosted)

## Educational purpose

Designed to demonstrate a kid-friendly smart toy hub concept with premium dark-tech styling, playful missions, and multilingual support. Current implementation is a mock MVP and does not include real device connectivity.
