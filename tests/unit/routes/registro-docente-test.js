import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | registro-docente', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:registro-docente');
    assert.ok(route);
  });
});
