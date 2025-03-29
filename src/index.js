function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "La vie en rose",
    autoStart: true,
    delay: 1,
    curtsor: "",
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
