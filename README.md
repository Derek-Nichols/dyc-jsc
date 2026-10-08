# DYC / JSC website

Complete bilingual static website, ready for GitHub Pages. All board images, memories photos, and bylaws reader pages are included. No build command or package installation is needed.

## Publish

1. Create a new public repository named `dyc-jsc` in the intended GitHub account.
2. Extract this ZIP and upload its contents to the repository root. `index.html` must be at the root, next to `assets`, `app.js`, and `style.css`. Upload the extracted files, not the ZIP.
3. In Settings → Pages, select Deploy from a branch, then `main` and `/ (root)`, and save.
4. Use the published URL shown in GitHub Pages settings. For Derek-Nichols/dyc-jsc, the default address is https://derek-nichols.github.io/dyc-jsc/. A custom domain can be configured separately.

## Contact form

Messages still go through FormSubmit to dycjsc@gmail.com. JavaScript sets the thank-you URL to the current host and folder, including custom domains. Without JavaScript, FormSubmit uses its default confirmation page. The first submission on a new host may require email activation. Confirm receipt after deployment; no test message was sent during preparation.

## Content and maintenance

- `index.html`: homepage and calendar layout.
- `about.html`: Who We Are, history, and mission.
- `board.html`, `bylaws.html`, `community.html`, `memories.html`: board, inline bylaws reader, camp, and gallery.
- `get-involved.html`, `membership.html`, `contact.html`: participation pages.
- `terms.html`, `privacy.html`: bilingual policy pages.
- `app.js`: language switching, calendar, dropdowns, gallery, bylaws reader, and contact redirect.
- `style.css`: shared responsive styles.

Update both `data-en` and `data-fr` when changing translated copy. `mission.html` and `resources.html` retain redirects for old links. The original Sites address remains live until a separate change is requested.

After publishing, check desktop and mobile navigation, English/French switching, all images, the bylaws reader, and contact delivery.

Photos, logos, and content retain their existing rights; this repository does not grant an open-source license to them.
