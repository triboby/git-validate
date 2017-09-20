var Utils = require('../lib/utils');

Utils.installScript('lint', 'eslint .');
Utils.configureHook('pre-push', ['lint', 'test']);

Utils.installHooks(['pre-push']);
