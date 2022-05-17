function renderMainInfoSection(hero) {
  const heroMainInfoSection = document.getElementById('hero-info__main');
  heroMainInfoSection.innerHTML = `
    <ul id="hero-name">
      <li>${hero.name}</li>
      <li><img src="/images/icons/${hero.rarity}.png"></li>
    </ul>
    <h3>Voice Actor: ${hero.voiceActor}</h3>
  `;
  const heroFactionList = document.createElement('ul');
  heroFactionList.setAttribute('id', 'hero-faction-list');
  for (const faction of hero.factions) {
    const factionElement = document.createElement('li');
    const factionHandler = factionsList.find(el => el.name === faction);
    factionElement.innerHTML = `
      <img src="/images/factions/${factionHandler.imageName}">
    `;
    heroFactionList.appendChild(factionElement);
  }
  heroMainInfoSection.appendChild(heroFactionList);

  const heroBioList = document.createElement('ul');
  heroBioList.setAttribute('id', 'hero-bio-list');
  heroBioList.innerHTML = `
  <h3>Hero Info</h3>
  `;
  for (const info in hero.bio) {
    const bioElement = document.createElement('li');
    bioElement.innerHTML = `${info}: ${hero.bio[info]}`;
    heroBioList.appendChild(bioElement);
  }
  heroMainInfoSection.appendChild(heroBioList);
  renderSkins(heroMainInfoSection, hero);
}

function renderSkins(heroMainInfoSection, hero) {
  const heroSkins = hero.skinsNames;

  const carousel = document.createElement('div');
  carousel.setAttribute('id', 'carouselHeroSkins');
  carousel.setAttribute('class', 'carousel slide carousel-dark');
  carousel.setAttribute('data-bs-ride', 'true');

  const carouselIndicators = document.createElement('div');
  carouselIndicators.classList.add('carousel-indicators');
  for (let i = 0; i < heroSkins.length; i++) {
    const carouselIndicatorButton = document.createElement('button');
    carouselIndicatorButton.setAttribute('type', 'button');
    carouselIndicatorButton.setAttribute(
      'data-bs-target',
      '#carouselHeroSkins'
    );
    carouselIndicatorButton.setAttribute('data-bs-slide-to', i);
    carouselIndicatorButton.setAttribute('aria-label', `Slide ${i + 1}`);
    if (i === 0) {
      carouselIndicatorButton.setAttribute('class', 'active');
      carouselIndicatorButton.setAttribute('aria-current', 'true');
    }
    carouselIndicators.appendChild(carouselIndicatorButton);
  }
  carousel.appendChild(carouselIndicators);

  const carouselInner = document.createElement('div');
  carouselInner.classList.add('carousel-inner');
  heroSkins.forEach((skinName, id) => {
    const carouselItem = document.createElement('div');
    carouselItem.classList.add('carousel-item');
    if (id === 0) {
      carouselItem.classList.add('active');
      carouselItem.innerHTML = `
          <img
            src="/images/heroes_skins/${skinName}"
            class="d-block w-100"
          />
      `;
    } else {
      carouselItem.innerHTML = `
          <img
            src="/images/heroes_skins/${skinName}"
            class="d-block w-100"
          />
      `;
    }
    carouselInner.appendChild(carouselItem);
  });
  carousel.appendChild(carouselInner);

  heroMainInfoSection.appendChild(carousel);
}

function renderTalentInfoSection(hero) {
  const heroTalentInfoSection = document.getElementById('hero-info__talent');
  const skill = skillData.find(el => el.name === hero.threePointSkill);
  const equipment = equipmentList.find(el => el.name === hero.exlEquipment);
  heroTalentInfoSection.innerHTML = `
    <ul id="hero-talent">
      <li><img src="/images/heroes_talents/${hero.talent.imageName}"></li>
      <li>
        <h3>Talent: ${hero.talent.name}</h3>
        <p>${hero.talent.description}</p>
      </li>
    </ul>
    <ul id="hero-three_point-skill">
      <li><img src="/images/skills/${skill.imageName}"></li>
      <li>
        <h3>Awakening skill: ${skill.name}</h3>
        <p>Cost: ${skill.cost} | Cd: ${skill.cd} | Range: ${skill.range} | Span: ${skill.span}</p>
        <p>${skill.description}</p>
      </li>
    </ul>
    <ul id="hero-exclusive-equipment">
      <li><img src="/images/eq_exclusives/${equipment.imageName}"></li>
      <li>
        <h3>Awakening skill: ${equipment.name}</h3>
        <p>Type: ${equipment.type}</p>
        <p>${equipment.description}</p>
      </li>
    </ul>
    <h3>Max Stats</h3>
  `;

  const maxStats = hero.maxStats;
  maxStats.forEach(heroStats => {
    const statsList = document.createElement('ul');
    statsList.setAttribute('id', 'hero-stats');
    for (const stat in heroStats) {
      const statItem = document.createElement('li');
      if (stat === 'className') {
        statItem.innerHTML = `
          <p><strong>${heroStats[stat]}</strong></p>
        `;
      } else {
        statItem.innerHTML = `
          <img src="/images/icons/${stat}.png"/>
          <p>${heroStats[stat]}</p>`;
      }

      statsList.appendChild(statItem);
    }
    heroTalentInfoSection.appendChild(statsList);
  });

  const soldierBonusTitle = document.createElement('h3');
  soldierBonusTitle.innerHTML = `
    <h3>Soldier Bonus</h3>
  `;
  heroTalentInfoSection.appendChild(soldierBonusTitle);

  const soldierBonus = hero.soldierBonus;
  const soldierBonusList = document.createElement('ul');
  soldierBonusList.setAttribute('id', 'hero-soldier-bonus');
  for (const soldierStat in soldierBonus) {
    const soldierBonusElement = document.createElement('li');
    soldierBonusElement.innerHTML = `
      <img src="/images/icons/${soldierStat}.png"/>
      <p>${soldierBonus[soldierStat]}</p>`;
    soldierBonusList.appendChild(soldierBonusElement);
  }
  heroTalentInfoSection.appendChild(soldierBonusList);
}

function renderBondsSection(hero) {
  const heroBondsRequirementsSection = document.getElementById(
    'hero-bonds__requirements'
  );
  heroBondsRequirementsSection.innerHTML = '<h3>Bonds Requirements</h3>';
  const bondRequirement = hero.bondRequirement;
  const bondRequirementList = document.createElement('ul');
  bondRequirementList.setAttribute('id', 'hero-bond-requirement');
  for (const requirement in bondRequirement) {
    const requirementElement = document.createElement('li');
    requirementElement.innerHTML = `
      <p><strong>${requirement}</strong>: ${bondRequirement[requirement]}</p>`;
    bondRequirementList.appendChild(requirementElement);
  }
  heroBondsRequirementsSection.appendChild(bondRequirementList);

  const heroRelatedBondsSection = document.getElementById(
    'hero-bonds__related'
  );
  heroRelatedBondsSection.innerHTML = '<h3>Related Bonds</h3>';
  const relatedBonds = hero.relatedBonds;
  const relatedBondsList = document.createElement('ul');
  relatedBondsList.setAttribute('id', 'hero-related-bonds');
  for (const relation in relatedBonds) {
    const relationElement = document.createElement('li');
    relationElement.innerHTML = `
      <p><strong>${relation}</strong>: ${relatedBonds[relation]}</p>`;
    relatedBondsList.appendChild(relationElement);
  }
  heroRelatedBondsSection.appendChild(relatedBondsList);
}

function renderClasses(hero) {
  const heroClassesSection = document.getElementById('hero-classes');
  heroClassesSection.innerHTML = '<h3>Classes and Soldiers</h3>';
  const heroClasses = hero.classes;

  const classesList = document.createElement('ul');
  classesList.setAttribute('id', 'hero-classes-list');
  heroClasses.forEach(heroClass => {
    const heroClassElement = document.createElement('li');
    const className = heroClass.name;
    const classSkills = heroClass.skills;
    const classSoldiers = heroClass.soldiers;

    const classNameElement = document.createElement('h3');
    const classImage = classesData.find(el => el.name === className).imageName;
    classNameElement.innerHTML = `
      <img src="/images/heroes_classes/${classImage}" />
      <p>${className}</p>
    `;
    heroClassElement.append(classNameElement);

    for (const skill of classSkills) {
      const skillElement = document.createElement('ul');
      const heroSkill = skillData.find(el => el.name === skill);
      skillElement.innerHTML = `
        <li>
          <img src="/images/skills/${heroSkill.imageName}" />
        </li>
        <li>
          <h5>${heroSkill.name}</h5>
          <p>Cost: ${heroSkill.cost} | Cd: ${heroSkill.cd} | Range: ${heroSkill.range} | Span: ${heroSkill.span}</p>
          <p>${heroSkill.description}</p>
        </li>
      `;
      heroClassElement.appendChild(skillElement);
    }

    const soldierList = document.createElement('ul');
    for (const soldier of classSoldiers) {
      const soldierElement = document.createElement('li');
      const heroSoldier = soldiersData.find(el => el.name === soldier);
      soldierElement.innerHTML = `
          <img src="/images/soldiers_cards/${heroSoldier.cardName}" />
      `;
      soldierList.appendChild(soldierElement);
    }
    heroClassElement.appendChild(soldierList);
    classesList.appendChild(heroClassElement);
  });

  const heroTrainingGroundSoldiers = hero.trainingGroundSoldiers;
  const trainingGroundSoldiersHeader = document.createElement('h3');
  trainingGroundSoldiersHeader.textContent = 'Training Ground Soldiers';
  classesList.appendChild(trainingGroundSoldiersHeader);
  const trainingGroundSoldiersList = document.createElement('ul');
  for (const soldier of heroTrainingGroundSoldiers) {
    const soldierElement = document.createElement('li');
    const heroSoldier = soldiersData.find(el => el.name === soldier);
    soldierElement.innerHTML = `
          <img src="/images/soldiers_cards/${heroSoldier.cardName}" />
      `;
    trainingGroundSoldiersList.appendChild(soldierElement);
  }
  classesList.appendChild(trainingGroundSoldiersList);

  heroClassesSection.appendChild(classesList);
}

function renderHero() {
  const heroName = window.location.pathname.split('/')[2].split('.')[0];
  const hero = heroesList.find(hero => hero.name.toLowerCase() === heroName);
  renderMainInfoSection(hero);
  renderTalentInfoSection(hero);
  renderBondsSection(hero);
  renderClasses(hero);
}

renderHero();
