/* jshint node: true */
'use strict';

const merge = require('broccoli-merge-trees');
const path = require('path');
const WebpackWriter = require('broccoli-webpack');

module.exports = {
  name: 'ember-graphql-tag-shim',

  included(app) {
    // see: https://github.com/ember-cli/ember-cli/issues/3718
    if (typeof app.import !== 'function' && app.app) {
      app = app.app;
    }

    app.import('vendor/graphql-tag.amd.js')
  },

  treeForVendor(tree) {
    const graphqlTagPath = path.dirname(require.resolve('graphql-tag'))
    const graphqlTagTree = new WebpackWriter([ graphqlTagPath ], {
      entry: './index.js',
      output: {
        library: 'graphql-tag',
        libraryTarget: 'amd',
        filename: 'graphql-tag.amd.js'
      }
    });

    if (!tree) {
      return this._super.treeForVendor.call(this, graphqlTagTree);
    }

    const trees = merge([graphqlTagTree, tree], {
      overwrite: true
    });

    return this._super.treeForVendor.call(this, trees);
  }
};
