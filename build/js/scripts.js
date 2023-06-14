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

function inputMask1() {
  // Получаем поле телефона
  var phoneInput = document.querySelector('[data-form-tel]');

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
console.log(inputMask1());


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
  const container = document.querySelector('.services');
  const btn = document.querySelector('.menu__services-close')
  // const body = document.querySelector('body')

  if (!container) {
    return null
  }



  var timeoutId; // переменная для хранения идентификатора таймера

  // Функция для удаления класса "active" с задержкой
  function removeActiveClassWithDelay() {
    timeoutId = setTimeout(function () {
      container.classList.remove('show');
      // body.classList.remove('locked');
    }, 500); // задержка в 0,5 секунды
  }

  // Добавление обработчика события при наведении на "services" и его дочерние элементы
  container.addEventListener('mouseover', function () {
    clearTimeout(timeoutId); // очистка таймера при наведении на элемент
    container.classList.add('show');
    // body.classList.add('locked');
  });

  // Добавление обработчика события при уходе курсора с "services"
  container.addEventListener('mouseout', removeActiveClassWithDelay);

  if (btn) {
    btn.addEventListener('click', () => {
      container.classList.remove('show');
    })
  }


}

if (window.matchMedia("(min-width: 991px)").matches) {
  container()
}

function passwordSee() {
  const passwordGroups = document.querySelectorAll('.form-group input[type="password"]');

  passwordGroups.forEach(passwordGroup => {
    const passwordInput = passwordGroup;
    const eyeButton = passwordGroup.parentNode.querySelector('.form-eye');
    const eyeImage = eyeButton.querySelector('img');

    eyeButton.addEventListener('click', function () {
      if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        eyeImage.src = './img/eye-open.svg';
      } else {
        passwordInput.type = 'password';
        eyeImage.src = './img/eye-close.svg';
      }
    });
  });


}

passwordSee();

const getTemplate = (data = [], placeholder, selectedId) => {
  let text = placeholder ?? 'placeholder не указан'

  const items = data.map(item => {
    let cls = ''
    if (item.id === selectedId) {
      text = item.value
      cls = 'selected'
    }
    return `
          <li class="select__item ${cls}" data-type="item" data-id="${item.id}">${item.value}</li>
      `
  })
  return `
      <input type="hidden" class="hidden__input">
      <div class="select__backdrop" data-type="backdrop"></div>
      <div class="select__input" data-type="input">
          <span data-type="value">${text}</span>
          <img src="./img/down-arrow.svg" alt="arrow" data-type="arrow" class="select__arrow">
      </div>
      <div class="select__dropdown">
          <ul class="select__list">
              ${items.join('')}
          </ul>
      </div>
  `
}
class Select {
  constructor(selector, options) {
    this.$el = document.querySelector(selector)
    this.options = options
    this.selectedId = options.selectedId

    this.render()
    this.setup()
  }

  render() {
    const { placeholder, data } = this.options
    this.$el.classList.add('select')
    this.$el.innerHTML = getTemplate(data, placeholder, this.selectedId)
  }
  setup() {
    this.clickHandler = this.clickHandler.bind(this)
    this.$el.addEventListener('click', this.clickHandler)
    this.$arrow = this.$el.querySelector('[data-type="arrow"]')
    this.$value = this.$el.querySelector('[data-type="value"]')
  }

  clickHandler(event) {
    const { type } = event.target.dataset
    if (type === 'input') {
      this.toggle()
    } else if (type === 'item') {
      const id = event.target.dataset.id
      this.select(id)
    } else if (type === 'backdrop') {
      this.close()
    }
  }

  get isOpen() {
    return this.$el.classList.contains('open')
  }

  get current() {
    return this.options.data.find(item => item.id === this.selectedId)
  }

  select(id) {
    this.selectedId = id
    this.$value.textContent = this.current.value

    this.$el.querySelectorAll(`[data-type="item"]`).forEach(el => el.classList.remove('selected'))
    this.$el.querySelector(`[data-id="${id}"]`).classList.add('selected')

    this.options.onSelect ? this.options.onSelect(this.current) : null
    this.close()
  }

  toggle() {
    this.isOpen ? this.close() : this.open()
  }

  open() {
    this.$el.classList.add('open')
    this.$arrow.classList.add('open')
  }

  close() {
    this.$el.classList.remove('open')
    this.$arrow.classList.remove('open')
  }

  destroy() {
    this.$el.removeEventListener('click', this.clickHandler)
    this.$el.innerHTML = ''
  }
}

const select1 = document.querySelector('#select')
const select2 = document.querySelector('#select2')

if (select1) {
  // Инициализация плагина
  const select = new Select('#select', {
    placeholder: 'Выберите элемент',
    selectedId: '1',
    data: [
      { id: '1', value: '+7' },
      { id: '2', value: '+8' },
      { id: '3', value: '+9' },
    ],
    onSelect(item) {
      const input = document.querySelector('.hidden__input')
      input.value = item.value
    }
  });

}

if (select2) {
  const select2 = new Select('#select2', {
    placeholder: 'Выберите элемент',
    selectedId: '1',
    data: [
      { id: '1', value: '+7' },
      { id: '2', value: '+8' },
      { id: '3', value: '+9' },
    ],
    onSelect(item) {
      const input = document.querySelector('.hidden__input')
      input.value = item.value
    }
  })

}



function price() {
  const container = document.querySelector('.price');

  if (!container) {
    return null
  }

  // Находим элементы плюса, минуса и стоимости
  var plusButton = document.querySelector('.plus');
  var minusButton = document.querySelector('.minus');
  var priceElement = document.querySelector('.counter');
  var priceCalcCount = document.querySelector('.counter-month');

  // Устанавливаем начальное значение стоимости
  var price = parseInt(priceElement.textContent); // Извлекаем только числовое значение из строки

  // Функция обработки клика на плюс
  plusButton.addEventListener('click', function () {
    price += 1; // Увеличиваем значение стоимости на 1
    updatePrice(); // Обновляем отображение стоимости
  });

  // Функция обработки клика на минус
  minusButton.addEventListener('click', function () {
    if (price >= 1) { // Проверяем, чтобы значение стоимости было больше или равно 1
      price -= 1; // Уменьшаем значение стоимости на 1
      updatePrice(); // Обновляем отображение стоимости
    }
  });

  // Функция для обновления отображения стоимости
  function updatePrice() {
    priceElement.textContent = price; // Обновляем значение внутри .counter
    priceCalcCount.textContent = formatPrice(price * 1000) + ' ₽'; // Обновляем значение внутри .counter-month с добавлением знака рубля
  }

  // Функция для форматирования числа в формат "X XXX"
  function formatPrice(price) {
    return price.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 ');
  }


}
price();

function priceList() {
  const container = document.querySelector('.price');

  if (!container) {
    return null
  }

  // Получаем все кнопки плюс и минус
  var plusButtons = document.querySelectorAll('.plus');
  var minusButtons = document.querySelectorAll('.minus');

  // Текущий индекс элемента
  var currentIndex = 1;

  // Добавляем обработчики событий для кнопок плюс
  plusButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      var priceItems = document.querySelectorAll('.price__item');

      if (currentIndex < priceItems.length) {
        priceItems[currentIndex].classList.add('active');
        currentIndex++;
      }
    });
  });

  // Добавляем обработчики событий для кнопок минус
  minusButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      var priceItems = document.querySelectorAll('.price__item');

      if (currentIndex > 0) {
        currentIndex--;
        priceItems[currentIndex].classList.remove('active');
      }
    });
  });

}

priceList();
