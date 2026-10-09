# DYC/JSC CMS integration (development only)

This branch is intentionally separate from main. Existing HTML, CSS, JS and assets have not been modified.

## Pilot
- Sveltia CMS shell at /admin/
- GitHub-backed bilingual board member content schema
- Future content files live in content/board/

## Not yet enabled
- GitHub OAuth/authentication: a compatible secure OAuth provider must be configured; do not place client secrets in this public repository.
- Granular role permissions: CMS fields alone do not enforce roles.
- Pull-request review workflow and branch protection: configure and test before inviting editors.
- Website rendering from CMS data: the current board.html is unchanged and does not yet read content/board/.
- Visual layout builder and bilingual validation.
- Preview environment: GitHub Pages publishes main, not this development branch.

## Safety
Do not merge this branch into main until authentication, permissions, previews, bilingual content, and rendering are tested. Do not assume /admin/ is private merely because it is unlinked.
