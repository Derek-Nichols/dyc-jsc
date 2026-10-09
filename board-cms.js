// Board profiles managed in Sveltia CMS.
// The file list is fixed for this initial integration; adding a new profile
// requires registering its JSON filename here.
const boardProfileFiles = [
  'president', 'vice-president', 'treasurer', 'secretary',
  'creative-director', 'francophone-director', 'indigenous-director',
  'camp-director', 'national-youth-director'
];
const boardGrid = document.querySelector('.board-grid');
if (boardGrid) {
  Promise.all(boardProfileFiles.map(async (file) => {
    const response = await fetch('content/board/' + file + '.json', { cache: 'no-cache' });
    if (!response.ok) throw new Error('Could not load board profile: ' + file);
    const data = await response.json();
    return { ...data, file };
  })).then(profiles => {
    const fragment = document.createDocumentFragment();
    profiles.filter(profile => profile.visible !== false)
      .sort((a, b) => Number(a.order ?? 999) - Number(b.order ?? 999))
      .forEach(profile => {
        const figure = document.createElement('figure');
        figure.className = 'board-card';
        const img = document.createElement('img');
        // Local paths are expected for CMS-managed board photos.
        const photo = String(profile.photo || '').replace(/^\/+/, '');
        if (photo && !photo.includes('..') && !/^[a-z]+:/i.test(photo)) img.src = photo;
        img.alt = String(profile.alt || profile.name || '');
        img.width = 1080;
        img.height = 1350;
        img.loading = 'lazy';
        img.decoding = 'async';
        const caption = document.createElement('figcaption');
        const heading = document.createElement('h3');
        heading.textContent = String(profile.name || '');
        const position = document.createElement('p');
        position.dataset.en = String(profile.position_en || '');
        position.dataset.fr = String(profile.position_fr || profile.position_en || '');
        position.textContent = document.documentElement.lang === 'fr' ? position.dataset.fr : position.dataset.en;
        caption.append(heading, position);
        figure.append(img, caption);
        fragment.append(figure);
      });
    boardGrid.replaceChildren(fragment);
  }).catch(error => {
    console.warn('Using the original board cards because CMS content could not load.', error);
  });
}
