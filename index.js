import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

// firebase settings
const appSettings = {
    databaseURL: "https://shopping-firebase-c3b42-default-rtdb.firebaseio.com/"
}
const app = initializeApp(appSettings)
const database = getDatabase(app)
const shoppingListInDB = ref(database, "shoppingList")

// app elements
const inputField = document.getElementById("input-field")
const addButton = document.getElementById("add-button")
const shoppingList = document.getElementById("shopping-list")

// ⬇️ EVENT LISTENERS ⬇️

addButton.addEventListener("click", function() {
    let inputValue = inputField.value
    addToShoppingList(inputValue)
    clearInputField()
})

shoppingList.addEventListener("click", function(e) {
    // console.log(e.target.id)
    const itemID = e.target.id
    console.log(itemID)

    const itemLocationInDB = ref(database, `shoppingList/${itemID}`)
    console.log(itemLocationInDB.key)

    remove(itemLocationInDB)
})

// ⬇️ EVENT HANDLERS ⬇️

function addToShoppingList(item) {
    push(shoppingListInDB, item)
}

function clearInputField() {
    inputField.value = ""
}

// ⬇️ RENDER THE APP ⬇️

function clearRenderedList() {
    shoppingList.innerHTML = ""
}

function renderItem(item) {
    shoppingList.innerHTML += `<li id="${item[0]}">${item[1]}</li>`
}

function getShoppingListFromDB() {
    onValue(shoppingListInDB, function(snapshot) {
        const retrievedList = Object.entries(snapshot.val())

        clearRenderedList()
        retrievedList.forEach(item => {
            // let currentItemID = item[0]
            // let currentItemValue = item[1]
            // renderItem(currentItemValue)
            renderItem(item)
        })
    })
}

getShoppingListFromDB()