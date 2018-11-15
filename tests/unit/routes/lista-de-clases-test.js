import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | lista-de-clases', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:lista-de-clases');
    assert.ok(route);
  });
});
