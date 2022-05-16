const filteredFactions = [];
class Heroes {
  static filterHeroes(event) {
    let factionElement = event.target.parentElement;

    if (filteredFactions.includes(event.target.alt)) {
      let index = filteredFactions.indexOf(event.target.alt);
      filteredFactions.splice(index, 1);
      factionElement.classList.remove('factions-checked');
    } else {
      filteredFactions.push(event.target.alt);
      factionElement.classList.add('factions-checked');
    }
    const filteredHeroes = heroesList.filter(hero => {
      return filteredFactions.every(faction => {
        return hero.factions.includes(faction);
      });
    });
    const heroElements = document.querySelectorAll('#heroes-cards li');
    if (filteredHeroes.length > 0) {
      heroElements.forEach(el => {
        if (
          filteredFactions.length === 0 ||
          el.getAttribute('id') === filteredHeroes[0].name
        ) {
          el.classList.remove('visibility');
        } else {
          el.classList.add('visibility');
        }
      });
    } else {
      heroElements.forEach(el => el.classList.add('visibility'));
    }
  }

  static renderFactions() {
    factionsList.sort((a, b) =>
      a.name > b.name ? 1 : b.name > a.name ? -1 : 0
    );
    for (const faction of factionsList) {
      const factionCards = document.getElementById('factions-cards');
      const factionElement = document.createElement('li');
      const factionName = faction.name;
      const factionImage = faction.imageName;
      factionElement.innerHTML = `
        <img src="/images/factions/${factionImage}" alt="${factionName}"/>`;

      factionElement.addEventListener('click', Heroes.filterHeroes);
      factionCards.appendChild(factionElement);
    }
  }

  static renderHeroes() {
    heroesList.sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0));
    for (const hero of heroesList) {
      const heroCards = document.getElementById('heroes-cards');
      const heroElement = document.createElement('li');
      const heroName = hero.name;
      const heroImage = hero.cardName;
      heroElement.setAttribute('id', `${heroName}`);
      heroElement.className = 'hero-card';

      heroElement.innerHTML = `
      <a href="/heroes/${heroName.toLowerCase()}.html">
      <img src="/images/heroes_cards/${heroImage}"/>
    </a>
    <p>${heroName}</p>`;
      heroCards.appendChild(heroElement);
    }
  }
}

Heroes.renderFactions();
Heroes.renderHeroes();
