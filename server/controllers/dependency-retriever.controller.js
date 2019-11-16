const DependencyManagerService = require( "../services/dependencies-manager.service" );

function sendErrorResponse(res, err) {
	return res.status(400).send({
		message: err.message,
	});
}

async function getPackageDependencies( req, res ) {
	const { pkgName } = req.params;
	try {
		const pkgs = await DependencyManagerService.getPackageDependencies(pkgName);
		res.json( pkgs );
	} catch (err) {
		sendErrorResponse(res, err);
	}
}
module.exports.getPackageDependencies = getPackageDependencies;
