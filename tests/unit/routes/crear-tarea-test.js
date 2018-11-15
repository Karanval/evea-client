import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | crear-tarea', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:crear-tarea');
    assert.ok(route);
  });
});
