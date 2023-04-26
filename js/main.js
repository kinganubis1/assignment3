"use strict";

// Selecting elements block personal info
let btnSubmit = document.querySelector(".btn-info");
let notify = document.querySelector(".notify");
let form = document.querySelector(".form-info");
let wrapInfo = document.querySelector(".wrap-info");

// Function regex email
function validate(email) {
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (regex.test(email)) {
        return true;
    } else {
        return false;
    }
}

// Event check validate email
form.addEventListener("submit", function (e) {
    e.preventDefault();
    let email = document.querySelector(".form-control").value;
    let emailValidate = document.querySelector(".form-control").checkValidity();
    if (email == "") {
        notify.textContent = "Vui lòng không để trống email";
        notify.style.color = "#f30";
    } else if (validate(email) == false) {
        notify.textContent = "Email không đúng định dạng";
        notify.style.color = "#f30";
    } else {
        form.classList.add("hidden");
        wrapInfo.classList.remove("hidden");
    }
});

// Selecting elements section job info
let btnView = document.querySelectorAll(".btn-view");

// running for btn view
for (let i = 0; i < btnView.length; i++) {
    // Click view more show hidden animation
    btnView[i].addEventListener("click", function () {
        // 1. get id = "data-container" on btn click
        let container = document.getElementById(this.dataset.container);
        // 2. check block is has "active"
        if (!container.classList.contains("active")) {
            // On click convert text view less
            btnView[
                i
            ].innerHTML = `<i class="fa fa-caret-up" aria-hidden="true"></i
            > View Less`;
            // Add class "active" and specify height
            container.classList.add("active");
            container.style.height = "auto";

            let height = container.clientHeight + "px";

            container.style.height = "0px";
            // Set Time out onload show animation
            setTimeout(function () {
                container.style.height = height;
            }, 0);
        } else {
            // On click convert text view more
            btnView[
                i
            ].innerHTML = `<i class="fa fa-caret-down" aria-hidden="true"></i
            > View More`;
            // onload remove class active and specify height when a CSS transition has completed
            container.style.height = "0px";
            container.addEventListener(
                "transitionend",
                function () {
                    container.classList.remove("active");
                },
                {
                    once: true,
                }
            );
        }
    });
}
