document.getElementById("inp").addEventListener("click", clicked);
let input = document.getElementById("inp");
let output = document.getElementById("output");

function clicked() {
  const rndInt = Math.floor(Math.random() * 5) + 1;
  console.log(rndInt);

  if (input.value.toLowerCase() == "") {
    output.innerHTML = "please ask something";
    output.style.color = "orange";
  } else if (
    input.value.toLowerCase() == "do you work?" ||
    input.value.toLowerCase() == "i think your dumb" ||
    input.value.toLowerCase() == "7 ball is better"
  ) {
    output.innerHTML = "how dare you disrespect me ";
    output.style.color = "red";
  } else if (
    input.value.toLowerCase() == "you are cool" ||
    input.value.toLowerCase() == "omar is cool"
  ) {
    output.innerHTML = "fact check : <strong>correct<strong> ";
    output.style.color = "green";
  } else if (rndInt == 5) {
    output.innerHTML = "That will certainly happen!";
    output.style.color = "green";
  } else if (rndInt == 4) {
    output.innerHTML = "That might happen";
    output.style.color = "orange";
  } else if (rndInt == 3) {
    output.innerHTML = "completly unsure ask again";
    output.style.color = "orange";
  } else if (rndInt == 2) {
    output.innerHTML = "that might not happen";
    output.style.color = "red";
  } else if (rndInt == 1) {
    output.innerHTML = "that will never happen";
    output.style.color = "red";
  }
}
