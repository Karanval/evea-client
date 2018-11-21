import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | crear-tarea', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let controller = this.owner.lookup('controller:crear-tarea');
    assert.ok(controller);
  });
});
