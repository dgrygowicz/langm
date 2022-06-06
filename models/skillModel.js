const mongoose = require('mongoose');

const skillSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Skill must have a name.'],
    unique: true,
  },
  imageName: {
    type: String,
    required: [true, 'Skill must have an image.'],
  },
  cost: {
    type: Number,
    required: [true, 'Skill must have a cost.'],
    min: [1, 'Cost must be between 1 and 3.'],
    max: [3, 'Cost must be between 1 and 3.'],
  },
  cd: {
    type: mongoose.Schema.Types.Mixed,
    required: [true, 'Skill must have a cd.'],
  },
  range: {
    type: mongoose.Schema.Types.Mixed,
    required: [true, 'Skill must have a range.'],
  },
  span: {
    type: mongoose.Schema.Types.Mixed,
    required: [true, 'Skill must have a span.'],
  },
  description: {
    type: String,
    required: [true, 'Skill must have a description.'],
  },
  heroes: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Hero',
  },
});

const Skill = mongoose.model('Skill', skillSchema);

module.exports = Skill;
