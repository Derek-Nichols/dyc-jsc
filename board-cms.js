// The board roster is maintained as an ordered list in Sveltia CMS.
const boardGrid=document.querySelector('.board-grid');
if(boardGrid){fetch('content/board/members.json',{cache:'no-cache'}).then(r=>{if(!r.ok)throw Error('Roster unavailable');return r.json()}).then(data=>{
 if(!Array.isArray(data.members))throw Error('Invalid roster');const fragment=document.createDocumentFragment();
 data.members.filter(m=>m.visible!==false).sort((a,b)=>Number(a.order??999)-Number(b.order??999)).forEach(m=>{
 const figure=document.createElement('figure');figure.className='board-card';const img=document.createElement('img');
 const photo=String(m.photo||'').replace(/^\\/+/, '');if(photo&&!photo.includes('..')&&!/^[a-z]+:/i.test(photo))img.src=photo;
 img.alt=String(m.alt||m.name||'');img.width=1080;img.height=1350;img.loading='lazy';img.decoding='async';
 const caption=document.createElement('figcaption');const h=document.createElement('h3');h.textContent=String(m.name||'');
 const p=document.createElement('p');p.dataset.en=String(m.position_en||'');p.dataset.fr=String(m.position_fr||m.position_en||'');p.textContent=document.documentElement.lang==='fr'?p.dataset.fr:p.dataset.en;
 caption.append(h,p);figure.append(img,caption);fragment.append(figure);
 });boardGrid.replaceChildren(fragment);
 }).catch(e=>console.warn('Using original board cards:',e))}
