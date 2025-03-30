function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    curtsor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "c79270ca90cbeto1b1430d35f0a0244a";
  let context =
    "You are a romantic poetry expert. Your mission is to generate a 5 line poem in basic HTML format. Make sure that the user instructions are followed. Please do not respond. Sign the poem 'Perfect Poetry Generator' in <strong> at the end of the poem.Do not include quotation marks.";
  let prompt = `User instructions are to generate a poem about ${instructionsInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class ="generating">⏳Generating a poem about ${instructionsInput.value}</div>`;

  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
