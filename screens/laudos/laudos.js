const openModalButton = document.getElementById("button");
const openModalButton1 = document.getElementById("button1");
const openModalButton2 = document.getElementById("button2");
const openModalButton3 = document.getElementById("button3");
const closeModalButton = document.querySelector("#close-modal");
const pacientName = document.querySelector('.pacientName');
const userImg = document.querySelector(".userImg");
const idadeUser = document.querySelector(".idadeUser");
const exameRealizado = document.querySelector(".exameRealizado");
const tipoAmostra = document.querySelector(".tipoAmostra");
const qrCode = document.querySelector(".qrCode");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");

const toggleModal = () => {
  modal.classList.toggle("hide");
  fade.classList.toggle("hide");
};
const toggleModal1 = () => {
    pacientName.innerHTML = "Luciana Correia Silva";
    idadeUser.innerHTML = 56;
    exameRealizado.innerHTML = "Hemograma Total";
    tipoAmostra.innerHTML = "Sangue total no tubo de EDTA"
    modal.classList.toggle("hide");
    fade.classList.toggle("hide");
  };
  const toggleModal2 = () => {
    pacientName.innerHTML = "Fernanda Lima Castro";
    idadeUser.innerHTML = 25;
    exameRealizado.innerHTML = "TGO/AST";
    tipoAmostra.innerHTML = "Sangue total ou Soro"
    modal.classList.toggle("hide");
    fade.classList.toggle("hide");
  };
  const toggleModal3 = () => {
    pacientName.innerHTML = "Andre Matos Da Silva";
    idadeUser.innerHTML = 21;
    exameRealizado.innerHTML = "Hemograma Total";
    tipoAmostra.innerHTML = "Sangue total no tubo de EDTA"
    modal.classList.toggle("hide");
    fade.classList.toggle("hide");
  };
  const toggleModal4 = () => {
    pacientName.innerHTML = "Paulo Henrique Mardegann";
    idadeUser.innerHTML = 9;
    exameRealizado.innerHTML = "Urina Tipo I";
    tipoAmostra.innerHTML = "Amostra de Urina"
    modal.classList.toggle("hide");
    fade.classList.toggle("hide");
  };
openModalButton.addEventListener("click", toggleModal1);
openModalButton1.addEventListener("click", toggleModal2);
openModalButton2.addEventListener("click", toggleModal3);
openModalButton3.addEventListener("click", toggleModal4);
[closeModalButton, fade].forEach((el) => {
    el.addEventListener("click", () => toggleModal());
  });