/*botão flutuante whstapp*/
const btn = document.getElementById("btnFlutuante");

window.addEventListener("scroll", () => {
    if (window.scrollY <= 300) {
        btn.style.display = "none";
    } else {
        btn.style.display = "flex";
    }
});