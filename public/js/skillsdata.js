const skillData = [
  {
    name: 'Breath of the Tides',
    imageName: 'Breath_of_the_Tides.png',
    cost: 3,
    cd: 5,
    range: 3,
    span: 'Straight',
    description:
      "Attacks all enemies in 3 straight lines, dealing 0.2x AoE damage and pushing them back 3 blocks. If you are in Water, you'll have a 20% chance to [Freeze] the enemy for 1 turn. If this skill hits 3 or more enemies, you can take an additional action. (This act again effect can only trigger once per round).",
  },
  {
    name: 'Lightning',
    imageName: 'Lightning.png',
    cost: 2,
    cd: 3,
    range: 1,
    span: 'Single',
    description:
      '[Physical Damage] Attacks a single enemy, dealing 1.5x damage. If the enemy is defeated, the cooldown of this skill is decreased by 3.',
  },
  {
    name: 'Lonely Moon',
    imageName: 'Lonely_Moon.png',
    cost: 1,
    cd: '-',
    range: '-',
    span: '-',
    description:
      "[Passive] When initiating a melee attack, hero's damage is reduced by 20%. After taking action, if your soldiers are all dead, you can act again. This effect has a 3-turn cooldown.",
  },
  {
    name: 'Tidal Surge',
    imageName: 'Tidal_Surge.png',
    cost: 2,
    cd: 3,
    range: 'Self',
    span: 'Single',
    description:
      '[Assist] All passable terrain are treated as Water. Lasts 2 turns. After use, may move 2 blocks and attack.',
  },
  {
    name: 'ATK Command',
    imageName: 'ATK_Command.png',
    cost: 2,
    cd: '-',
    range: '-',
    span: '-',
    description:
      '[Passive] ATK & INT of all allies within 2 blocks increases by 10%.',
  },
  {
    name: 'DEF Support (L)',
    imageName: 'DEF_Support_(L).png',
    cost: 2,
    cd: '-',
    range: '-',
    span: '-',
    description:
      '[Passive] After taking action, 2 friendly units within 2 blocks by gain "Damage Taken -15%" and Immunity to: DEF & MDEF down and Cannot be Healed. Lasts 1 turn.',
  },
  {
    name: 'Alternate',
    imageName: 'Alternate.png',
    cost: 1,
    cd: 3,
    range: 3,
    span: 'Single',
    description:
      '[Assist] Causes [Displacement]: Drags a friendly unit to your side and swaps positions with them. After use, may move 2 blocks and attack.',
  },
  {
    name: 'ATK Intimidate',
    imageName: 'ATK_Intimidate.png',
    cost: 2,
    cd: '-',
    range: '-',
    span: '-',
    description:
      '[Passive] After taking action, decreases ATK & INT of all enemies within 2 surrounding blocks by 15%. Lasts 1 turn.',
  },
  {
    name: 'Ram',
    imageName: 'Ram.png',
    cost: 1,
    cd: 2,
    range: 1,
    span: 'Single',
    description:
      '[Physical Damage] Attacks a single enemy, dealing 1.2x damage and causing [Displacement]: Pushes the target back 2 blocks. Decreases Mobility by 2 and disables guard. Lasts 1 turn.',
  },
  {
    name: "Dragon's Breath",
    imageName: 'Dragons_Breath.png',
    cost: 2,
    cd: 5,
    range: 'Self',
    span: 2,
    description:
      '[Physical Damage] Deals 0.36x AoE damage to enemies within 2 blocks and inflicts 1 debuff. Also grants [Windride]: "When HP>50%, "Damage Taken" -15%." Lasts 2 turns.',
  },
];
