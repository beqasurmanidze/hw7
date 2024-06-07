let topic = prompt(
  "Welcome to the Quiz Game! Choose a topic:\n1. strings\n2. variable\n3. math"
);
let answer;
let question;

switch (topic) {
  case "1":
    question = "ra airs typeof(5)?";
    answer = "number";
    break;
  case "2":
    question = "შეიძლება თუ არა let-ის რედეკლალირება";
    answer = "yes";
    break;
  case "3":
    question = "რას აბრუნებს console.log(Math.floor(2.1)) ";
    answer = "ori";
}

let personsAnswer = prompt(question);

if (personsAnswer.toLowerCase() === answer) {
  alert("correct.");
} else {
  alert("incorrect");
}
