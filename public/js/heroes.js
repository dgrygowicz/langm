const filteredFactions = [];

function filterHeroes(event) {
  let factionElement = event.target.parentElement;
  if (filteredFactions.includes(event.target.alt)) {
    let index = filteredFactions.indexOf(event.target.alt);
    filteredFactions.splice(index, 1);
    factionElement.classList.remove('factions-checked');
  } else {
    filteredFactions.push(event.target.alt);
    factionElement.classList.add('factions-checked');
  }

  const heroes = Array.from(document.querySelectorAll('#heroes-cards li'));

  heroes.forEach(hero => {
    filteredFactions.every(faction => {
      return hero.getAttribute('data-bs-factions').split(',').includes(faction);
    })
      ? hero.classList.remove('visibility')
      : hero.classList.add('visibility');
  });
}

function factionHandler() {
  const factionElements = document.querySelectorAll('#factions-cards li');

  for (const factionElement of factionElements) {
    factionElement.addEventListener('click', filterHeroes);
  }
}

factionHandler();
