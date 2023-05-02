import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const inputField = document.getElementById("input-field")
const addButton = document.getElementById("add-button")

// ⬇️ EVENT LISTENERS ⬇️

addButton.addEventListener("click", function() {
    let inputValue = inputField.value
    console.log(inputValue)
})