const quotes = [
  {
    quote: "늦었다고 생각할 때가 진짜 늦은 것이다.",
    author: "박명수",
  },
  {
    quote: "배고플땐 치킨이지",
    author: "chicken",
  },
  { quote: "일찍 일어나는 벌레가 먼저 죽는다", author: "라바" },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
// Math.ceil(1.1)
// 2.  올림
// Math.floor(1.1)
// 2.  내림
// Math.round(1.1)
// 1.  반올림
