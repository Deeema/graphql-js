/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @noflow
 */

'use strict';

const { version } = require('../package.json');
const { writeFile, parseSemver } = require('./utils');

const versionInfo = parseSemver(version);
const body = `/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict
 */

/**
 * Note: This file is autogenerated using "resources/gen-version.js" script and
 * automatically updated by "yarn version" command.
 */

/**
 * A string containing the version of the GraphQL.js library
 */
export const version = '${version}';

/**
 * An object containing the components of the GraphQL.js version string
 */
export const versionInfo = Object.freeze({
  major: ${versionInfo.major},
  minor: ${versionInfo.minor},
  patch: ${versionInfo.patch},
  preReleaseTag: ${JSON.stringify(versionInfo.preReleaseTag || null)},
});
`;

if (require.main === module) {
  writeFile('./src/version.js', body);
}
