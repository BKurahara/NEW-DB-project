//Elementos
const donateValue = document.querySelector(".donate-value");
const donateConfirmValue = document.querySelector(".donate-value-confirm");
const paymentNumber = document.querySelector("#number-fish");

//primeiro
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const nascInput = document.querySelector("#nasc");

//segundo
const cardNumberInput = document.querySelector("#card-number");
const titularInput = document.querySelector("#name-titular");
const vencDateInput = document.querySelector("#venc");
const cvvInput = document.querySelector("#cvv");

//first step
let price = 10;
function priceChangeHandler(type) {
  // 1) Altera o Price de acordo com Type
  if (type === "add") price += 10;

  if (type === "less") {
    price -= 10;
    if (price <= 10) price = 10;
  }
  // 2) Depois escreve o valor
  donateValue.innerHTML = price;
  donateConfirmValue.innerHTML = price;
  paymentNumber.innerHTML = price / 10;
}

// Validação primeiro passo
const firstStep = document.querySelector("#first-section");
const secondStep = document.querySelector("#second-section");
const thirdStep = document.querySelector("#third-step");

//--------------------------
function classAdd(element) {
  element.classList.add("closed");
}
function classRemove(element) {
  element.classList.remove("closed");
}
function nextPage1() {
  classAdd(firstStep);
  classRemove(secondStep);
}
function nextPage2() {
  classAdd(secondStep);
  classRemove(thirdStep);
}
//-------------------
const validators = {
  isValidEmail: (email) =>
    new RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+.[a-z]{2,}$/).test(email),
  isValidDate: (date) =>
    new Date().getFullYear() - new Date(dateInput).getFullYear() > 18,
  isValidName: (name) => new RegExp(/^([a-zA-Z]+\s)+[a-zA-Z]+$/).test(name),
  isValidCardNumber: (cardNumber) => new RegExp(/^[0-9]{16}$/).test(cardNumber),
  isValidCardDate: (vencDate) =>
    new RegExp(/^[0-1]{1,}[0-2]{1,}\/[2-3]{1,}[0-9]{1,}$/).test(vencDate),
  isValidCvv: (cvvI) => new RegExp(/^[0-9]{3}$/).test(cvvI),
};

//------------------------
function firstFormFunction() {
  // verifica nome vazio
  if (nameInput.value === "") {
    alert("Por favor, insira o seu nome.");
    return;
  }
  if (!validators.isValidName(nameInput.value)) {
    alert("Por favor, insira o seu nome completo.");
    return;
  }
  // Email
  if (emailInput.value === "") {
    alert("Por favor, insira o seu email.");
    return;
  }
  if (!validators.isValidEmail(emailInput.value)) {
    alert("Por favor, insira um email válido ");
    return;
  }

  // Data de nascimento
  if (nascInput.value === "") {
    alert("Insira uma data válida.");
    return;
  }
  if (!validators.isValidDate(nascInput.value)) {
    alert("Você não é maior de 18 anos.");
    return;
  }
  nextPage1();
}

// Validação psegundo passo
function secondFormFunction() {
  //Verificar o número do cartão
  if (cardNumberInput.value === "") {
    alert("Insira um número de cartão.");
    return;
  }

  if (!validators.isValidCardNumber(cardNumberInput.value)) {
    alert("Insira um número de cartão válido.");
    return;
  }

  // verifica nome vazio
  if (titularInput.value === "") {
    alert("Por favor, insira o nome do titular do cartão.");
    return;
  }
  if (!validators.isValidName(titularInput.value)) {
    alert("Por favor, insira o nome do titular do cartão.");
    return;
  }

  // Data de vencimento
  if (vencDateInput.value === "") {
    alert("Insira uma data.");
    return;
  }
  if (!validators.isValidCardDate(vencDateInput.value)) {
    alert("Insira a data correta de vencimento do cartão.");
    return;
  }

  //CVV
  if (cvvInput.value === "") {
    alert("Insira um CVV.");
    return;
  }
  if (!validators.isValidCvv(cvvInput.value)) {
    alert("Este CVV está inválido.");
    return;
  }
  nextPage2();
}
