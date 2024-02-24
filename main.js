let wisdomArray = [
  "“That\'s dynamic, attacking rugby. And the result is three points.”",
  "“It's sunday. If you want to go to church, go there and worship Brian O'driscoll,”",
  " “Richie was one of the greatest referees of the 21st century,”",
  "“He came from mozambique then, running from deep,”",
  "“Australia without Pocock is like Hamlet without the prince,”",
  "“You have to play well if you\'re dressed like that,”",
  "“It\'s not his physical presence that makes him such a threat, it\'s the magic in his boots,”",
  "“You don\'t need tries to win World Cups, just points,”",
  "“Kurtley Beale is prowling, Brad Barritt is bleeding”",
  "“Who is this team in white?”",
  "“It's a free ball for Genge who snorts it up!”",
  "“If noise could be a colour, this is it, it's blue.”",
  "“A score that was oozing rugby intellect”",
  "“He's got decent length on that”",
  "“He's got an amazing engine, hasn't he?”",
  "“You honeypot a little bit”",
  "“Big boys against big boys”",
  "“”",
];

const button = document.querySelector(".button-click");
const pearlOfWisdom = document.getElementById("pearl-of-wisdom");

button.addEventListener("click", function () {
  const randomIndex = Math.floor(Math.random() * wisdomArray.length);
  const randomWisdom = wisdomArray[randomIndex];
  pearlOfWisdom.textContent = randomWisdom;
});
