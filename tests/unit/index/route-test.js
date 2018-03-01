import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | index', function(hooks) {
  setupTest(hooks);

  test('Verifica existência de rota index', function(assert) {
    let route = this.owner.lookup('route:index');
    assert.ok(route, 'Rota index existente');
  });
});
