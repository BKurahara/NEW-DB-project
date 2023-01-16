//Elementos
const minusBtn = document.querySelector(".minus-button");
const plusBtn = document.querySelector(".plus-button");

const donateValue = document.querySelector(".donate-value");
const donateConfirmValue = document.querySelector(".donate-value-confirm");
const paymentNumber = document.querySelector("#number-fish");

const firstFormInput = document.querySelector("#first-form-input");
const secondFormInput = document.querySelector("#second-form-input");
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
function plusBtnFunc() {
  price = price + 10;
  donateValue.innerHTML = `${price}`;
  donateConfirmValue.innerHTML = `${price}`;
}

function minusBtnFunc() {
  price = price - 10;
  if (price <= 10) {
    price = 10;
  }
  donateValue.innerHTML = `${price}`;
  donateConfirmValue.innerHTML = `${price}`;
}

function classAdd(element) {
  element.classList.add("closed");
}
function classRemove(element) {
  element.classList.remove("closed");
}

// Validação primeiro passo
const firstStep = document.querySelector("#first-section");
const secondStep = document.querySelector("#second-section");
const thirdStep = document.querySelector("#third-step");

function firstFormFunction() {
  // verifica nome vazio
  if (nameInput.value === "" || !nameValidation(nameInput.value)) {
    alert("Por favor, insira o seu nome");
    return;
  }
  // Email
  if (emailInput.value === "" || !emailValidation(emailInput.value)) {
    alert("Por favor, insira o seu email.");
    return;
  }

  // Data de nascimento
  if (nascInput.value === "" || !yearsValidation(nascInput.value)) {
    alert("Insira uma data válida.");
    return;
  }
  nextPage1();
}

function nextPage1() {
  classAdd(firstStep);
  classRemove(secondStep);
}

function emailValidation(email) {
  const emailRegex = new RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+.[a-z]{2,}$/);
  if (emailRegex.test(email)) {
    return true;
  }
  return false;
}

function yearsValidation(dateInput) {
  const yearNow = new Date();
  const yearDeclarated = new Date(dateInput);
  const age = yearNow.getFullYear() - yearDeclarated.getFullYear();
  if (age < 18) {
    return false;
  }
  return true;
}

function nameValidation(name) {
  const letters = new RegExp(/^([a-zA-Z]+\s)+[a-zA-Z]+$/);
  if (letters.test(name)) {
    return true;
  }
  return false;
}

// Validação psegundo passo
function secondFormFunction() {
  //Verificar o número do cartão
  if (
    cardNumberInput.value === "" ||
    !cardNumberValidation(cardNumberInput.value)
  ) {
    alert("Insira um número de cartão válido.");
    return;
  }

  // verifica nome vazio
  if (titularInput.value === "" || !nameValidation(titularInput.value)) {
    alert("Por favor, insira o nome do titular do cartão.");
    return;
  }

  // Data de vencimento
  if (vencDateInput.value === "" || !cardDateValidation(vencDateInput.value)) {
    alert("Insira uma data válida.");
    return;
  }

  //CVV
  if (cvvInput.value === "" || !cvvNumberValidation(cvvInput.value)) {
    alert("CVV inválido.");
    return;
  }
  nextPage2();
}

function cardNumberValidation(cardNumber) {
  const number = new RegExp(/^[0-9]{16}$/);
  if (number.test(cardNumber)) {
    return true;
  }
  return false;
}

function nextPage2() {
  classAdd(secondStep);
  classRemove(thirdStep);
}

function cardDateValidation(vencDate) {
  const date = new RegExp(/^[0-1]{1,}[0-2]{1,}\/[2-3]{1,}[0-9]{1,}$/);
  if (date.test(vencDate)) {
    return true;
  }
  return false;
}

function cvvNumberValidation(cvvI) {
  const cvv = new RegExp(/^[0-9]{3}$/);
  if (cvv.test(cvvI)) {
    return true;
  }
  return false;
}
