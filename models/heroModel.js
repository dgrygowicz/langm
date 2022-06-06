const mongoose = require('mongoose');

require('../models/factionModel');
require('../models/equipmentModel');
require('../models/soldierModel');
require('../models/skillModel');
require('../models/classModel');

const heroSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Hero must have a name.'],
      unique: true,
    },
    rarity: {
      type: String,
      required: [true, 'Hero must have a rarity.'],
      enum: {
        values: ['N', 'R', 'SR', 'SSR'],
        message: '{VALUE} is not supported.',
      },
    },
    skinNames: {
      type: [String],
      required: [true, 'Hero must have at least 1 skin image.'],
    },
    cardImageName: {
      type: String,
      required: [true, 'Hero must have a card image.'],
    },
    factions: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: 'Faction',
      required: [true, 'Hero must have at least 1 faction.'],
    },
    talent: {
      name: {
        type: String,
        required: [true, 'Talent must have a name.'],
      },
      imageName: {
        type: String,
        required: [true, 'Talent must have an image.'],
      },
      description: {
        type: String,
        required: [true, 'Talent must have a description.'],
      },
    },
    maxStats: [
      {
        class: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Class',
        },
        HP: {
          type: Number,
          min: [1, 'HP must be higher than 0'],
          required: [true, 'MaxStats must have a HP stat.'],
        },
        ATK: {
          type: Number,
          min: [1, 'ATK must be higher than 0'],
          required: [true, 'MaxStats must have a ATK stat.'],
        },
        INT: {
          type: Number,
          min: [1, 'INT must be higher than 0'],
          required: [true, 'MaxStats must have a INT stat.'],
        },
        DEF: {
          type: Number,
          min: [1, 'DEF must be higher than 0'],
          required: [true, 'MaxStats must have a DEF stat.'],
        },
        MDEF: {
          type: Number,
          min: [1, 'MDEF must be higher than 0'],
          required: [true, 'MaxStats must have a MDEF stat.'],
        },
        SKL: {
          type: Number,
          min: [1, 'SKL must be higher than 0'],
          required: [true, 'MaxStats must have a SKL stat.'],
        },
      },
    ],
    soldierBonus: {
      HP: {
        type: Number,
        min: [1, 'HP must be higher than 0'],
        required: [true, 'SoldierBonus must have a HP bonus.'],
      },
      ATK: {
        type: Number,
        min: [1, 'ATK must be higher than 0'],
        required: [true, 'SoldierBonus must have a ATK bonus.'],
      },
      DEF: {
        type: Number,
        min: [1, 'DEF must be higher than 0'],
        required: [true, 'SoldierBonus must have a DEF bonus.'],
      },
      MDEF: {
        type: Number,
        min: [1, 'MDEF must be higher than 0'],
        required: [true, 'SoldierBonus must have a MDEF bonus.'],
      },
    },
    threePointSkill: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Skill',
    },
    exlEquipment: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Equipment',
    },
    classes: [
      {
        class: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Class',
        },
        skills: [
          {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Skill',
          },
        ],
        soldiers: [
          {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Soldier',
          },
        ],
      },
    ],
    trainingGroundSoldiers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Soldier',
      },
    ],
    bondRequirement: {
      glory: {
        type: String,
        required: [true, 'Bond requirement must have a Glory requirement'],
      },
      light: {
        type: String,
        required: [true, 'Bond requirement must have a Light requirement'],
      },
      honor: {
        type: String,
        required: [true, 'Bond requirement must have a Honor requirement'],
      },
      toughness: {
        type: String,
        required: [true, 'Bond requirement must have a Toughness requirement'],
      },
      strength: {
        type: String,
        required: [true, 'Bond requirement must have a Strength requirement'],
      },
    },
    relatedBonds: {
      first: {
        name: {
          type: String,
          required: [true, 'First relation must have a name.'],
        },
        description: {
          type: String,
          required: [true, 'First relation must have a description'],
        },
      },
      second: {
        name: {
          type: String,
          required: [true, 'Second relation must have a name.'],
        },
        description: {
          type: String,
          required: [true, 'Second relation must have a description'],
        },
      },
      third: {
        name: {
          type: String,
          required: [true, 'Third relation must have a name.'],
        },
        description: {
          type: String,
          required: [true, 'Third relation must have a description'],
        },
      },
    },
    bio: {
      heightWeight: {
        type: String,
        required: [true, 'Bio must have a heightWeight'],
      },
      measurements: {
        type: String,
        required: [true, 'Bio must have a measurements'],
      },
      appearance: {
        type: String,
        required: [true, 'Bio must have a appearance'],
      },
      allegiance: {
        type: String,
        required: [true, 'Bio must have a allegiance'],
      },
    },
    voiceActor: {
      type: String,
      required: [true, 'Hero must have a voiceActor'],
    },
  },
  { collection: 'heroes' }
);

heroSchema.statics.findByName = async function (name) {
  return await this.findOne({ name })
    .populate('threePointSkill')
    .populate('exlEquipment')
    .populate('factions')
    .populate({ path: 'classes', populate: ['class', 'skills', 'soldiers'] })
    .populate({ path: 'maxStats', populate: { path: 'class', select: 'name' } })
    .populate('trainingGroundSoldiers');
};

const Hero = mongoose.model('Hero', heroSchema);

module.exports = Hero;
