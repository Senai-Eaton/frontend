import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import { visit, click, currentURL } from '@ember/test-helpers'

module('Unit | Route | contact', function (hooks) {
  setupTest(hooks);

  test('Verificação de exitência de rota de contato', function (assert) {
    let route = this.owner.lookup('route:contact');
    assert.ok(route, 'Rota de contato existente');
  });

  test('Deve visitar a rota index', function (assert){
    click('[data-test-index]');
    andThen(()=>{
      assert.equal(currentURL('/'), 'Rota index visitada');
    })
  })
});
