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
    if (inputValue) {
        addToShoppingList(inputValue)
        clearInputField()
    }
})

inputField.addEventListener("keypress", function(e) {
    let inputValue = inputField.value
    if (inputValue && e.key === "Enter") {
        addToShoppingList(inputValue)
        clearInputField()
    }
})

shoppingList.addEventListener("click", function(e) {
    const itemID = e.target.id
    const itemLocationInDB = ref(database, `shoppingList/${itemID}`)

    removeItem(itemLocationInDB)
})

// ⬇️ EVENT HANDLERS ⬇️

function addToShoppingList(item) {
    push(shoppingListInDB, item)
}

function clearInputField() {
    inputField.value = ""
}

function removeItem(item) {
    remove(item)
}

// ⬇️ RENDER THE APP ⬇️

function clearRenderedList() {
    shoppingList.innerHTML = ""
}

function renderItems(list) {
    shoppingList.innerHTML = list
}

function getShoppingListFromDB() {
    onValue(shoppingListInDB, function(snapshot) {
        if (snapshot.exists()) {
            const retrievedList = Object.entries(snapshot.val())
            let renderList = ""

            retrievedList.forEach(item => {
                renderList += `<li id="${item[0]}">${item[1]}</li>`
            })
            
            clearRenderedList()
            renderItems(renderList)
        } else {
            shoppingList.innerHTML = `Add an item to your cart`
        }
    })
}

getShoppingListFromDB()