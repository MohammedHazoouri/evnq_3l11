# Dreamy Love Letter Website
## Run
Open `index.html` in a browser (or run `python3 -m http.server` in this folder and visit http://localhost:8000). Google Fonts need internet; fallbacks are built in.
## Personalize (all in `js/script.js`, top `CONFIG` block)
- **Letter text / signature**: `letter`, `signature`.
- **Memories**: edit `memories` (date, title, icon, text, `image`).
- **Photos**: put files in `assets/images/`, set `src:"assets/images/yourfile.jpg"` in `photos`. Empty src shows a built-in placeholder.
- **Music**: put MP3s in `assets/music/`, set `tracks:[{title,artist,src:"assets/music/song.mp3",cover:"assets/images/cover.jpg"}]`. With empty `src`, a soft built-in melody plays. Music never autoplays.
- **Reasons / gift message**: `reasons`, `moreReasons`, `giftMessage`.
- **Logo watermark**: replace `assets/logo/logo.jpg` (keep the name, or edit the `<img>` in `index.html`). Instagram link is in the `#wm` anchor in `index.html`.
## Notes
The watermark is a single fixed element outside all sections, so it shows on every screen, including the envelope and modals.
