let noAnswer = 0;
let skyAnswer = 10;
let divisionAnswer = 10;
let sunAnswer = 10;
let sumAnswer = 10;
let galaxyAnswer = 10;
let answerCorrect = 0;

const skyNocorrect = prompt("Якого кольору небо?");
const divisionNocorrect = prompt("Скільки буде 5 / 0?");
const sunNocorrect = confirm("Сонце встає на сході?");
const sumNocorrect = prompt("Скільки буде 2+2?");
const galaxyNocorrect = prompt(
  "Яка правильна відповідь на головне питання життя, всесвіту та всього такого."
);

if (skyNocorrect == "блакитне") {
  answerCorrect += answerCorrect + skyAnswer;
} else {
  answerCorrect += 0;
}
if (divisionNocorrect == "undefined") {
  answerCorrect += +divisionAnswer;
} else {
  answerCorrect += 0;
}
if (sunNocorrect == true) {
  answerCorrect += +sunAnswer;
} else {
  answerCorrect += 0;
}
if (sumNocorrect == "4") {
  answerCorrect += +sumAnswer;
} else {
  answerCorrect += 0;
}
if (galaxyNocorrect == "42") {
  answerCorrect += +galaxyAnswer;
} else {
  answerCorrect += 0;
}
alert(` Твій результат ${answerCorrect} балів, вітаю!`);
