let bookBtn = document.querySelector("#bookBtn")
let screen1 = document.querySelector("#screen1")
let screen2 = document.querySelector("#screen2")
let screen3 = document.querySelector("#screen3")
let chooseTable = document.querySelector("#chooseTable")
let booking = document.querySelector("#booking")
let tableBtn = document.querySelector("#tableBtn")
let form = document.querySelector("form")
let people = document.querySelector("#people")
let Time = document.querySelector("#Time")
let date = document.querySelector("#Date")

let customer = {};
let clickButton;

let Data = localStorage.getItem("CsData") !== null ?
    JSON.parse(localStorage.getItem("CsData")) : []

bookBtn.addEventListener("click", bookTable)

console.log(customer)

function bookTable(e) {

    e.preventDefault()
    bookBtn.classList.add("hidden")
    screen1.classList.remove("hidden")
}

function storedata() {
    Data.push({ ...customer })
    localStorage.setItem("CsData", JSON.stringify(Data))
}

chooseTable.addEventListener("click", chooseYourTable)

function chooseYourTable(e) {
    e.preventDefault()
    console.log(people.value)
    console.log(date.value)
    console.log(Time.value)
    customer = {
        person: people.value,
        date: date.value,
        time: Time.value,
        tableNo: clickButton
    }
    screen2.classList.remove("hidden")

}

tableBtn.addEventListener("click", tableconfirm)

function tableconfirm(e) {
    if (e.target.nodeName === "BUTTON") {
        console.log(e.target.value)
        clickButton = e.target.value
        screen2.classList.add("hidden")
    }
}

booking.addEventListener("click", confirmBooking)

function confirmBooking(e) {
    e.preventDefault()
    screen1.classList.add("hidden")
    screen3.classList.remove("hidden")
    storedata()
}