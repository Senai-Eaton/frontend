import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Adapter | usuario/autenticar', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let adapter = this.owner.lookup('adapter:usuario/autenticar');
    assert.ok(adapter);
  });
});
