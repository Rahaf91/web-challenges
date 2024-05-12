import { news } from "./utils/news.js";
import { Card } from "./components/Card/Card.js";
import { checkFilteredNews, checkSortedNews } from "./utils/results.js";

const container = document.querySelector('[data-js="card-container"]');

// Part 1 - start here
const filteredNews = news.filter((card) =>
  card.categories.includes("politics")
);

console.log(filteredNews);

// Part 2 - start here
const sortedNews = filteredNews.toSorted(
  (a, b) => a.body.length - b.body.length
  /*  {if (a.body.length < b.body.length) {
    return -1;
  }
  if (a.body.length > b.body.length) {
    return 1;
  }
  return 0;}*/
);

sortedNews.forEach((news) => {
  const cardElement = Card(news);
  container.append(cardElement);
});

// Check your filter and sorting order here. Have a look at the console to see if you're right or wrong.
checkFilteredNews(filteredNews);

checkSortedNews(sortedNews);
