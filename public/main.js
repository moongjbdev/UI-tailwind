const topMenu = document.getElementById('moongjb-top-menu');
const toggleTopMenuIcon = document.getElementById('moongjb-toggle-top-menu-icon');


document.addEventListener('click', (e) => {
  if(toggleTopMenuIcon.contains(e.target)){
    topMenu.classList.toggle('hidden');
    topMenu.classList.toggle('moongjb-topmenu-expanded');
  }else {
    if(topMenu.classList.contains('moongjb-topmenu-expanded')){
      topMenu.classList.remove('moongjb-topmenu-expanded');
      topMenu.classList.add('hidden');
      
    }
  }
});