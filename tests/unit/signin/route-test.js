import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | signin', function(hooks) {
  setupTest(hooks);

  test('Verifica existência de rota de cadastro', function(assert) {
    let route = this.owner.lookup('route:signin');
    assert.ok(route, 'Rota de cadastro existente');
  });
});
