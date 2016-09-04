var link = document.querySelector(".btn-contacts");
var popup = document.querySelector(".modal-content");
var close = popup.querySelector(".modal-content-close");
var nameElement = popup.querySelector("#name");
var mailElement = popup.querySelector("#mail");
var textElement = popup.querySelector("#text");
var form = popup.querySelector("form");
var storageName = localStorage.getItem("nameElement");
var storageMail = localStorage.getItem("mailElement");


link.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.add("modal-content-show");
    if (storageName && storageMail) {
        nameElement.value = storageName;
        mailElement.value = storageMail;
        textElement.focus();
    } else {
        nameElement.focus();
    }

});
close.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.remove("modal-content-show");
});
form.addEventListener("submit", function(event) {
    localStorage.setItem("nameElement", nameElement.value);
    localStorage.setItem("mailElement", mailElement.value);

});

window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
        if (popup.classList.contains("modal-content-show")) {
            popup.classList.remove("modal-content-show");
        }
    }
});