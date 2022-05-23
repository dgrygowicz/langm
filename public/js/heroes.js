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
  let filteredHeroes = [];
  let noFilteredHeroes = [];

  if (filteredFactions.length > 0) {
    filteredHeroes = heroes.filter(hero => {
      return filteredFactions.every(faction => {
        return hero
          .getAttribute('data-bs-factions')
          .split(',')
          .includes(faction);
      });
    });

    noFilteredHeroes = heroes.filter(hero => {
      return !filteredFactions.every(faction => {
        return hero
          .getAttribute('data-bs-factions')
          .split(',')
          .includes(faction);
      });
    });

    filteredHeroes.forEach(el => {
      el.classList.remove('visibility');
    });
    noFilteredHeroes.forEach(el => {
      el.classList.add('visibility');
    });
  } else {
    heroes.forEach(el => {
      el.classList.remove('visibility');
    });
  }
}

function renderFactions() {
  const factionElements = document.querySelectorAll('#factions-cards li');

  for (const factionElement of factionElements) {
    factionElement.addEventListener('click', filterHeroes);
  }
}

renderFactions();
