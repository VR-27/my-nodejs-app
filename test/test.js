const request = require('supertest');
const app = require('../index'); // Import the app

describe('GET /', function () {
    it('responds with the correct message', function (done) {
        request(app)
            .get('/')
            .expect(200)
            .expect('Hello fourth with mocha check and Jenkins on AWS!', done);
    });
});
