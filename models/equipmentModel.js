const mongoose = require('mongoose');

const equipmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Equipment must have a name.'],
    unique: true,
  },
  imageName: {
    type: String,
    required: [true, 'Equipment must have an image.'],
  },
  description: {
    type: String,
    required: [true, 'Equipment must have a description.'],
  },
  stats: {
    firstStat: {
      type: Number,
      min: [1, 'Stat must be higher than 0'],
      required: [true, 'Equipment must have a first stat.'],
    },
    secondStat: {
      type: Number,
      min: [1, 'Stat must be higher than 0'],
      required: [true, 'Equipment must have a second stat.'],
    },
  },
  slot: {
    type: String,
    required: [true, 'Equipment must have a slot type.'],
    enum: {
      values: ['Weapon', 'Body', 'Head', 'Accessory'],
      message: '{VALUE} is not supported.',
    },
  },
  type: {
    type: String,
    required: [true, 'Equipment must have a type.'],
    enum: {
      values: ['Cloth', 'Leather', 'Heavy'],
      message: '{VALUE} is not supported.',
    },
  },
  rarity: {
    type: String,
    required: [true, 'Equipment must have a quality.'],
    enum: {
      values: ['N', 'R', 'SR', 'SSR', 'Exclusive'],
      message: '{VALUE} is not supported.',
    },
  },
});

const Equipment = mongoose.model('Equipment', equipmentSchema);

module.exports = Equipment;
