
// ^
function resolveByCaret(majorVersion, versionIndex, allAvailableVersions) {
  for (let i = versionIndex + 1; i < allAvailableVersions.length; i += 1) {
    const availableVersion = allAvailableVersions[i];
    const availableVersionArr = availableVersion.split('.');
    const availableMajorVersion = availableVersionArr[0];

    if (availableMajorVersion !== majorVersion) {
      return allAvailableVersions[i - 1];
    }
  }
  return allAvailableVersions[allAvailableVersions.length - 1];
}


// ~
// 2.0.0  2.0.1   2.1.0
function resolveByTilde(minorVersion, versionIndex, allAvailableVersions) {
  for (let i = versionIndex + 1; i < allAvailableVersions.length; i += 1) {
    const availableVersion = allAvailableVersions[i];
    const availableVersionArr = availableVersion.split('.');
    const availableMinorVersion = availableVersionArr[1];

    if (availableMinorVersion !== minorVersion) {
      return allAvailableVersions[i - 1];
    }
  }
  return allAvailableVersions[allAvailableVersions.length - 1];
}

function isNumber(char) {
  return !isNaN(char);
}

function isSupportedSymbol(sym) {
  return sym === '~' || sym === '^';
}

function resolveVersion(version, allAvailableVersions) {
  if (isSupportedSymbol(version[0]) && version.split('.').length === 3) {
    const symbol = version[0];
    version = version.substr(1);
    const versionArr = version.split('.');
    const majorVersion = versionArr[0];
    const minorVersion = versionArr[1];
    const versionIndex = allAvailableVersions.findIndex(
      (availableVersion) => availableVersion === version,
    );
    if (versionIndex === -1) throw new Error(`version not found: ${version}`);
    if (symbol === '~') return resolveByTilde(minorVersion, versionIndex, allAvailableVersions);
    if (symbol === '^') return resolveByCaret(majorVersion, versionIndex, allAvailableVersions);
  }

  if (!isNumber(version[0])) {
    // unsupported symbol (>,<,....),  or = remove it
    version = version.substr(1);
  }

  if (version.split('.').length === 1) {
    version += '.0.0';
    const versionIndex = allAvailableVersions.findIndex((availableVersion) => availableVersion === version);
    if (versionIndex === -1) throw new Error(`version not found: ${version}`);
    return resolveByCaret(version[0], versionIndex, allAvailableVersions);
  } if (version.split('.').length === 2) {
    version += '.0';
    const versionIndex = allAvailableVersions.findIndex((availableVersion) => availableVersion === version);
    if (versionIndex === -1) throw new Error(`version not found: ${version}`);
    return resolveByTilde(version.split('.')[1], versionIndex, allAvailableVersions);
  }
  return version;
}

module.exports.resolveVersion = resolveVersion;
module.exports.resolveByTilde = resolveByTilde;
