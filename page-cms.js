// Bilingual website text managed by Sveltia CMS. Existing HTML remains the fallback.
(async function () {
  const page = document.body.dataset.cmsPage;
  if (!page) return;
  try {
    const response = await fetch('content/pages/' + page + '.json', {cache:'no-cache'});
    if (!response.ok) throw new Error('CMS page content unavailable');
    const content = await response.json();
    for (const item of content.sections || []) {
      const el = document.querySelector('[data-cms-key="' + CSS.escape(item.key) + '"]');
      if (!el) continue;
      // Decode entities inherited from the original HTML attributes.
      const decode = value => { const node = document.createElement('textarea'); node.innerHTML = String(value ?? ''); return node.value; };
      el.dataset.en = decode(item.en);
      el.dataset.fr = decode(item.fr);
    }
    if (typeof setLanguage === 'function') setLanguage(document.documentElement.lang === 'fr' ? 'fr' : 'en');
  } catch (error) { console.warn('Using original website text:', error); }
})();
