console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');
const success = document.querySelector('[data-js="success"]');

function hideTosError() {
  tosError.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}

function showSuccess() {
  success.removeAttribute("hidden");
}
function hideSuccess() {
  success.setAttribute("hidden", "");
}
hideTosError();
hideSuccess();

tosCheckbox.addEventListener("change", () => {
  if (tosCheckbox.checked) {
    hideTosError();
  } else {
    showTosError();
    hideSuccess();
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!tosCheckbox.checked) {
    showTosError();
    return;
  } else {
    showSuccess();
  }

  alert("Form submitted");
});
