ADVENTURER’S QUEST JOURNAL — iPHONE SETUP

PART 1: INSTALL THE APP
1. Upload the CONTENTS of this folder (index.html, manifest.webmanifest, service-worker.js and the icon PNGs) to a static HTTPS website host such as GitHub Pages or Netlify. Uploading the ZIP itself without extracting it is not enough on most hosts.
2. On your iPhone, open the hosted URL in Safari. Tap Share > Add to Home Screen > Add (on some iOS versions, choose Open as Web App).
3. Open the new Quest Journal icon. It will work offline after the first successful load, provided the browser has cached its files.
4. From your OLD dashboard, use Backup data to export your progress; in the new app choose Restore backup and select that JSON file. Note: localStorage does not automatically transfer between file://, Safari and a Home Screen web app.
5. Keep the hosted URL and your backups. Data is saved on this device, not automatically synced to other devices.

PART 2: INSTALL THE WIDGET (SCRIPTABLE REQUIRED)
1. Install the third-party Scriptable app from the App Store.
2. In Scriptable, create a new script called QuestJournalWidget. Paste in the contents of QuestJournalWidget.js, then save.
3. Long-press your iPhone Home Screen, tap Edit/Add Widget (+), search Scriptable, add a medium widget.
4. Long-press the widget > Edit Widget > Script > QuestJournalWidget. Set 'When Interacting' as desired.
5. The widget shows a short daily quest preview and Bandit's encouragement. It does not automatically read the PWA's checklist state.
6. OPTIONAL MANUAL PROGRESS UPDATE: In the dashboard, tap Backup data. Save the exported JSON file to iCloud Drive > Scriptable and rename it quest-backup.json. Refresh the widget. It will display checked-off quests and XP from that backup. Repeat whenever you want a refreshed snapshot. Note that this is not live synchronization.
7. For widget tap-to-open, edit APP_URL in QuestJournalWidget.js to your hosted URL.

LIMITATIONS
- This is a PWA + companion Scriptable widget, not an App Store native iOS app.
- The widget's compact schedule is a curated preview, not a direct rendering of every dashboard task; the full schedule remains in the app.
- The widget requires Scriptable and manual backup import for progress counts. No server or automatic sync is included.
- Host the PWA on HTTPS. Opening index.html directly from Files does not enable PWA installation/service worker.
- The dashboard contains Nick's embedded sticker, Bandit, XP, achievements, schedules and tracking unchanged except for mobile/PWA metadata and styling.
