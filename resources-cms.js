// Extra resources managed through the CMS, without replacing the existing directory.
(async function(){
  try {
    const response=await fetch('content/resources/entries.json',{cache:'no-cache'});
    if(!response.ok) return;
    const data=await response.json();
    for(const entry of data.entries||[]){
      if(entry.visible===false||!entry.name)continue;
      const panel=Array.from(document.querySelectorAll('[data-resource-region]')).find(node=>node.dataset.resourceRegion===entry.region);
      if(!panel)continue;
      const list=panel.querySelector('.connection-list');if(!list)continue;
      const normalized=value=>String(value||'').toLocaleLowerCase().trim().replace(/\s+/g,' ');
      if(Array.from(list.querySelectorAll('.connection-name')).some(node=>normalized(node.textContent)===normalized(entry.name)))continue;
      const li=document.createElement('li');li.className='pdf-resource';
      const validUrl=/^(https?:\/\/|tel:|mailto:)/i.test(entry.url||'');
      const holder=document.createElement(validUrl?'a':'span');
      if(validUrl){holder.href=entry.url;if(/^https?:\/\//i.test(entry.url)){holder.target='_blank';holder.rel='noopener noreferrer'}}
      const name=document.createElement('span');name.className='connection-name';name.textContent=entry.name;holder.append(name);
      if(entry.contact){const contact=document.createElement('span');contact.className='connection-contact';contact.textContent=entry.contact;holder.append(contact)}
      li.append(holder);list.append(li);
      Array.from(list.children).sort((a,b)=>a.querySelector('.connection-name').textContent.localeCompare(b.querySelector('.connection-name').textContent,'en',{sensitivity:'base'})).forEach(node=>list.append(node));
      const count=panel.querySelector('.resource-count');if(count)count.textContent=list.children.length;
    }
  }catch(error){console.warn('CMS resources unavailable:',error)}
})();
