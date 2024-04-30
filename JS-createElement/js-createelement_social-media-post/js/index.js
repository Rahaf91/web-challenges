console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

const mainHeading = document.createElement("h1");
mainHeading.textContent = "Social Media Post";
mainHeading.classList.add("h1");

const article = document.createElement("article");
article.classList.add("post");
const p = document.createElement("p");
p.classList.add("post__content");
p.textContent = "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";

const footer = document.createElement("footer");
footer.classList.add("post__footer");

const span = document.createElement("span");
span.classList.add("post__username");
span.textContent = "@username";

const button = document.createElement("button");
button.classList.add("post__button");
button.textContent = "  ♥ Like";
button.addEventListener("click", handleLikeButtonClick);
document.body.appendChild(mainHeading);
document.body.appendChild(article);
article.appendChild(p);
article.appendChild(footer);
footer.appendChild(span);
footer.appendChild(button);
