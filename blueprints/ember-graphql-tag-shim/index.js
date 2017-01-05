/*jshint node:true*/
module.exports = {
  description: 'Installation blueprint for ember-graphql-tag-shim',

  normalizeEntityName: function() {},

  afterInstall: function() {
    return this.addPackagesToProject([
      { name: 'graphql-tag', target: '^1.1.2' }
    ]);
  }
};
