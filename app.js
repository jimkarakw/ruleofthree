//SELECTORS
const apotelesmaButton = document.querySelector(".apotelesma");
const resetButton = document.querySelector(".reset");
const theForm = document.querySelector("#theform");
const hideApotelesma = document
  .querySelector(".koutiapotelesmatos")
  .classList.add("hide");
const showValidation = document.querySelector(".validation");

//EVENT LISTENERS
apotelesmaButton.addEventListener("click", vgaleToApotelesma);
resetButton.addEventListener("click", resetForma);

//FUNCTIONS
//Result on click
function vgaleToApotelesma() {
  event.preventDefault();

  const staTosa = parseFloat(document.querySelector(".statosa").value);
  const exoumeTosa = parseFloat(document.querySelector(".exwtosa").value);
  const staAlla = parseFloat(document.querySelector(".staalla").value);
  const zitoumenoValue = document.querySelector(".stoixeia2").value;
  //Apotelesma Praksi
  const apotelesmaTriwn = (staAlla / staTosa) * exoumeTosa;
  const roundResult = Math.floor(apotelesmaTriwn);
  if (roundResult < 0) {
    showValidation.classList.add("show");
    showApotelesma.classList.add("hide");
  }
  document.querySelector("#resultriwn").value = roundResult;
  document.querySelector("#resultstoixeio").value = zitoumenoValue;
  const showApotelesma = document.querySelector(".koutiapotelesmatos");
  if (roundResult === roundResult) {
    showApotelesma.classList.add("show");
    theForm.classList.add("addheight");
  } else {
    showApotelesma.classList.add("hide");
  }
}
function stoixeioResult() {
  event.preventDefault();
}
// reset the Form
function resetForma() {
  event.preventDefault();
  theForm.reset();
  const resetAndHide = document
    .querySelector(".koutiapotelesmatos")
    .classList.remove("show");
  theForm.classList.remove("addheight");
  showValidation.classList.remove("show");
}
