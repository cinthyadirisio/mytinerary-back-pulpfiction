const request = require('supertest')
const app = require('../server')
const { assert } = require('chai')

var idCity
var idUser = "632b2598ef931b9be0370bcc"
var idCityItinerary = "630f934f844315c76f0bd3ea"
var idUserItinerary = "632de986d6ee1f38f8ec6d8e"

describe('POST /cities', function () {

    it('Must respond with 400 message code', function (done) {
        request(app)
            .post('/cities')
            .send({})
            .expect(400)
            .end(function (err, res) {
                if (err) return done(err);
                return done();
            })
    })
    
    it('Must respond with id', function (done) {
        request(app)
            .post('/cities')
            .send({
                city: "Daniel",
                country: "Argentina",
                featuredLocation: "Villa Carlos Paz",
                fundation: "01-01-1596",
                photo: "https://th.bing.com/th/id/OIP.APKptd5WOdZGMXiJbmI0VgHaEK?pid=ImgDet&rs=1",
                description: " is a city in the center-north of the province of Córdoba, Argentina, in the south of the Punilla Valley, lying on the western slope of the Sierras Chicas. It has a population of about 56,000 as per the 2001 census [INDEC]. The area of Punilla is a major tourist destination on the national level, and Villa Carlos Paz is in turn the most important city of Punilla, favoured by its closeness (36 km (22 mi)) to the populous Córdoba City, the capital of the province. Popular tourist activities include bathing in one of the many rivers, fishing, evening shows, kite surfing, windsurfing, hiking and mountain biking.",
                smalldescription: " is a city in the center-north of the province of Córdoba, Argentina, in the south of the Punilla Valley, lying on the western slope of the Sierras Chicas. It has a population of about 56,000 as per the 2001 census [INDEC]. The area of Punilla is a major tourist destination on the national level, and Villa Carlos Paz is in turn the most important city of Punilla.",
                population: 3308876
            })
            .then(response => {
                idCity = response.body.id
                assert.isString(idCity)
                done()
            })
    })

})


describe('DELETE /cities/:id', function () {
    it('Must respond with 201 code  after Delete the city', function (done) {
        request(app)
            .delete(`/cities/${idCity}`)
            .expect(200)
            .end(function (err, res) {
                if (err) return done(err);
                return done();
            })
    })
})


describe('PATCH /auth/update/:id', function () {
    it('Must respond with 200 code after Update Profile', function (done) {
        request(app)
            .patch(`/auth/update/${idUser}`)
            .send({
                lastName: "Ya no soy Locura parte 2"
            })
            .expect(200)
            .end(function (err, res) {
                if (err) return done(err);
                return done();
            })
    })
})


describe('GET /myItineraries/?user', function () {
    it('Must respond with 200 code after get Itinerary by User', function (done) {
        request(app)
            .get(`/myItineraries/?user=${idUserItinerary}`)
            .expect(200)
            .end(function (err, res) {
                if (err) return done(err);
                return done();
            })
    })
})

describe('GET /myItineraries/?city', function () {
    it('Must respond with 200 code after get Itinerary by City', function (done) {
        request(app)
            .get(`/myItineraries/?city=${idCityItinerary}`)
            .expect(200)
            .end(function (err, res) {
                if (err) return done(err);
                return done();
            })
    })
})





