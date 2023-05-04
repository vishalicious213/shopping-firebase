# Shopping List with Firebase DB

This is my implementation of the [Build a Mobile App with Firebase](https://scrimba.com/learn/firebase) course from Scrimba. The project uses __HTML__, __CSS__ and __JavaScript__ to build the front end of a shopping list application. __Firebase__ is used for data persistence.

My code differs from the instructor's implementation in several ways:

- I separate interactivity into __event listeners__ and __event handlers__ in my projects to maintain *separation of concerns*. This gives me the option to enhance event handlers and use them with different user interactions if needed. The original implementation combines event handler functionality into the event listeners, which is less flexible.
- I use __string literals__ / __template literals__ to render items to the shopping list. The original implementation uses `createElement()` to generate them. `createElement()` is more costly, as it requires every element that is created to be individually written to the __DOM__ and appended to a __node__. (*20 items would require 20 calls to the DOM to create the elements and then 20 more calls to the DOM to position the elements in the shopping list.*) Using string literals, all of the needed elements are created together and then written to the DOM using a single call.
- The instructor adds an __event listener__ to every item in the shopping cart to connect the given item to Firebase, delete it from the database and remove it from the list if it's clicked. This method requires a lot of processing from the browser. I used a single event listener in the shopping list and have it listen to the `event.target.id` that's clicked to determine what item needs to be deleted. The original implementation requires an event listener for every item, so 20 items will need 20 event listeners. Mine uses only one, regardless of the number of items.

## Firebase concepts

- initializeApp()
- getDatabase()
- ref()
- push()
- onValue()
- remove()
- snapshot.exists()

## JavaScript concepts

- import
- functions
- document.getElementById()
    - .value
    - .innerHTML
- addEventListener()
    - events
    - event.target.id
    - click
- Object.entries
- forEach
- string/template literals

## CSS concepts

- user-select: none
- display: flex
    - flex-direction
    - align-items
    - justify-content
    - flex-wrap
    - gap
    - flex-grow: 1
- cursor: pointer
- list-style: none
- box-shadow

Deployed at: https://vish213-fb-shopping.netlify.app/