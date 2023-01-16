const accordion0 = document.querySelector("#container0");
const accordion1 = document.querySelector("#container1");
const accordion2 = document.querySelector("#container2");

// Elementos
// const accordionBtn0 = document.querySelector("#accordionBtn0");
// const accordionBtn1 = document.querySelector("#accordionBtn1");
// const accordionBtn2 = document.querySelector("#accordionBtn2");

// accordionBtn0.addEventListener("click", () => handleAccordion(accordionBuy));
// accordionBtn1.addEventListener("click", () =>
//   handleAccordion(accordionQuarentine)
// );
// accordionBtn2.addEventListener("click", () =>
//   handleAccordion(accordionAclimatation)
// );

const accordions = [accordion0, accordion1, accordion2];

function buildAccordionReferences() {
  accordions.forEach((referencia, index) =>
    document
      .querySelector(`#accordionBtn${index}`)
      .addEventListener("click", () => handleAccordion(referencia))
  );
}

buildAccordionReferences();

function closeAccordions() {
  accordion0.classList.add("closed");
  accordion1.classList.add("closed");
  accordion2.classList.add("closed");
}

function handleAccordion(referenceBtn) {
  if (!referenceBtn.classList.contains("closed")) {
    // fecha todo mundo
    closeAccordions();
    return;
  }

  // fecha todo mundo
  closeAccordions();

  // abre
  referenceBtn.classList.remove("closed");
}

//scroll
function scrollToTop() {
  window.scrollTo(0, 0);

  return;
}
