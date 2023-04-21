const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav");
const navExit = document.querySelector(".nav__exit");
const body = document.querySelector("body");

const testArray = [
  { title: "Ваш пол:", inputs: { item1: "Мужчина", item2: "Женщина" } },
  {
    title: "Укажите ваш возраст:",
    inputs: {
      item1: "До 18",
      item2: "От 18 до 28",
      item3: "от 29 до 35",
      item4: "От 36",
    },
  },
  {
    title: "Выберите лишнее:",
    inputs: {
      item1: "Дом",
      item2: "Шалаш",
      item3: "Бунгало",
      item4: "Скамейка",
      item5: "Хижина",
    },
  },
  {
    title: "Выберите лишнее:",
    inputs: {
      item1: "Дом",
      item2: "Шалаш",
      item3: "Бунгало",
      item4: "Скамейка",
      item5: "Хижина",
    },
  },
  {
    title: "Продолжите числовой ряд: 18 20 24 32",
    inputs: {
      item1: "62",
      item2: "48",
      item3: "74",
      item4: "57",
      item5: "60",
      item6: "77",
    },
  },
  {
    title: "Выберите цвет, который сейчас найболее вам приятен:",
    bigBlocks: {
      item1: "grey",
      item2: "blue",
      item3: "green",
      item4: "red",
      item5: "yellow",
      item6: "brown",
      item7: "black",
      item8: "purple",
      item9: "aqua",
    },
  },
  {
    title:
      "Отдохните пару секунд, еще раз Выберите цвет, который сейчас наиболее Вам приятен:",
    bigBlocks: {
      item1: "grey",
      item2: "aqua",
      item3: "brown",
      item4: "green",
      item5: "black",
      item6: "red",
      item7: "purple",
      item8: "yellow",
      item9: "blue",
    },
  },
  {
    title: "Какой из городов лишний?",
    inputs: {
      item1: "Вашингтон",
      item2: "Лондон",
      item3: "Париж",
      item4: "Нью-Йорк",
      item5: "Будапешт",
      item6: "Оттава",
    },
  },
  {
    title: "Выберите правильную фигуру из четырёх пронумерованных.",
    image: "assets/images/image1.png",
    smallBlocks: {
      item1: "1",
      item2: "2",
      item3: "3",
      item4: "4",
    },
  },
  {
    title: "Вам привычнее и важнее:",
    inputs: {
      item1: "Наслаждаться каждой минутой проведенного времени",
      item2: "Быть устремленными мыслями в будущее",
      item3: "Учитывать в ежедневной практике прошлый опыт",
    },
  },
  {
    title:
      "Какое определение, по-Вашему, больше подходит к этому геометрическому изображению:",
    image: "assets/images/image2.png",
    inputs: {
      item1: "Оно остроконечное",
      item2: "Оно устойчиво",
      item3: "Оно-находится в состоянии равновесия",
    },
  },
  {
    title: "Вставьте подходящее число",
    image: "assets/images/image3.png",
    smallBlocks: {
      item1: "34",
      item2: "36",
      item3: "53",
      item4: "44",
      item5: "66",
      item6: "42",
    },
  },
  {
    title: "Вставьте подходящее число",
    image: "assets/images/image3.png",
    smallBlocks: {
      item1: "34",
      item2: "36",
      item3: "53",
      item4: "44",
      item5: "66",
      item6: "42",
    },
  },
];

let result = {};

let lineComplete = 26;
let itemTest = 0;

const clickBurger = () => {
  burger.addEventListener("click", () => {
    nav.classList.add("js-active");
    body.style.overflow = "hidden";
    clickNavItem();
  });
};
clickBurger();

const clickNavItem = () => {
  const navItems = document.querySelectorAll(".nav__item");

  navItems.forEach((el) => {
    el.addEventListener("click", () => {
      nav.classList.remove("js-active");
      body.style.overflow = "visible";
    });
  });

  navItems[0].addEventListener("click", () => location.reload());
};

const clickNavExit = () => {
  navExit.addEventListener("click", () => {
    nav.classList.remove("js-active");
    body.style.overflow = "visible";
  });
};
clickNavExit();

const buttonStartTest = () => {
  const buttonsTest = document.querySelectorAll(".js-start");
  const headerLogo = document.querySelector(".header__box");
  const headerBox = document.querySelector(".header__container");
  const headerTest = document.querySelector(".header__test");
  const body = document.querySelector(".main");
  const testBody = document.querySelector(".test");
  const navList = document.querySelector(".nav__list");

  buttonsTest.forEach((el) => {
    el.addEventListener("click", () => {
      body.classList.add("js-hidden");
      headerLogo.classList.add("js-active");
      headerTest.classList.add("js-active");
      testBody.classList.add("js-active");
      navList.classList.add("js-active");
      headerBox.style.padding = "0 15px";
      renderTestItem();
      clickNavItem();
    });
  });
};
buttonStartTest();

const changeLineComplete = (item) => {
  const button = document.querySelector(".button__next");
  const line = document.querySelector(".test__line-complete span");

  button.addEventListener("click", () => {
    line.style.width = `${(lineComplete += 18)}px`;
    itemTest++;
    getValueResult();
    renderTestItem();
  });
};

const getValueResult = () => {
  const radioInputs = document.querySelectorAll(".test__input");
  const smallBlockItems = document.querySelectorAll(".test__block");
  const bigBlockItems = document.querySelectorAll(".test__big-block");

  radioInputs.forEach((el) => {
    if (el.checked === true) {
      result[itemTest] = el.value;
    }
  });

  bigBlockItems.forEach((el) => {
    if (el.classList.contains("js-active")) {
      result[itemTest] = el.style.backgroundColor;
    }
  });

  smallBlockItems.forEach((el) => {
    if (el.classList.contains("js-active")) {
      result[itemTest] = el.innerText;
    }
  });
};

const checkedInput = () => {
  const labelInputs = document.querySelectorAll(".label");
  const radioInputs = document.querySelectorAll(".test__input");
  const buttonNext = document.querySelector(".button__next");

  labelInputs.forEach((item, index) => {
    item.addEventListener("click", () => {
      radioInputs[index].checked = true;
      item.style = `background:#ffc700;color:#272727`;
      buttonNext.style = `pointer-events: auto;background:#ffc700;color:#272727`;

      radioInputs.forEach((el, index) => {
        if (el.checked === false) {
          labelInputs[
            index
          ].style = `background-color:rgba(242, 243, 243, 0.15); color: #ffffff`;
        }
      });
    });
  });
};

const checkedBigBlock = () => {
  const bigBlockItems = document.querySelectorAll(".test__big-block");
  const buttonNext = document.querySelector(".button__next");

  bigBlockItems.forEach((el, index) => {
    el.addEventListener("click", () => {
      delClass(bigBlockItems);
      bigBlockItems[index].classList.add("js-active");
      buttonNext.style = `pointer-events: auto;background:#ffc700;color:#272727`;
    });
  });
};

const checkedSmallBlock = () => {
  const smallBlockItems = document.querySelectorAll(".test__block");
  const buttonNext = document.querySelector(".button__next");

  smallBlockItems.forEach((el, index) => {
    el.addEventListener("click", () => {
      delClass(smallBlockItems);
      smallBlockItems[index].classList.add("js-active");
      buttonNext.style = `pointer-events: auto;background:#ffc700;color:#272727`;
    });
  });
};

const renderTestItem = () => {
  const testContainer = document.querySelector(".test__container");
  testContainer.innerHTML = "";

  if (testArray.length > itemTest) {
    const testContent = document.createElement("div");
    testContent.classList.add("test__content");
    testContainer.appendChild(testContent);

    renderTitle(testContent);
    if (testArray[itemTest].hasOwnProperty("image")) {
      renderImg(testContent);
    }
    if (testArray[itemTest].hasOwnProperty("inputs")) {
      renderInputs(testContent);
    }
    if (testArray[itemTest].hasOwnProperty("bigBlocks")) {
      renderBigBlocks(testContent);
    }
    if (testArray[itemTest].hasOwnProperty("smallBlocks")) {
      renderSmallBlocks(testContent);
    }
    renderButton(testContainer);

    checkedInput();
    checkedBigBlock();
    checkedSmallBlock();
    getValueResult();
    changeLineComplete();
  } else {
    testContainer.remove();
    setTimeout(() => {
      const loader = document.querySelector(".test__load");
      loader.classList.add("js-active");
    }, 300);
    setTimeout(() => {
      document.querySelector(".test__line-box").remove();
      document.querySelector(".test__load").remove();
      document.querySelector(".header__test").classList.remove("js-active");
      document.querySelector(".header__finish").classList.add("js-active");
      document.querySelector(".test__finish").classList.add("js-active");
      createTimer();
      clickPhoneIcon();
    }, 3000);
  }
};

const renderTitle = (parent) => {
  const testTitle = document.createElement("h3");
  testTitle.classList.add("test__title");
  testTitle.innerText = testArray[itemTest].title;
  parent.appendChild(testTitle);
};

const renderImg = (parent) => {
  const testPicture = document.createElement("img");
  testPicture.classList.add("test__picture");
  testPicture.src = testArray[itemTest].image;
  parent.appendChild(testPicture);
};

const renderInputs = (parent) => {
  const valueInputs = Object.values(testArray[itemTest].inputs);

  valueInputs.forEach((el) => {
    const label = document.createElement("label");
    const input = document.createElement("input");
    input.classList.add("test__input");
    input.type = "radio";
    input.name = "radio";
    input.value = el;
    label.classList.add("label");
    label.htmlFor = "radio";
    label.innerText = el;
    label.insertAdjacentElement("afterbegin", input);
    parent.appendChild(label);
  });
};

const renderBigBlocks = (parent) => {
  const valueBigBlocks = Object.values(testArray[itemTest].bigBlocks);
  const bigBlocksContainer = document.createElement("div");
  bigBlocksContainer.classList.add("test__big-block-box");

  valueBigBlocks.forEach((el) => {
    const bigBlockItem = document.createElement("div");
    bigBlockItem.classList.add("test__big-block");
    bigBlockItem.style.backgroundColor = el;
    bigBlocksContainer.appendChild(bigBlockItem);
  });

  parent.appendChild(bigBlocksContainer);
};

const renderSmallBlocks = (parent) => {
  const valueBlocks = Object.values(testArray[itemTest].smallBlocks);
  const blocksContainer = document.createElement("div");
  blocksContainer.classList.add("test__small-block-box");

  valueBlocks.forEach((el) => {
    const blockItem = document.createElement("div");
    blockItem.classList.add("test__block");
    blockItem.innerText = el;
    blocksContainer.appendChild(blockItem);
  });

  parent.appendChild(blocksContainer);
};

const renderButton = (parent) => {
  const buttonNext = document.createElement("button");
  buttonNext.classList.add("button__next");
  buttonNext.innerText = "Далее";
  parent.appendChild(buttonNext);
};

const delClass = (item) => {
  item.forEach((el) => {
    el.classList.remove("js-active");
  });
};

const createTimer = () => {
  let time = 600;
  let timeOut;
  const minute = document.querySelector(".timer__minutes");
  const second = document.querySelector(".timer__seconds");
  const timer = document.querySelector(".timer");

  const startTimer = (t) => {
    timeOut = setInterval(() => {
      t--;

      minute.textContent = `${Math.floor(t / 60)}`;
      if (minute.textContent <= 0) minute.textContent = `00`;
      if (minute.textContent < 10)
        minute.textContent = `0${Math.floor(t / 60)}`;

      second.textContent = `${Math.floor(t % 60)}`;
      if (second.textContent <= 0) second.textContent = `00`;
      if (second.textContent < 10)
        second.textContent = `0${Math.floor(t % 60)}`;

      if (t <= 0) {
        clearInterval(timeOut);
        timer.classList.add("js-finish");
      }
    }, 1000);
  };
  startTimer(time);
};

const API = "https://swapi.dev/api/people/1/";
let postData = [];

const getData = () => {
  fetch(API)
    .then((response) => response.json())
    .then((post) => (postData = post));
};
getData();

const renderPostItem = (post) => {
  const parentBlock = document.querySelector(".test__finish");
  const flexContainer = document.createElement("div");
  flexContainer.style = `display:flex;justify-content:center;align-items:start;margin-top:20px`;
  const container = document.createElement("div");
  container.style = `width:200px;text-align:start;color:white;`;

  container.innerHTML = `<p>Взято из API swapi:</p>
  <p>Имя: ${postData.name}</p>
  <p>Пол: ${postData.gender} </p>
  <p>Рост: ${postData.height} cm</p>
  <p>Вес: ${postData.mass} кг</p>
  <p>Цвет волос: ${postData.hair_color}</p>
  <p>Цвет кожи: ${postData.skin_color}</p>
  <p>Цвет глаз: ${postData.eye_color}</p>`;

  parentBlock.appendChild(flexContainer);
  flexContainer.appendChild(container);
  renderResultTest(flexContainer);
};

const renderResultTest = (parent) => {
  const resultBlock = document.createElement("div");
  resultBlock.style = `width:200px;text-align:start;color:white`;
  resultBlock.innerText = "Ответы теста:";

  for (let value of Object.entries(result)) {
    const itemResult = document.createElement("p");
    itemResult.style.color = "white";
    itemResult.innerText = value[0] + "." + value[1];
    resultBlock.appendChild(itemResult);
  }

  parent.appendChild(resultBlock);
};

const clickPhoneIcon = () => {
  const phone = document.querySelector(".test__call-box");

  phone.addEventListener("click", () => {
    document.querySelector(".test").classList.add("js-adaptive-height");
    renderPostItem();
    phone.style.pointerEvents = "none";
  });
};
