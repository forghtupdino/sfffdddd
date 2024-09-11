const input = document.querySelector('input');
const games = document.querySelectorAll('#games img');

input.addEventListener('input', () => {
  const searchTerm = input.value.toLowerCase();
  games.forEach(game => {
    if (game.alt.toLowerCase().includes(searchTerm)) {
      game.style.display = 'block';
    } else {
      game.style.display = 'none';
    }
  });
});
function createWebsite() {
  // Create an iframe element to embed the game
  const iframe = document.createElement("iframe");
  iframe.src = "https://1v1.lol/unblocked/";
  iframe.width = "100%";
  iframe.height = "100%";

  // Append the iframe to the body of the website
  document.body.appendChild(iframe);
}