// Custom scripts

// Мобильное меню бургер
function burgerMenu() {
  const burger = document.querySelector('[data-burger]')
  const menu = document.querySelector('[data-menu]')
  const body = document.querySelector('body')
  burger.addEventListener('click', () => {
    if (!menu.classList.contains('active')) {
      menu.classList.add('active')
      burger.classList.add('active-burger')
      body.classList.add('locked')
    } else {
      menu.classList.remove('active')
      burger.classList.remove('active-burger')
      body.classList.remove('locked')
    }
  })
  //снять классы при клике на элементы меню
  const menuItems = document.querySelectorAll('[data-menu-item]')

  menuItems.forEach(item => {
    item.addEventListener('click', function () {
      menu.classList.remove('active')
      burger.classList.remove('active-burger')
      body.classList.remove('locked')
    })
  });

  // Вот тут мы ставим брейкпоинт навбара
  window.addEventListener('resize', () => {
    if (window.innerWidth > 991.98) {
      menu.classList.remove('active')
      burger.classList.remove('active-burger')
      body.classList.remove('locked')
    }
  })
}
burgerMenu()


// Вызываем эту функцию, если нам нужно зафиксировать меню при скролле.
function fixedNav() {
  const nav = document.querySelector('nav')

  // тут указываем в пикселях, сколько нужно проскроллить что бы наше меню стало фиксированным
  const breakpoint = 1
  if (window.scrollY >= breakpoint) {
    nav.classList.add('fixed__nav')
  } else {
    nav.classList.remove('fixed__nav')
  }
}
window.addEventListener('scroll', fixedNav)


function subMenuList() {
  let menuItems = document.querySelectorAll('[data-submenu-item]');

  menuItems.forEach(menuItem => {
    const arrow = menuItem.querySelector('[data-arrow]');
    const subList = menuItem.querySelector('[data-submenu-list]');

    arrow.addEventListener('click', () => {
      menuItem.classList.toggle('active')
    })

    window.addEventListener('resize', () => {
      if (window.innerWidth > 991.98) {
        menuItem.classList.remove('active')
      }
    })

    const menuItems = document.querySelectorAll('[data-menu-item]')

    menuItems.forEach(item => {
      item.addEventListener('click', function () {
        menuItem.classList.remove('active')
      })
    });

  });
}

subMenuList();

const swiper = new Swiper('.hero__slider', {
  // Optional parameters
  // direction: 'vertical',
  loop: false,

  // If we need pagination
  pagination: {
    el: '.hero__slider-pagination',
  },

});

if (window.matchMedia("(max-width: 767px)").matches) {
  const swiper2 = new Swiper('.benifits-api__slider', {
    // Optional parameters
    // direction: 'vertical',
    spaceBetween: 10,
    loop: false,

    // If we need pagination
    pagination: {
      el: '.benifits-api__slider-pagination',
    },

  });

}