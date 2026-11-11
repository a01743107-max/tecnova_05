'use strict';
const $ = selector => document.querySelector(selector);
const safeText = value => String(value ?? '');

function renderProjects() {
  const grid = $('#projects-grid');
  if (!grid || typeof SITE_DATA === 'undefined') return;
  SITE_DATA.projects.forEach((project, index) => {
    const article = document.createElement('article');
    article.className = 'project-card reveal';
    const top = document.createElement('div'); top.className = 'project-top';
    const icon = document.createElement('span'); icon.className='project-symbol'; icon.textContent = safeText(project.icon);
    const number = document.createElement('span'); number.className='project-number'; number.textContent = safeText(project.number || String(index+1).padStart(2,'0'));
    top.append(icon, number);
    const info = document.createElement('div'); info.className='project-info';
    const tag = document.createElement('span'); tag.className='project-tag'; tag.textContent = safeText(project.tag);
    const title = document.createElement('h3'); title.textContent = safeText(project.title);
    const description = document.createElement('p'); description.textContent = safeText(project.description);
    const status = document.createElement('span'); status.className='project-status'; status.textContent = safeText(project.status);
    info.append(tag,title,description,status); article.append(top,info); grid.append(article);
  });
}
function renderTeam() {
  const grid = $('#team-grid');
  if (!grid || typeof SITE_DATA === 'undefined') return;
  SITE_DATA.members.forEach(member => {
    const article=document.createElement('article'); article.className='member-card reveal';
    const portrait=document.createElement('div'); portrait.className='member-portrait';
    if (member.image) {
      const img=document.createElement('img'); img.src=member.image; img.alt=`Foto de ${safeText(member.name)}`; img.loading='lazy'; portrait.append(img);
    } else {
      const monogram=document.createElement('span'); monogram.textContent=safeText(member.initials || '✦'); portrait.append(monogram);
    }
    const info=document.createElement('div');info.className='member-info';
    const name=document.createElement('h3');name.textContent=safeText(member.name);
    const role=document.createElement('p');role.textContent=safeText(member.role);
    info.append(name,role);article.append(portrait,info);grid.append(article);
  });
}
renderProjects(); renderTeam();
$('#year').textContent = new Date().getFullYear();
const toggle=$('.nav-toggle');const nav=$('#nav-menu');
if(toggle && nav) {
  toggle.addEventListener('click',()=> {const open=toggle.getAttribute('aria-expanded')==='true';toggle.setAttribute('aria-expanded',String(!open));toggle.setAttribute('aria-label',open?'Abrir menú':'Cerrar menú');nav.classList.toggle('open',!open);});
  nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','Abrir menú');}));
}
const animated=document.querySelectorAll('.reveal');
if('IntersectionObserver' in window) {
  const observer=new IntersectionObserver((entries,obs)=>{for(const entry of entries) if(entry.isIntersecting){entry.target.classList.add('visible');obs.unobserve(entry.target);}}, {threshold:0.12,rootMargin:'0px 0px -30px 0px'});
  animated.forEach(el=>observer.observe(el));
} else { animated.forEach(el=>el.classList.add('visible')); }
