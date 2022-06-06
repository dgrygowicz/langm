const mongoose = require('mongoose');

const classSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Class must have a name.'],
    unique: true,
  },
  imageName: {
    type: String,
    required: [true, 'Class must have an image.'],
  },
  tier: {
    type: Number,
    required: [true, 'Class must have a tier.'],
    min: [0, 'Tier must be between 0 and 3.'],
    max: [3, 'Tier must be between 0 and 3.'],
  },
  range: {
    type: Number,
    required: [true, 'Class must have a range.'],
    min: [1, 'Range must be higher than 0.'],
  },
  movement: {
    type: Number,
    required: [true, 'Class must have a movement.'],
    min: [1, 'Movement must be higher than 0.'],
  },
  movementType: {
    type: String,
    required: [true, 'Class must have a movement type.'],
    enum: {
      values: ['Foot', 'Mounted', 'Marine', 'Flying', 'Terrain Master'],
      message: '{VALUE} is not supported.',
    },
  },
  heroes: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Hero',
  },
});

const Class = mongoose.model('Class', classSchema);

module.exports = Class;
