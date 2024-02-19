const btnShow = document.getElementById("btn-show");
const card = document.getElementsByClassName("show");
const textBtn = document.getElementById("btn-show");

btnShow.addEventListener("click", () => {
  for (var i = 0; i < card.length; i++) {
    if (card[i].style.display === "none") {
      card[i].style.display = "flex";
      textBtn.textContent = "Mostrar Menos";
    } else {
      card[i].style.display = "none";
      textBtn.textContent = "Mostrar Mais";
    }
  }
});
