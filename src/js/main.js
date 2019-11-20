import getRSS from "./rss";

const root = document.getElementById("root");

const newLayout = article =>
  `<div data-source="${article.link}" class="article">
        <a href="${article.link}" target="_blank"> <h3>${article.title}</h3></a>
        <span>show qr</span>
    </div>`;

const renderFeed = ({ items }) => {
  root.innerHTML = "";
  items.forEach(item => {
    root.innerHTML += newLayout(item);
  });
};

getRSS()
  .then(_data => {
    renderFeed(_data);
  })
  .catch(error => console.error(error));
