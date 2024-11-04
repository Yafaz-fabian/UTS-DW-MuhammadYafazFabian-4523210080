// Contoh interaktivitas sederhana untuk menu dropdown
document.addEventListener("DOMContentLoaded", function () {
    const menuItems = document.querySelectorAll("nav ul li a");
    menuItems.forEach(item => {
        item.addEventListener("click", function () {
            alert("Anda mengklik menu: " + this.innerText);
        });
    });
});
