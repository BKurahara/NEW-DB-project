const accordion0 = document.querySelector("#container0");
const accordion1 = document.querySelector("#container1");
const accordion2 = document.querySelector("#container2");


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

const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
