const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');
const { format_date } = require('../utils/helpers');

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (date) => {
                return format_date(date)
            },
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [reactionSchema],
    },
    {
        toJSON: {
            virtuals: true,
            getters: true,
        },
        id: false,
    },
);

// gets total count of reactions using virtual reactionCount
thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

// creates Thought model using thoughtSchema
const Thought = model('Thought', thoughtSchema);

module.exports = Thought;