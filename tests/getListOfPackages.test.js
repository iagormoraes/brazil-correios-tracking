const { chai, assert, server } = require('./setup');

describe('List of Packages', () => {
    describe('Get /v1/package?id[]=:package&id[]=:package', () => {
        it('should return information of the tracked packages', async () => {
            const PACKAGES = ['OH756347841BR', 'OH756347841BR'];

            const response = await chai.request(server).get(`/v1/package?id[]=${PACKAGES[0]}&id[]=${PACKAGES[1]}`);

            const { packList } = response.body;
            const firstPackage = packList[0];
            const secondPackage = packList[1];

            assert.equal(200, response.status);
            assert.isArray(packList);
            assert.equal(100, firstPackage.progress);

            assert.isNotNull(firstPackage.packHistory[0].type);
            assert.typeOf(firstPackage.packHistory[0].info, 'object');
            assert.containsAllKeys(firstPackage.packHistory[0].info, ['date', 'local', 'hour']);

            assert.isNotNull(secondPackage.packHistory[0].type);
            assert.typeOf(secondPackage.packHistory[0].info, 'object');
            assert.containsAllKeys(secondPackage.packHistory[0].info, ['date', 'local', 'hour']);

            assert.containsAllKeys(response.body, ['packList', 'userAgent', 'ip', 'requestedDate']);
        });

        it('should return a default message if some code of the tracked packages does not exist', async () => {
            const PACKAGES = ['OH756347841BR', 'OH756347842BR'];

            const response = await chai.request(server).get(`/v1/package?id[]=${PACKAGES[0]}&id[]=${PACKAGES[1]}`);

            assert.equal(404, response.status);
            assert.property(response.body, 'message');
            assert.equal('code dont exist!', response.body.message);
        });
    });
});
