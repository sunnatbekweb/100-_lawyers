"use strict";

const modal = document.querySelector(".drop_menu")
const modal_popup = document.querySelector(".modal_popup")
const blurs = document.querySelector(".blur")
const header = document.querySelector("header")

const close_win = document.querySelector(".close_window")
const close_btn1 = document.querySelector(".close_btn2")
const openBtn = document.querySelector(".nav_top--button")
const openBtn2 = document.querySelector(".open2")
const submit = document.querySelector(".submit")
const close2 = document.querySelector(".close_btn1")


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

close2.addEventListener("click", () => {
    header.classList.remove("hide")
    modal.classList.add("hide")
    blurs.classList.add("hide")
    modal_popup.classList.add("hide")
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

openBtn2.addEventListener("click", () => {
    header.classList.add("hide")
    modal.classList.remove("hide")
    blurs.classList.remove("hide")
    document.body.style.overflow = "hidden"
})

close_win.addEventListener("click", () => {
    header.classList.remove("hide")
    modal_popup.classList.add("hide")
    modal.classList.add("hide")
    blurs.classList.add("hide")
    document.body.style.overflow = "scroll"
})

const choose_number = document.querySelector(".choose_tel")
const question = document.querySelector(".question_tel")
const protal_tel = document.querySelector(".portal_tel")
const protal_name = document.querySelector(".portal_name")
const choose_btn = document.querySelector(".choose_btn")
const q_btn = document.querySelector(".question_btn")
const p_btn = document.querySelector(".portal_btn")

choose_btn.addEventListener("click", () => {
    if (choose_number.value == "") {
        alert("Please fill input")
    } else {
        header.classList.add("hide")
        modal_popup.classList.remove("hide")
        blurs.classList.remove("hide")
        choose_number.value = ""
        document.body.style.overflow = "hidden"
    }
})

q_btn.addEventListener("click", () => {
    if (question.value == "") {
        alert("Please fill input")
    } else {
        header.classList.add("hide")
        modal_popup.classList.remove("hide")
        blurs.classList.remove("hide")
        question.value = ""
        document.body.style.overflow = "hidden"
    }
})

p_btn.addEventListener("click", () => {
    if (protal_tel.value == "" || protal_name.value == "") {
        alert("Please fill input")
    } else {
        header.classList.add("hide")
        modal_popup.classList.remove("hide")
        blurs.classList.remove("hide")
        protal_tel.value = ""
        protal_name.value = ""
        document.body.style.overflow = "hidden"
    }
})