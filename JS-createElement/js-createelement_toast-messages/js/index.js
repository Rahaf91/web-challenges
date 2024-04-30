console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');

addButton.addEventListener("click", () => {
  const newEntry = document.createElement("li");
  // Exercise: Append a new entry to the toast messages container
  newEntry.classList.add("toast-container__message");
  newEntry.textContent = "I'm a new toast message.";
  toastContainer.append(newEntry);
});

clearButton.addEventListener("click", (event) => {
  // Exercise: Clear the stack of toast messages
  toastContainer.innerHTML = "";
});
