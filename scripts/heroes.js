class Heroes {
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

      //TODO filtering by factions
      factionElement.addEventListener('click', () => {
        console.log(factionElement);
      });
      factionCards.appendChild(factionElement);
    }
  }

  static renderHeroes() {
    heroesList.sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0));
    // for (const hero of heroesList) {
    //   const heroCards = document.getElementById('heroes-cards');
    //   const heroElement = document.createElement('li');
    //   const heroName = hero.name;
    //   const heroImage = hero.cardName;
    //   heroElement.className = 'hero-card';

    //   heroElement.innerHTML = `
    //   <a href="/heroes/${heroName.toLowerCase()}.html">
    //   <img src="/images/heroes_cards/${heroImage}"/>
    // </a>
    // <p>${heroName}</p>`;
    //   heroCards.appendChild(heroElement);
    // }

    // temporary solution when no more hero data
    for (let i = 0; i < 50; i++) {
      const heroCards = document.getElementById('heroes-cards');
      const heroElement = document.createElement('li');
      const heroName = heroesList[0].name;
      const heroImage = heroesList[0].cardName;
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
