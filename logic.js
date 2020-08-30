const setOfWords = [
  "My name is gopal nipane and I am Developer.",
  "Hope you are having fun this is a simple game.",
  "Almost before we knew it, we had left the ground.",
];

const msg = document.getElementById("msg");
const typeWords = document.getElementById("mywords");
const btn = document.getElementById("btn");
let startTime, endTime;

const playGame = () => {
  let randomNumber = Math.floor(Math.random() * setOfWords.length);
  msg.innerText = setOfWords[randomNumber];
  let date = new Date();
  startTime = date.getTime();
  btn.innerText = "Done";
};

const endPlay = () => {
  let date = new Date();
  endTime = date.getTime();
  let totalTime = (endTime - startTime) / 1000;
  console.log(totalTime);

  let totalStr = typeWords.value;
  let wordCount = wordCounter(totalStr);

  let speed = Math.floor((wordCount / totalTime) * 60);

  let finalMsg = " You typed total at " + speed + " words per minutes. ";

  finalMsg += compareWords(msg.innerText, totalStr);

  msg.innerText = finalMsg;
};

const compareWords = (str1, str2) => {
  let words1 = str1.split(" ");
  let words2 = str2.split(" ");
  let cnt = 0;

  words1.forEach(function (item, index) {
    if (item == words2[index]) {
      cnt++;
    }
  });

  let errorWords = words1.length - cnt;
  return (
    cnt +
    " correct out of " +
    words1.length +
    " words and the total number of error are " +
    errorWords +
    "."
  );
};

const wordCounter = (str) => {
  let response = str.split(" ").length;
  console.log(response);
  return response;
};

btn.addEventListener("click", function () {
  if (this.innerText == "Start") {
    typeWords.disabled = false;
    playGame();
    typeWords.value = "";
  } else if (this.innerText == "Done") {
    btn.innerText = "Start";
    endPlay();
  }
});
