// Custom Scripts
// Custom scripts

// Мобильное меню бургер
function burgerMenu() {
  const header = document.querySelector('header');

  if (!header) {
    return null
  }
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

function validateForm() {
  // const container = document.querySelector('.form-data');

  // if (!container) {
  //   return null
  // }

  // Получаем значения полей
  var firstName = document.querySelector('input[placeholder="Имя"]').value;
  var lastName = document.querySelector('input[placeholder="Фамилия"]').value;
  var phone = document.querySelector('input[type="tel"]').value;
  var email = document.querySelector('input[type="email"]').value;
  var password = document.querySelector('input[type="password"]').value;
  var confirmPassword = document.querySelectorAll('input[type="password"]')[1].value;

  // Проверка заполненности полей
  if (firstName === '' || lastName === '' || phone === '' || email === '' || password === '' || confirmPassword === '') {
    alert('Пожалуйста, заполните все поля.');
    return false;
  }

  // Проверка формата email
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert('Пожалуйста, введите правильный адрес электронной почты.');
    return false;
  }

  // Проверка формата телефона
  var phoneRegex = /^\d{3}\s\d{2}\s\d{2}$/;
  if (!phoneRegex.test(phone)) {
    alert('Пожалуйста, введите правильный номер телефона (в формате: 999 99 99).');
    return false;
  }

  // Проверка совпадения паролей
  if (password !== confirmPassword) {
    alert('Пароли не совпадают.');
    return false;
  }

  // Если все проверки пройдены успешно, можно отправить форму
  return true;
}

// Получаем форму и назначаем обработчик на событие отправки
var form = document.querySelector('.form-data');

if (form) {
  form.addEventListener('submit', function (event) {
    var enctype = form.getAttribute('enctype');

    if (enctype === 'multipart/form-data') {
      // form-data присутствует
      if (!validateForm()) {
        event.preventDefault(); // Отменяем отправку формы, если валидация не пройдена
      }
    } else {
      // form-data отсутствует
      event.preventDefault(); // Отменяем отправку формы
      console.log("Форма не содержит form-data");
    }

    console.log("Успешно отправлено");
  });
} else {
  console.log("Элемент формы не найден");
}

function inputMask1() {
  // Получаем поле телефона
  var phoneInput = document.querySelector('input.form-data__input');

  // Проверяем, что поле телефона существует
  if (phoneInput) {
    // Функция для применения маски к полю телефона
    function applyPhoneMask(input) {
      // Удаление всех символов, кроме цифр
      var cleanedValue = input.value.replace(/\D/g, '');

      // Добавление пробелов в маску
      var formattedValue = cleanedValue.slice(0, 3) + ' ' + cleanedValue.slice(3, 5) + ' ' +
        cleanedValue.slice(5, 7);

      // Применение отформатированного значения обратно к полю ввода
      input.value = formattedValue;
    }

    // Добавляем обработчик события ввода
    phoneInput.addEventListener('input', function () {
      applyPhoneMask(this);
    });
  } else {
    console.log("Поле телефона не найдено");
  }
}

inputMask1();

function inputMask2() {
  // Получаем поле ввода с классом "form__input" и типом "tel"
  var inputField = document.querySelector('.form__input[type="tel"]');

  if (!inputField) {
    return null;
  }

  // Функция для применения маски к полю ввода телефона
  function applyPhoneMask(input) {
    // Получаем текущее значение поля ввода
    var currentValue = input.value;

    // Удаление всех символов, кроме цифр
    var cleanedValue = currentValue.replace(/\D/g, '');

    // Ограничение количества цифр
    var maxLength = 11;
    cleanedValue = cleanedValue.slice(0, maxLength);

    // Форматирование номера телефона
    var formattedValue = '';
    var match = cleanedValue.match(/^(\d{1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})$/);

    if (match) {
      formattedValue = '+7 ';
      if (match[2]) {
        formattedValue += '(' + match[2];
      }
      if (match[3]) {
        formattedValue += ') ' + match[3];
      }
      if (match[4]) {
        formattedValue += '-' + match[4];
      }
      if (match[5]) {
        formattedValue += '-' + match[5];
      }
    }

    // Определение, изменилось ли значение поля ввода
    var valueChanged = currentValue !== formattedValue;

    // Применение отформатированного значения обратно к полю ввода, только если значение изменилось
    if (valueChanged) {
      input.value = formattedValue;
    }
  }


  // Добавляем обработчик события ввода
  inputField.addEventListener('input', function () {
    applyPhoneMask(this);
  });
}

inputMask2();



function instructionsList() {
  const container = document.querySelector('.instructions-list');

  if (!container) {
    return null;
  }

  // Получаем все элементы с классом instructions-list__item-arrow
  const arrows = document.querySelectorAll('.instructions-list__item-arrow');

  // Перебираем каждый элемент и добавляем обработчик клика
  arrows.forEach(arrow => {
    arrow.addEventListener('click', () => {
      const item = arrow.closest('.instructions-list__item');
      item.classList.toggle('active');
    });
  });

  // Получаем все элементы с классами instructions-list__item-link и instructions-list__sublink
  const links = document.querySelectorAll('.instructions-list__item-link, .instructions-list__sublink');

  // Перебираем каждый элемент и добавляем обработчик клика
  links.forEach(link => {
    link.addEventListener('click', () => {
      const items = document.querySelectorAll('.instructions-list__item.active');
      items.forEach(item => {
        item.classList.remove('active');
      });
    });
  });

  const burgerDefault = document.querySelector('[data-instructions-list-burger]');
  const burgerClose = document.querySelector('[data-instructions-list-burger-close]');
  // const body = document.querySelector('body')

  burgerDefault.addEventListener('click', () => {
    container.classList.add('active');
    // body.classList.add('locked')
  });

  burgerClose.addEventListener('click', () => {
    container.classList.remove('active');
    // body.classList.remove('locked')
  });

  // Добавляем обработчик клика на объект document
  document.addEventListener('click', (event) => {
    const target = event.target;

    // Проверяем, является ли целевой элемент бургером или элементом списка инструкций
    const isBurger = target === burgerDefault || target === burgerClose;
    const isInstructionsItem = target.closest('.instructions-list') === container;

    // Если целевой элемент не является бургером и не является элементом списка инструкций,
    // то удаляем классы active у контейнера и элементов списка
    if (!isBurger && !isInstructionsItem) {
      container.classList.remove('active');

      const items = document.querySelectorAll('.instructions-list__item.active');
      items.forEach(item => {
        item.classList.remove('active');
      });
    }
  });


  // Перебираем каждый элемент и добавляем обработчик клика
  links.forEach(link => {
    link.addEventListener('click', (event) => {
      const items = document.querySelectorAll('.instructions-list__item.active');
      items.forEach(item => {
        item.classList.remove('active');
      });

      container.classList.remove('active');

      event.stopPropagation();
    });
  });

}

instructionsList();


function container() {
  const container = document.querySelector('.services')
  const body = document.querySelector('body')

  if (!container) {
    return null
  }

  var timeoutId; // переменная для хранения идентификатора таймера

  // Функция для удаления класса "active" с задержкой
  function removeActiveClassWithDelay() {
    timeoutId = setTimeout(function () {
      container.classList.remove('show');
      body.classList.remove('locked');
    }, 500); // задержка в 0,5 секунды
  }

  // Добавление обработчика события при наведении на "services" и его дочерние элементы
  container.addEventListener('mouseover', function () {
    clearTimeout(timeoutId); // очистка таймера при наведении на элемент
    container.classList.add('show');
    body.classList.add('locked');
  });

  // Добавление обработчика события при уходе курсора с "services"
  container.addEventListener('mouseout', removeActiveClassWithDelay);
}

if (window.matchMedia("(min-width: 991px)").matches) {
  container()
}


