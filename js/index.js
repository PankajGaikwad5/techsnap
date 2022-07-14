// const notification = document.querySelector('.notification');
const notifications = document.querySelector('.notifications');
const sidebar = document.querySelector('.sidebar');
const mobSidebar = document.querySelector('.mob-sidebar');
const arrow = document.querySelector('.arrow');
const arrrow = document.querySelector('.arrrow');
const mobiSidebar = document.querySelector('.mobisidebar');
const popup = document.querySelector('.pop-up')
const main = document.querySelector('.main')
const poppup = document.querySelector('.poppup')
const profile = document.querySelector('.profile')
const profiledrop = document.querySelector('.profiledrop')

const dropdown = (text)=> {
  if (text === 'notification') {
    // notification.classList.toggle('hidden')
    notifications.classList.toggle('hidden')
    if (!profiledrop.classList.contains('hidden')) {
      profile.classList.add('hidden')
      profiledrop.classList.add('hidden')
    }
  } else if (text === 'profile') {
    profile.classList.toggle('hidden')
    profiledrop.classList.toggle('hidden')
    if (!notifications.classList.contains('hidden')) {
      notifications.classList.add('hidden')
    }
  }
}

const sideDropdown = () => {
  sidebar.classList.toggle('hidden');
  sidebar.classList.toggle('flex');
  mobSidebar.classList.toggle('hidden');
  mobSidebar.classList.toggle('flex');
  arrrow.classList.toggle('rotate-180');
  arrrow.classList.toggle('rotate-90');
  arrow.classList.toggle('rotate-180');
  arrow.classList.toggle('rotate-90')
};

const openSidebar = () => {
  mobiSidebar.classList.toggle('hidden');
  mobiSidebar.classList.toggle('absolute');
  arrow.classList.toggle('rotate-90');
  arrow.classList.toggle('rotate-180');
};

const poPup = (text) => {
  main.classList.toggle('opacity-40')
  if (text === 'edit') {
    popup.classList.toggle('hidden')
  } else if (text === 'add') {
    poppup.classList.toggle('hidden')
  }
}
const filter = document.querySelector('.filter')
const filterBtn = ()=> {
  filter.classList.toggle('hidden')
}