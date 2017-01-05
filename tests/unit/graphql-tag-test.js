import { module, test } from 'ember-qunit';

import gql from 'graphql-tag';

module('Unit | vendor imports | graphql-tag');

test('it exports gql', function(assert) {
  assert.ok(gql);
});
