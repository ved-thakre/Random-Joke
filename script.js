const randomJoke = document.getElementsByClassName("joke")[0];
const buttonJoke = document.getElementsByClassName("gen")[0];

const generateJoke = () => {
  fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json"
    }
  }).then((response) => {
    return response.json();
  }).then((data) => {
    randomJoke.innerHTML = data.joke;
  }).catch((error) => {
    console.log(error);
  });
}

buttonJoke.addEventListener("click", generateJoke);

generateJoke();
