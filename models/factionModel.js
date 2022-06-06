const mongoose = require('mongoose');

const factionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Faction must have a name'],
    unique: true,
  },
  imageName: {
    type: String,
    required: [true, 'Faction must have an image.'],
  },
  heroes: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Hero',
  },
});

const Faction = mongoose.model('Faction', factionSchema);

module.exports = Faction;
