fetch("https://type.fit/api/quotes")
  .then(function (response) {
    return response.json();
  })

  .then(function (data) {
    const setQuote = function () {
      const ranNum = Math.floor(Math.random() * data.length);

      let currentAuthor = data[ranNum].author;
      let currentQuote = data[ranNum].text;

      if (currentAuthor == null) {
        currentAuthor = "Unknown";
      }

      let author = document.getElementById("author");
      let quote = document.getElementById("text");

      author.innerHTML = `- ${currentAuthor}`;
      quote.innerHTML = `${currentQuote}`;

      const twitter = document.getElementById("tweet-quote");
      twitter.setAttribute(
        "href",
        "https://twitter.com/intent/tweet?hashtags=quotes" +
          encodeURIComponent('"' + currentQuote + '" ' + "- " + currentAuthor)
      );
    };
    setQuote();

    const setColor = function () {
      const ranCol =
        "#" + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0");
      const bg = document.getElementsByClassName("randomBgCol");
      bg[0].setAttribute("style", `background-color: ${ranCol}`);
      bg[1].setAttribute("style", `background-color: ${ranCol}`);

      const textElements = document.getElementsByClassName("randomTxtColor");

      for (const text of textElements) {
        text.setAttribute("style", `color: ${ranCol}`);
      }
    };
    setColor();

    const setAnimation = function () {
      const animation = document.getElementsByClassName("fade");

      animation[0].style.animation = "none";
      window.requestAnimationFrame(function () {
        animation[0].style.animation = "fadeIn 2s";
      });
      animation[1].style.animation = "none";
      window.requestAnimationFrame(function () {
        animation[1].style.animation = "fadeIn 4s ease-in";
      });
    };
    setAnimation();
    document
      .querySelector("#new-quote")
      .addEventListener("click", setAnimation);
    document.querySelector("#new-quote").addEventListener("click", setColor);
    document.querySelector("#new-quote").addEventListener("click", setQuote);
  });

const QuoteBox = () => (
  <div id="wrapper" className="randomBgCol">
    <div id="quote-box">
      <i class="fa fa-quote-left randomTxtColor" aria-hidden="true"></i>
      <p id="text" className="randomTxtColor fade"></p>
      <i class="fa fa-quote-right randomTxtColor" aria-hidden="true"></i>
      <h3 id="author" className="randomTxtColor fade"></h3>
      <div id="button-box">
        <button id="new-quote" className="randomBgCol" type="submit">
          New Quote
        </button>
        <a
          href="https://twitter.com/intent/tweet"
          id="tweet-quote"
          target="_blank"
          className="fa-brands fa-twitter randomTxtColor"
        ></a>
      </div>
      <footer>
        <b id="tag">by VGenereux</b>
      </footer>
    </div>
  </div>
);

const App = () => (
  <div>
    <QuoteBox />
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
