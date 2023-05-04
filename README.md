# Shopping List with Firebase DB

This is my implementation of the [Build a Mobile App with Firebase](https://scrimba.com/learn/firebase) course from Scrimba. The project uses HTML, CSS and JavaScript to build the front end of a shopping list application. Firebase is used for data persistence.

My code differs from the instructor's implementation in several ways:

- I separate interactivity into `event listeners` and `event handlers` in my projects to maintain separation of concerns. This gives me the option to enhance event handlers and use them with different user interactions if needed. The instructor's implementation combines them together, which is less flexible.
- I use `string literals` / `template literals` to render items to the shopping list. The instructor uses `createElement()` to generate them. `createElement()` is more costly, as it incurs writing to the DOM for every element that is created and appended to a node. With string literals, I can create all of the needed elements in one go and then write them all to the DOM using a single call.

Deployed at: https://vish213-fb-shopping.netlify.app/