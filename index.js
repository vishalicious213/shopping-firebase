const inputField = document.getElementById("input-field")
const addButton = document.getElementById("add-button")

// ⬇️ EVENT LISTENERS ⬇️

addButton.addEventListener("click", function() {
    let inputValue = inputField.value
    console.log(inputValue)
})