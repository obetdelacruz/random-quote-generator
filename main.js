import "./style.css";

const RANDOM_QUOTE_API = "https://api.quotable.io/quotes/random";

async function fetchQuote() {
  try {
    const response = await fetch(RANDOM_QUOTE_API);
    const data = await response.json();

    return data;
  } catch (error) {
    throw new Error(error);
  }
}

fetchQuote()
  .then((data) => {
    document.body.innerHTML = `
<h1>${data[0].author}</h1>
<p>${data[0].content}</p>
`;
  })

  .catch((error) => console.log(error));
