const request = require('supertest');

const app = require('./app');

describe('app', () => {
  describe('GET /examples', () => {
    it('responses 200', (done) => {
      request(app)
        .get('/examples')
        .expect(200, done);
    });
  });
});
