// CMS-managed events for the existing homepage calendar.
let cmsEvents = [];
function eventDateKey(date) { return [date.getFullYear(),String(date.getMonth()+1).padStart(2,'0'),String(date.getDate()).padStart(2,'0')].join('-'); }
function updateCmsEventDisplay() {
  const days=document.querySelector('#calendar-days');
  if(!days) return;
  days.querySelectorAll('button[data-day]').forEach(button=>{
    const date=new Date(calendarYear,calendarMonth,Number(button.dataset.day));
    const hasEvent=cmsEvents.some(event=>event.visible!==false&&event.date===eventDateKey(date));
    button.classList.toggle('has-event',hasEvent);
    if(hasEvent) button.style.textDecoration='underline'; else button.style.textDecoration='';
  });
  const selection=document.querySelector('#calendar-selection');
  if(!selection) return;
  const matching=cmsEvents.filter(event=>event.visible!==false&&event.date===eventDateKey(selectedCalendarDate));
  if(!matching.length) return;
  selection.querySelectorAll('.cms-event').forEach(node=>node.remove());
  const message=selection.querySelector('p');if(message) message.remove();
  for(const event of matching){
    const article=document.createElement('article');article.className='cms-event';
    const title=document.createElement('h4');title.textContent=lang==='fr'?(event.title_fr||event.title_en):event.title_en;article.append(title);
    if(event.description_en||event.description_fr){const description=document.createElement('p');description.textContent=lang==='fr'?(event.description_fr||event.description_en):event.description_en;article.append(description)}
    if(event.url && /^https?:\/\//i.test(event.url)){const link=document.createElement('a');link.href=event.url;link.target='_blank';link.rel='noopener noreferrer';link.textContent=lang==='fr'?'En savoir plus':'Learn more';article.append(link)}
    selection.append(article);
  }
}
const originalCalendarRender=renderCalendar;
renderCalendar=function(){originalCalendarRender();updateCmsEventDisplay()};
fetch('content/events/events.json',{cache:'no-cache'}).then(response=>{if(!response.ok)throw Error('No event data');return response.json()}).then(data=>{cmsEvents=Array.isArray(data.events)?data.events:[];renderCalendar()}).catch(error=>console.warn('Events unavailable:',error));
