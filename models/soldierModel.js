const mongoose = require('mongoose');

const soldierSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Soldier must have a name.'],
    unique: true,
  },
  type: {
    type: String,
    required: [true, 'Soldier must have a type.'],
    enum: {
      values: [
        'Infantry',
        'Lancer',
        'Cavalry',
        'Flier',
        'Aquatic',
        'Archer',
        'Assassin',
        'Mage',
        'Holy',
        'Demon',
      ],
      message: '{VALUE} is not supported.',
    },
  },
  cardImageName: {
    type: String,
    required: [true, 'Soldier must have a card image.'],
  },
  imageName: {
    type: String,
    required: [true, 'Soldier must have an image.'],
  },
  tier: {
    type: Number,
    required: [true, 'Soldier must have a tier.'],
    min: [1, 'Tier must be between 1 and 3.'],
    max: [3, 'Tier must be between 1 and 3.'],
  },
  stats: {
    HP: {
      type: Number,
      required: [true, 'Soldier must have a HP stat.'],
      min: [0, 'HP must be higher than 0'],
    },
    ATK: {
      type: Number,
      required: [true, 'Soldier must have an ATK stat.'],
      min: [0, 'ATK must be higher than 0'],
    },
    DEF: {
      type: Number,
      required: [true, 'Soldier must have a DEF stat.'],
      min: [0, 'DEF must be higher than 0'],
    },
    MDEF: {
      type: Number,
      required: [true, 'Soldier must have a MDEF stat.'],
      min: [0, 'MDEF must be higher than 0'],
    },
    MOV: {
      type: Number,
      required: [true, 'Soldier must have a MOV stat.'],
      min: [0, 'MOV must be higher than 0'],
    },
    RANGE: {
      type: Number,
      required: [true, 'Soldier must have a RANGE stat.'],
      min: [0, 'RANGE must be higher than 0'],
    },
  },
  movementType: {
    type: String,
    required: [true, 'Soldier must have a movement type.'],
    enum: {
      values: ['Foot', 'Mounted', 'Marine', 'Flying', 'Terrain Master'],
      message: '{VALUE} is not supported.',
    },
  },
  description: {
    type: String,
    required: [true, 'Soldier must have a description.'],
  },
  heroes: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Hero',
  },
});

const Soldier = mongoose.model('Soldier', soldierSchema);

module.exports = Soldier;
