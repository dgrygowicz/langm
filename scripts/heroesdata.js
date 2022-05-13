const heroesList = [
  {
    name: 'Angelina',
    rarity: 'SSR',
    skinsNames: [
      'Skin_Angelina_1.png',
      'Skin_Angelina_2.png',
      'Skin_Angelina_3.png',
      'Skin_Angelina_4.png',
      'Skin_Angelina_5.png',
    ],
    cardName: 'Card_Angelina.png',
    factions: ['Princess Alliance', 'Meteor Strike', 'Yeless Legends'],
    talent: {
      name: 'Battle Goddess',
      imageName: 'Battle_Goddess.png',
      description:
        'When on terrain with defensive effects, all damage taken is reduced by (10, 13, 16, 20)%. On all other terrain, ATK is increased by (10, 13, 16, 20)%.',
    },
    maxStats: [
      {
        className: 'Serpent Master',
        HP: 4586,
        ATK: 547,
        INT: 247,
        DEF: 339,
        MDEF: 283,
        SKL: 124,
      },
      {
        className: 'Dragon Master',
        HP: 4265,
        ATK: 577,
        INT: 247,
        DEF: 313,
        MDEF: 339,
        SKL: 178,
      },
    ],
    soldierBonus: { HP: 20, ATK: 20, DEF: 35, MDEF: 25 },
    threePointSkill: 'Breath of the Tides',
    exlEquipment: {
      name: 'Flower in the Wind',
      imageName: 'Flower_in_the_Wind.png',
      description:
        'DEF +10%. When triggering an act again, buffs on this unit will not decrease in duration. This effect has a 3 turn cooldown.',
      type: 'headgear',
    },
    classes: [
      {
        name: 'Pegasus Knight',
        skills: ['Lightning', 'Lonely Moon'],
        soldiers: ['Hawk Rider'],
        statRewards: [
          { name: 'ATK', value: 9 },
          { name: 'SKILL', value: 4 },
        ],
      },
      {
        name: 'Serpent Knight',
        skills: ['Tidal Surge'],
        soldiers: ['Merman Lord', 'Lobster'],
        statRewards: [
          { name: 'HP', value: 80 },
          { name: 'DEF', value: 5 },
        ],
      },
      {
        name: 'Dragon Knight',
        skills: ['ATK Command'],
        soldiers: ['Griffin Rider', 'Pegasus Rider'],
        statRewards: [
          { name: 'HP', value: 48 },
          { name: 'SKILL', value: 8 },
        ],
      },
      {
        name: 'Swordsman',
        skills: ['DEF Support (L)'],
        soldiers: ['Elite Infantry', 'Elite Cavalry'],
        statRewards: [
          { name: 'HP', value: 80 },
          { name: 'SKILL', value: 5 },
        ],
      },
      {
        name: 'Serpent Master',
        skills: ['Alternate', 'ATK Intimidate'],
        soldiers: ['Tide Master', 'Lobster Behemoth'],
        statRewards: [
          { name: 'ATK', value: 15 },
          { name: 'DEF', value: 16 },
          { name: 'MDEF', value: 10 },
        ],
      },
      {
        name: 'Dragon Master',
        skills: ['Ram', "Dragon's Breath"],
        soldiers: ['Griffin Knight', 'Heavy Cavalry'],
        statRewards: [
          { name: 'HP', value: 90 },
          { name: 'ATK', value: 25 },
          { name: 'MDEF', value: 10 },
        ],
      },
    ],
    trainingGroundSoldiers: [
      'Berserker',
      'Dragoon',
      'Unicorn',
      'Angel',
      'Mechanical Dragon Knight',
    ],
    bondRequirement: {
      Glory: 'Level 5 Intimacy.',
      Light: 'Level 10 Intimacy + Reach Level 30.',
      Honor:
        'Level 15 Intimacy + Clear Time Rift 3-1 (Elite) with this character.',
      Toughness: "Level 23 Intimacy + Clear Gate 3 with Matthew's help.",
      Strength: "Level 25 Intimacy + Clear Gate 4 with Shelfaniel's help.",
    },
    relatedBonds: [
      {
        for: 'Melania ATK',
        description: "Help with Angelina's Gate 4.",
      },
      { for: 'Rachel DEF', description: "Clear Gate 4 with Angelina's help." },
      {
        for: 'Shelfaniel ATK',
        description: "Clear Gate 4 with Angelina's help.",
      },
    ],
    bio: {
      name: 'Hero Info',
      description: [
        'Height/Weight: 167cm/46kg',
        'Measurements: 84/55/83',
        'Appearance: Langrisser IV',
        'Allegiance: Kingdom of Caconsis',
      ],
    },
    voiceActor: 'Yurina Amami',
  },
];
