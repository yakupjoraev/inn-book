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

function heroSlider() {
  const container = document.querySelector('.hero');

  if (!container) {
    return null
  }

  const swiper = new Swiper('.hero__slider', {
    // Optional parameters
    // direction: 'vertical',
    loop: false,

    // If we need pagination
    pagination: {
      el: '.hero__slider-pagination',
    },

  });

}
heroSlider();

function benefitsSlider() {
  const container = document.querySelector('.benifits');

  if (!container) {
    return null
  }

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

}
benefitsSlider();

function possibilitySlider() {
  const container = document.querySelector('.possibility');

  if (!container) {
    return null
  }


  if (window.matchMedia("(max-width: 767px)").matches) {

    const swiper3 = new Swiper('.possibility-main__slider', {
      // Optional parameters
      // direction: 'vertical',
      spaceBetween: 10,
      loop: false,

      // If we need pagination
      pagination: {
        el: '.possibility-main__slider-pagination',
      },

    });

    const swiper4 = new Swiper('.possibility-secondary__slider', {
      // Optional parameters
      // direction: 'vertical',
      spaceBetween: 10,
      loop: false,

      // If we need pagination
      pagination: {
        el: '.possibility-secondary__slider-pagination',
      },

    });

  }
}
possibilitySlider();


function reviewsSlider() {
  const container = document.querySelector('.reviews');

  if (!container) {
    return null
  }

  const swiper5 = new Swiper('.reviews__slider', {
    // Optional parameters
    slidesPerView: 1,

    navigation: {
      nextEl: '.reviews__slider-next',
      prevEl: '.reviews__slider-prev',
    },

    // Responsive breakpoints
    breakpoints: {

      // when window width is >= 480px
      767: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      // when window width is >= 640px
      1025: {
        slidesPerView: "auto",
        spaceBetween: 40
      }
    }

  });
}

reviewsSlider()

function monitoringSlider() {
  const container = document.querySelector('.monitoring-price');

  if (!container) {
    return null
  }


  if (window.matchMedia("(max-width: 767px)").matches) {

    const swiper3 = new Swiper('.monitoring-price__advatages-slider', {
      // Optional parameters
      // direction: 'vertical',
      spaceBetween: 10,
      loop: false,

      // If we need pagination
      pagination: {
        el: '.monitoring-price__advatages-slider-pagination',
      },

    });


  }
}
monitoringSlider();


const openModalBtns = document.querySelectorAll('.open-modal-btn');
const closeModalBtns = document.querySelectorAll('.close-modal-btn');
const modals = document.querySelectorAll('.modal');

openModalBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const modalId = btn.dataset.modalId;
    const modal = document.getElementById(modalId);
    modal.classList.add('show');
  });
});

closeModalBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const modal = btn.closest('.modal');
    modal.classList.remove('show');
  });
});

window.addEventListener('click', (event) => {
  if (event.target.classList.contains('modal')) {
    event.target.classList.remove('show');
  }
});
