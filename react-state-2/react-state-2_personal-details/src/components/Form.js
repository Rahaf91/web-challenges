export default function Form({ handleCreateUser }) {
  //prop
  //Third Step
  // pass handleCreateUser to the `Form` component
  function handleSubmit(event) {
    event.preventDefault();
    //........target the form elements...................
    const form = event.target.elements;
    const name = form.name.value;
    const email = form.email.value;

    //Fourth Step
    //the handleSubmit calls `onCreateUser` with the correct values of the form fields as arguments
    handleCreateUser(name, email);
    event.target.name.focus();
    event.target.reset();
    /*....We can use formData...  
   const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    onSubmit(data);.....................*/
  }

  return (
    <form
      className="form"
      aria-labelledby="user-details"
      onSubmit={handleSubmit}
    >
      <h2 id="user-details">Please enter your details here!</h2>
      <label htmlFor="name">Name: </label>
      <input id="name" name="name" type="text" placeholder="John Doe" />
      <label htmlFor="email">Email: </label>
      <input id="email" name="email" type="email" placeholder="john@doe.com" />
      <button className="form__submit-button" type="submit">
        Submit
      </button>
    </form>
  );
}

/*Let's start by fixing the submit event first. Switch to the `./src/components/Form.js` file; there already are two states called `name` and `email` and a `handleSubmit` function.

1. Extend the `handleSubmit` function to set the `name` and `email` state to its corresponding form field values.
2. Reset the form after submit.
 */
