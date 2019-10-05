const { chai, assert, server } = require('./setup');

describe('One Package', () => {
    describe('Get /v1/package/:package', () => {
        it('should return information of the tracked package', async () => {
            const PACKAGE = 'OH756347841BR';

            const response = await chai.request(server).get(`/v1/package/${PACKAGE}`);

            const { packHistory, progress } = response.body;

            assert.equal(200, response.status);
            assert.equal(100, progress);
            assert.isArray(packHistory);
            assert.typeOf(packHistory[0].info, 'object');
            assert.isNotNull(packHistory[0].type);
            assert.containsAllKeys(packHistory[0].info, ['date', 'local', 'hour']);
            assert.containsAllKeys(response.body, ['progress', 'packHistory', 'userAgent', 'ip', 'requestedDate']);
        });

        it('should return a default message if the code of the tracked package does not exist', async () => {
            const PACKAGE = 'OH756347842BR';

            const response = await chai.request(server).get(`/v1/package/${PACKAGE}`);

            assert.equal(404, response.status);
            assert.property(response.body, 'message');
            assert.equal('code dont exist!', response.body.message);
        });
    });
});
