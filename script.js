let solution = document.getElementById("solution");
let solution1 = document.getElementById("solution1");
let all = document.getElementById("all");
var text = " ";
var i;

var people = [
{name: ['Alyssa', 'P.', 'Hacker'], age: 26},
{name: ['Ben', 'L.','Bitdiddle'], age: 34},
{name: ['Eva','Lu', 'Ator'], age: 40},
{name: ['Lem', 'E.','Tweakit'], age: 45},
{name: ['Louis','M.','Reasoner'], age: 21},
{name: [ 'Shahan','Haig','Krakirian'], age: 26}
];

all.addEventListener("click", function fullNameList() {

  for (i=0; i < people.length; i++){
    text += i+1 + "-" +people[i].name[0] + " " + people[i].name[1] + " " + people[i].name[2] + "<br>";
}

  solution.innerHTML = text;

})

let age = document.getElementById("age-button")
let name = document.getElementById("name-input");

age.addEventListener("click", function getAgeFunction() {

  if (name.value == "Alyssa"){
    solution1.innerHTML = 26;}

  if (name.value == "Ben") {
    solution1.innerHTML = 34;}

  if (name.value == "Eva") {
    solution1.innerHTML = 40;}

  if (name.value == "Lem") {
    solution1.innerHTML = 45;}

  if (name.value == "Louis") {
    solution1.innerHTML = 21;}

  if (name.value == "Shahan") {
    solution1.innerHTML = 26;}
})
