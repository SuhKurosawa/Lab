let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let searchBtn = document.querySelector(".bx-search");

closeBtn.addEventListener("click", ()=>{
  sidebar.classList.toggle("open");
  menuBtnChange();
});

searchBtn.addEventListener("click", ()=>{ 
  sidebar.classList.toggle("open");
  menuBtnChange(); 
});
function menuBtnChange() {
 if(sidebar.classList.contains("open")){
   closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");
 }else {
   closeBtn.classList.replace("bx-menu-alt-right","bx-menu");
 }
}
function handle(e){
  if(e.keyCode === 13){ 
    var txt = document.getElementById("txt");
    var txtValue = txt.value;
      e.preventDefault(); 
      if (txtValue == "João Paulo De Azevedo") {
    window.location.href = "../../src/Laudos/Resultado Hemograma simplificado final 2.pdf"
  }else{
   
    alert("O Paciente "+ txtValue + " não existe");
}
  }
}