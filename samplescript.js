const buttonname = document.getElementById("changeName");
const studentname = document.getElementById("studentName");
const buttonbackground = document.getElementById("changeBackground");
const profile = document.getElementById("profile");
const buttontoggle = document.getElementById("toggleDetails");
const details = document.getElementById("details");


buttonname.addEventListener("click", function () {
    studentname.textContent = "Alvin John Legaspi";
});


buttonbackground.addEventListener("click", function () {
    if (profile.style.backgroundColor === "rgb(204, 251, 241)") {
        profile.style.backgroundColor = "white";
    } else {
        profile.style.backgroundColor = "#ccfbf1";
    }
});


buttontoggle.addEventListener("click", function () {
    details.classList.toggle("hidden");

    if (details.classList.contains("hidden")) {
        buttontoggle.textContent = "Show Details";
    } else {
        buttontoggle.textContent = "Hide Details";
    }
});