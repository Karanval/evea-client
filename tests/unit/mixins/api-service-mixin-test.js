import EmberObject from '@ember/object';
import ApiServiceMixinMixin from 'evea-client/mixins/api-service-mixin';
import { module, test } from 'qunit';

module('Unit | Mixin | api-service-mixin', function() {
  // Replace this with your real tests.
  test('it works', function (assert) {
    let ApiServiceMixinObject = EmberObject.extend(ApiServiceMixinMixin);
    let subject = ApiServiceMixinObject.create();
    assert.ok(subject);
  });
});
