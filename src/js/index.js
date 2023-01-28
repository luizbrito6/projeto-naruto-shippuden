const botaoTrailer = document.querySelector(".botao-trailer");
const modal = document.querySelector(".modal");
const video = document.getElementById("video");
const linkDoVideo = video.src;
const fecharModal = document.querySelector(".fechar-modal") 


 
function alternarModal () {
    modal.classList.toggle("aberto");
}

botaoTrailer.addEventListener("click", () => {
    alternarModal()
    video.setAttribute( "src", linkDoVideo);
});

fecharModal.addEventListener("click", () => {
    alternarModal()
    video.setAttribute("src" , "");
});

 