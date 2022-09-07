const request = require('supertest')
const app = require('../server')
const { assert } = require ('chai')

describe('POST /cities', function(){
    it('Must respond with 201 message code', function(done){
        request(app)
            .post('/cities')
            .send({
                city:'Córdoba',
                country: 'Argentina',
                featuredLocation: 'Villa Carlos Paz',
                fundation:'01-01-1596',
                photo: 'https://th.bing.com/th/id/OIP.APKptd5WOdZGMXiJbmI0VgHaEK?pid=ImgDet&rs=1',
                description: ' is a city in the center-north of the province of Córdoba, Argentina, in the south of the Punilla Valley, lying on the western slope of the Sierras Chicas. It has a population of about 56,000 as per the 2001 census [INDEC]. The area of Punilla is a major tourist destination on the national level, and Villa Carlos Paz is in turn the most important city of Punilla, favoured by its closeness (36 km (22 mi)) to the populous Córdoba City, the capital of the province. Popular tourist activities include bathing in one of the many rivers, fishing, evening shows, kite surfing, windsurfing, hiking and mountain biking.',
                smalldescription: ' is a city in the center-north of the province of Córdoba, Argentina, in the south of the Punilla Valley, lying on the western slope of the Sierras Chicas. It has a population of about 56,000 as per the 2001 census [INDEC]. The area of Punilla is a major tourist destination on the national level, and Villa Carlos Paz is in turn the most important city of Punilla, favoured by its closeness (36 km (22 mi)) to the populous Córdoba City, the capital of the province. Popular tourist activities include bathing in one of the many rivers, fishing, evening shows, kite surfing, windsurfing, hiking and mountain biking.',
                population: '3308876'
            })
            .expect(201)
            .end(function (err, res){
                if(err) return done(err);
                return done();
            })
    })
})

describe('POST /cities', function(){
    it('Must respond with 400 message code', function(done){
        request(app)
            .post('/cities')
            .send({})
            .expect(400)
            .end(function (err, res){
                if(err) return done(err);
                return done();
            })
    })
})

describe('POST /cities', function(){
    it('Must respond with id', function(done){
        request(app)
            .post('/cities')
            .send({
                city:'Córdoba',
                country: 'Argentina',
                featuredLocation: 'Villa Carlos Paz',
                fundation:'01-01-1596',
                photo: 'https://th.bing.com/th/id/OIP.APKptd5WOdZGMXiJbmI0VgHaEK?pid=ImgDet&rs=1',
                description: ' is a city in the center-north of the province of Córdoba, Argentina, in the south of the Punilla Valley, lying on the western slope of the Sierras Chicas. It has a population of about 56,000 as per the 2001 census [INDEC]. The area of Punilla is a major tourist destination on the national level, and Villa Carlos Paz is in turn the most important city of Punilla, favoured by its closeness (36 km (22 mi)) to the populous Córdoba City, the capital of the province. Popular tourist activities include bathing in one of the many rivers, fishing, evening shows, kite surfing, windsurfing, hiking and mountain biking.',
                smalldescription: ' is a city in the center-north of the province of Córdoba, Argentina, in the south of the Punilla Valley, lying on the western slope of the Sierras Chicas. It has a population of about 56,000 as per the 2001 census [INDEC]. The area of Punilla is a major tourist destination on the national level, and Villa Carlos Paz is in turn the most important city of Punilla, favoured by its closeness (36 km (22 mi)) to the populous Córdoba City, the capital of the province. Popular tourist activities include bathing in one of the many rivers, fishing, evening shows, kite surfing, windsurfing, hiking and mountain biking.',
                population: '3308876'
            })
            .expect(201)
            .end(function (err, res){
                if(err) return done(err);
                return done();
            })
    })
})