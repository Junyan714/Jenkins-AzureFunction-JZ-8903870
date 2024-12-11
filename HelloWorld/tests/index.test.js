const request = require('supertest');

describe('Azure Function Tests', () => {
    it('should return status 200', async () => {
        const response = await request('http://localhost:7071/api/HttpTriggerFunction').get('/');
        expect(response.status).toBe(200);
    });

    it('should return "Hello, World!" in the response body', async () => {
        const response = await request('http://localhost:7071/api/HttpTriggerFunction').get('/');
        expect(response.text).toBe("Hello, World!");
    });
});
