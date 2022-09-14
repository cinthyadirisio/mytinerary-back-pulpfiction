const request = require('supertest')
const app = require('../server')

//  signUp Test
describe('POST /user/signup', function () {
    it('Must respond with 201 message code - SignUp from Google', function (done) {
        request(app)
            .post('/user/signup')
            .send({
                name: 'Maria',
                lastName: 'Mercedes',
                photo: 'https://i.pinimg.com/550x/09/2c/97/092c9741afdd73f2059a4cc940366013.jpg',
                email: 'testMariaMercedes@mail.com',
                role: 'Admin',
                from: 'google',
                country: 'Argentina',
                pass: '1234'
            })
            .expect(201)
            .end(function (err, res) {
                if (err) return done(err);
                return done();
            })
    })
    it('Must respond with 400 message code', function (done) {
        request(app)
            .post('/user/signup')
            .send({})
            .expect(400)
            .end(function (err, res) {
                if (err) return done(err);
                return done();
            })
    })
    it('Must respond with 200 message code - SignUp from Form', function (done) {
        request(app)
            .post('/user/signup')
            .send({
                name: 'Pepe',
                lastName: 'Perez',
                photo: 'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/64cd705b1258ed31e39c0cea5e0e4974~c5_720x720.jpeg?x-expires=1663218000&x-signature=PSXnhaY9B26VkXsCcVsoL8jveCk%3D',
                email: 'testPepePerez@mail.com',
                role: 'User',
                from: 'form',
                country: 'Venezuela',
                pass: '1234'
            })
            .expect(201)
            .end(function (err, res) {
                if (err) return done(err);
                return done();
            })
    })



})


//  Login Test

describe('POST /user/signin', function () {

    it('Must respond with 400 message code', function (done) {
        request(app)
            .post('/user/signin')
            .send({})
            .expect(400)
            .end(function (err, res) {
                if (err) return done(err);
                return done();
            })
    })
    it('Must respond with 401 message code - SignIn from Form without Verify', function (done) {
        request(app)
            .post('/user/signin')
            .send({
                email: 'testPepePerez@mail.com',
                from: 'form',
                pass: '1234'
            })
            .expect(401)
            .end(function (err, res) {
                if (err) return done(err);
                return done();
            })
    })
    it('Must respond with 200 message code - SignIn from Google', function (done) {
        request(app)
            .post('/user/signin')
            .send({
                email: 'testMariaMercedes@mail.com',
                from: 'google',
                pass: '1234'
            })
            .expect(200)
            .end(function (err, res) {
                if (err) return done(err);
                return done();
            })
    })

})