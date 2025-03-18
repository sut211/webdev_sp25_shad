var funFactsLink = document.getElementById("fun-facts-link");
var modal = document.getElementById("fun-facts-modal");
var closeBtn = document.querySelector(".close");
var factDisplay = document.getElementById("fact-display-modal");
var factButton = document.getElementById("fact-button-modal");

var goldfishFacts = [
  "Goldfish have been bred for over a thousand years in China.",
  "They can recognize their owner's face and can be trained to do tricks.",
  "In optimal conditions, goldfish can live for 20 years or more!",
  "They don't have stomachs, so they produce a lot of waste.",
  "Common goldfish can grow to over 12 inches in length.",
  "Fancy goldfish varieties like Ranchus are called the 'King of Goldfish.'"
];

funFactsLink.onclick = function(event) {
  event.preventDefault(); 
  modal.style.display = "flex";
  showRandomFact(); 
};

closeBtn.onclick = function() {
  modal.style.display = "none";
};

factButton.onclick = function() {
  showRandomFact();
};

function showRandomFact() {
  var index = Math.floor(Math.random() * goldfishFacts.length);
  factDisplay.innerText = goldfishFacts[index];
}
