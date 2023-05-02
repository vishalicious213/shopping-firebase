import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://shopping-firebase-c3b42-default-rtdb.firebaseio.com/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const shoppingListInDB = ref(database, "shoppingList")

const inputField = document.getElementById("input-field")
const addButton = document.getElementById("add-button")
const shoppingList = document.getElementById("shopping-list")



// ⬇️ EVENT LISTENERS ⬇️

addButton.addEventListener("click", function() {
    let inputValue = inputField.value
    addToShoppingList(inputValue)
    clearInputField()
})

// ⬇️ EVENT HANDLERS ⬇️

function addToShoppingList(item) {
    push(shoppingListInDB, item)
    shoppingList.innerHTML += `<li>${item}</li>`
}

function clearInputField() {
    inputField.value = ""
}

// ⬇️ RENDER THE APP ⬇️

function getShoppingListFromDB() {
    onValue(shoppingListInDB, function(snapshot) {
        const retrievedList = Object.values(snapshot.val())
        console.log(retrievedList)
    })
}

getShoppingListFromDB()