const supertest = require('supertest');
const app = require('../app');
const dependencyManagerService = require('../services/dependencies-manager.service');

const request = supertest(app);

describe('DependencyRetriever tests', () => {
  const dependenciesResponse = {

    dependencies: {
      'file-match': '^1.0.1',
      'utils-extend': '=2.0',
      fs: '>5.0',
      mocha: '~ 2.2.0',
    },
  };

  describe('getPackageDependencies', () => {
    it('should return depending to getPackageDependencies result', async (done) => {
      jest.spyOn(dependencyManagerService, 'getPackageDependencies')
        .mockReturnValue(dependenciesResponse.dependencies);
      const res = await request.get('/api/npm-depency-retriever/file-system');
      expect(res.status).toBe(200);
      expect(res.body).toEqual(dependenciesResponse.dependencies);
      done();
    });

    it('should call getPackageDependencies with correct parameters', async (done) => {
      const spy = jest.spyOn(dependencyManagerService, 'getPackageDependencies');
      const res = await request.get('/api/npm-depency-retriever/file-system');
      expect(spy).toHaveBeenCalledWith('file-system');
      expect(res.status).toBe(200);
      done();
    });
  });
});
