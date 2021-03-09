const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SuperSchema = new Schema({
    name: { type: String, required: true },
    image: { type: String, required: true},
    origin: { type: String, required: true },
    // stats: { type: [], required: true }
})

SuperSchem.pre("save", function(next) {
    // SET createdAt AND updatedAt
    const now = new Date();
    this.updatedAt = now;

    if (!this.createdAt) {
        this.createdAt = now;
    }

    next();
});

module.exports = mongoose.model("Super", SuperSchema);