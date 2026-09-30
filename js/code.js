const section = document.querySelector("section");

function loadDestinations() {
  fetch("js/data.json")
    .then((res) => res.json())
    .then((destinations) => {
      section.innerHTML = destinations
        .map(
          (destination) =>
            `<div><h2> ${destination.city}</h2><p>Known for: ${destination.knownFor}</p> <button> ${destination.provincia}</button></div> `
        )
        .join(" ");
    });
}

function changeStyles() {
  document.body.classList.toggle("dark");
}

document.querySelector(".btn").addEventListener("click", loadDestinations);
document.querySelector(".btn_style").addEventListener("click", changeStyles);
