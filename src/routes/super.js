const express = require('express');
const router = express.Router();
const Super = require('../models/super.js')

// INDEX
router.get("/", (req, res) => {
    Super.find({}).then(supers => {
        res.json( supers );
    })
    .catch(err => {
        console.log(err.message);
        res.json({ 'No supers found: ': err.message });
    })
})

// GET
router.get("/:name", function(req, res) {
    Super.findOne({ name: req.params.name }).lean()
    .then(superperson => {
        console.log(superperson)
        res.json({ 'name': superperson.name, 'author': superperson.author, 
                    'year-published': superperson.pubYear,
        });
    })
    .catch(err => {
        console.log(err);
    });
});

// ADD superperson
router.post("/add/superperson", (req, res) => {
    const superperson = new superperson(req.body);
    superperson.save(function(err, superperson) {
        console.log(req.body.name) // print what is added
        console.log(err)
        res.json({'addition: ': 'Success', 'superperson: ': superperson})
    });
});

// DELETE superperson
router.delete("/delete/:name", (req, res) => {
    superperson.findOneAndRemove({name: req.params.name}, (err, superperson) => {
        res.json({'removal:': 'Success', 'superperson: ': req.params.name})
    });
})

// UPDATE superperson
router.put("/update/:superperson", (req, res) => {
    superperson.findOne({_id: req.body.id}).exec().then(function(superperson) {
        superperson.name = req.body.name || superperson.name;
        console.log(`Updated superperson: ${req.body.name}`)
        res.json({'update: ': 'Success', 'superperson updated: ': superperson})
        return superperson.save();
    }).catch(function(err) {
        console.log(err)
    });
})

module.exports = router;