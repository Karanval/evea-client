import EmberObject from '@ember/object';
import ProtectedRouteMixinMixin from 'evea-client/mixins/protected-route-mixin';
import { module, test } from 'qunit';

module('Unit | Mixin | protected-route-mixin', function() {
  // Replace this with your real tests.
  test('it works', function (assert) {
    let ProtectedRouteMixinObject = EmberObject.extend(ProtectedRouteMixinMixin);
    let subject = ProtectedRouteMixinObject.create();
    assert.ok(subject);
  });
});
