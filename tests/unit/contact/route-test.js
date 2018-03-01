import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | contact', function(hooks) {
  setupTest(hooks);

  test('Verificação de exitência de rota de contato', function(assert) {
    let route = this.owner.lookup('route:contact');
    assert.ok(route, 'Rota de contato existente');
  });
});
