const input = document.querySelector('[data-js="age-input"]');
const button = document.querySelector('[data-js="age-button"]');
const output = document.querySelector('[data-js="age-output"]');

button.addEventListener("click", () => {
  // Number(x) converts the string from the input to a number
  // Beware: input values are *always* strings!
  const age = Number(input.value);

  // Exercise:
  // Use conditions and the logical AND operator to write
  // "You are a teen." or "You are not a teen." into the output.
  if (age>=12 && age <=20){
    output.textContent="You are a teen.";

  }else if (age<12) {
    output.textContent="You are not a teen.";
    
  }else  if (age>=21 && age <=30) {
    output.textContent="You are an adult.";
    
  }
  else { 
    output.textContent="You are old!. :)"
    }
});
