"use strict";

const modal = document.querySelector(".drop_menu")
const blurs = document.querySelector(".blur")
const header = document.querySelector("header")
const close_btn1 = document.querySelector(".close_btn2")
const modal_popup = document.querySelector(".modal_popup")
const openBtn = document.querySelector(".nav_top--button")
const opnBtn2 = document.querySelector(".open2")
const submit = document.querySelector(".submit")
const close2 = document.querySelector(".close_btn1")
const close_win = document.querySelector(".close_window")
const input1 = document.querySelector(".input1")
const input2 = document.querySelector(".input2")


openBtn.addEventListener("click", () => {
    header.classList.add("hide")
    modal.classList.remove("hide")
    blurs.classList.remove("hide")
    document.body.style.overflow = "hidden"
})

blurs.addEventListener("click", () => {
    header.classList.remove("hide")
    modal.classList.add("hide")
    blurs.classList.add("hide")
    modal_popup.classList.add("hide")
    document.body.style.overflow = "scroll"
})

close_btn1.addEventListener("click", () => {
    header.classList.remove("hide")
    modal.classList.add("hide")
    blurs.classList.add("hide")
    document.body.style.overflow = "scroll"
})

close_btn1.addEventListener("click", () => {
    header.classList.remove("hide")
    modal.classList.add("hide")
    blurs.classList.add("hide")
    document.body.style.overflow = "scroll"
})

submit.addEventListener("click", () => {
    if (input1.value == "" || input2.value == "") {
        alert("Please fill the inputs")
    } else {
        setTimeout(() => 
            modal.classList.add("hide"),
            modal_popup.classList.remove("hide")
        )
        input1.value = ""
        input2.value = ""
    }
})

opnBtn2.addEventListener("click", () => {
    header.classList.add("hide")
    modal.classList.remove("hide")
    blurs.classList.remove("hide")
})

close_win.addEventListener("click", () => {
    header.classList.remove("hide")
    modal_popup.classList.add("hide")
    modal.classList.add("hide")
    blurs.classList.add("hide")
    document.body.style.overflow = "scroll"
})