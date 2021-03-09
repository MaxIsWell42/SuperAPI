require('dotenv').config()
const app = require('../server.js');
const mongoose = require('mongoose');
const chai = require('chai');
const chaiHttp = require('chai-http');
const Book = require('../models/super');
const User = require('../models/user');
chai.config.includeStack = true

const expect = chai.expect
const should = chai.should()
chai.use(chaiHttp)

after((done) => {
    mongoose.models = {}
    mongoose.modelSchemas = {}
    mongoose.connection.close()
    done()
})

describe('API endpoints', () => {
    // Create a mock super
    beforeEach((done) => {
        const mockSuper = new super({
            name: 'Batman',
            image: 'https://i.imgur.com/LDok9do.jpeg',
            origin: 'DC Comics, Gotham City',
        })
        mockSuper.save()
        .then(() => {
            done()
        }).catch(err => {
            console.log(err)
        })
    })

    afterEach((done) => {
        mockSuper.remove({name: ['Batman'] })
        .then(() => {
            done()
        })
    })

    it('Should load all supers', (done) => {
        chai.request(app)
        .get('/')
        .end((err, res) => {
            if (err) { done(err) }
            expect(res).to.have.status(200)
            expect(res.body).to.be.an('object')
            expect(res.body.title).to.be.equal('sampleTitle')
            expect(res.body.author).to.be.equal('sampleAuthor')
        }).catch(err => {
            console.log(err)
        })
    })
})