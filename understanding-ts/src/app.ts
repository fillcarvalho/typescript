const button = document.querySelector("button");

function clickHandler(message: string) {
//   let userName = "Filipe";
  console.log("Clicked " + message);
}

if (button) {
  button.addEventListener("click", clickHandler.bind(null, "You are welcome"));
}
