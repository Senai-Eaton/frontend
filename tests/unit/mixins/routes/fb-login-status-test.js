import EmberObject from '@ember/object';
import RoutesFbLoginStatusMixin from 'senai-front/mixins/routes/fb-login-status';
import { module, test } from 'qunit';

module('Unit | Mixin | routes/fb-login-status', function() {
  // Replace this with your real tests.
  test('it works', function (assert) {
    let RoutesFbLoginStatusObject = EmberObject.extend(RoutesFbLoginStatusMixin);
    let subject = RoutesFbLoginStatusObject.create();
    assert.ok(subject);
  });
});
