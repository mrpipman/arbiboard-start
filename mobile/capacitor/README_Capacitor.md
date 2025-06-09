# Capacitor Mobile App (React → Android/iOS)

## Setup:
1. `npm install @capacitor/core @capacitor/cli`
2. `npx cap init arbiboard com.arbiboard.app`
3. Imposta `"webDir": "dist"` in `capacitor.config.ts`
4. `npx cap add android`
5. `npx cap open android`

## Build:
- Esegui `npm run build` nel frontend
- `npx cap copy`
- Genera APK da Android Studio