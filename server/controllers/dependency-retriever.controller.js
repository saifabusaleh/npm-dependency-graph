const HttpStatus = require('http-status-codes');
const DependencyManagerService = require('../services/dependencies-manager.service');

function sendErrorResponse(res, err) {
  return res.status(HttpStatus.BAD_REQUEST).send({
    message: err.message,
  });
}

async function getPackageDependencies(req, res) {
  const { packageName } = req.body;
  try {
    const pkgs = await DependencyManagerService.getPackageDependencies(packageName);
    res.json(pkgs);
  } catch (err) {
    sendErrorResponse(res, err);
  }
}
module.exports.getPackageDependencies = getPackageDependencies;
