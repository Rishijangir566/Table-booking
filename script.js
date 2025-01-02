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
let confirmMessage=document.querySelector("#confirmMessage")
let confirmReservation=document.querySelector("#confirm-Reservation")

let customer = {};
let clickButton;

let Data = localStorage.getItem("CsData") !== null ?
    JSON.parse(localStorage.getItem("CsData")) : []
 console.log(Data)
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
    screen2.classList.remove("hidden")
    chooseTable.classList.add("bg-gray-400", "cursor-not-allowed");
    chooseTable.disabled = true;

}

tableBtn.addEventListener("click", tableconfirm)

function tableconfirm(e) {
    if (e.target.nodeName === "BUTTON") {
        console.log(e.target.value)
        clickButton = e.target.innerHTML
        screen2.classList.add("hidden")
    }
}

booking.addEventListener("click", confirmBooking)

function confirmBooking(e) {
    e.preventDefault()
    screen1.classList.add("hidden")
    screen3.classList.remove("hidden")
    console.log(people.value)
    console.log(date.value)
    console.log(Time.value)
    customer = {
        person: people.value,
        date: date.value,
        time: Time.value,
        tableNo: clickButton
    }
    storedata()
    confirmMessage.innerHTML=`your are making a reservation for ${customer.person} on ${customer.date} at ${customer.time}`

}
confirmReservation.addEventListener("click",()=>{
    screen3.classList.add("hidden")
    bookBtn.classList.remove("hidden")
    alert("Your reservation is sucessfully")
})