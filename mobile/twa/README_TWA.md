# TWA – Trusted Web Activity Setup (Android)

## Requisiti:
- Node.js + npm
- Bubblewrap: `npm install -g @bubblewrap/cli`
- PWA deployata online (es. https://arbiboard.netlify.app)

## Procedura:
1. `bubblewrap init --manifest https://arbiboard.netlify.app/manifest.webmanifest`
2. Configura: packageId, appVersion, etc.
3. `bubblewrap build`
4. Apri con Android Studio (`./android`)
5. Genera `.aab` o `.apk` per Play Store