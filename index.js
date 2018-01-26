/* eslint-env node */
'use strict';

var path = require('path');
var Funnel = require('broccoli-funnel');
var MergeTrees = require('broccoli-merge-trees');

module.exports = {
  name: 'ember-cli-responsejs',
  included(app) {
  	app.import('vendor/response.min.js');
  },
  treeForVendor(vendorTree) {
  	let responsejsFolder = path.dirname(require.resolve('response.js/response.js'))
  	let responsejs = new Funnel(responsejsFolder, {
  		files: ['response.min.js']
  	});

  	return new MergeTrees([vendorTree, responsejs].filter(Boolean));
  }
};
