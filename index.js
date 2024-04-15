const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const message = document.getElementById("message");
const errorMessage = document.getElementById("error-message");
const form = document.querySelector("form");

//ajout commentaire
function addComment() {
  let newAvis = document.getElementById("div");
  let newClient = document.getElementById("h3");
  let newText = document.getElementById("p");

  newClient.textContent = firstName.value + " " + lastName.value;
  newText.textContent = message.value;

  newAvis.appendChild(newClient);
  newAvis.appendChild(newText);

  section.appendChild(newAvis);
}

//validation formulaire

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (firstName.value === "" || lastName.value === "" || message.value === "") {
    errorMessage.style.display = "block";
  } else {
    errorMessage.style.display = "none";
    addComment();

    clearForm();
  }
});

//remise à 0 du formulaire

function clearForm() {
  document.getElementById("first-name").value = "";
  document.getElementById("last-name").value = "";
  document.getElementById("message").value = "";
}
