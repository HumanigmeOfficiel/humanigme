function tester(idInput, bonneReponse, idMessage, texteSucces) {

      const reponse = document.getElementById(idInput).value;
      const message = document.getElementById(idMessage);

      if (reponse === bonneReponse) {
        message.textContent = texteSucces;
      } else {
        message.textContent = "Ce n’est pas la bonne réponse !";
      }
    }

function afficherTexte(idTexte) {

  document.getElementById(idTexte)
    .style.display = "block";
}

function allerVersEnigme() {

  const numero = document.getElementById("choix").value;

  const idCible = "enigme" + numero;

  const element = document.getElementById(idCible);

  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  } else {
    alert("Cette énigme n'existe pas !");
  }
}

function toggleMenu() {
  const menu = document.querySelector("nav ul");

  console.log(menu); // debug

  menu.classList.toggle("active");
}