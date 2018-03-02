import { module, test } from 'qunit';
import { visit, currentURL, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | signin', function(hooks) {
  setupApplicationTest(hooks);

  test('Visitando a rota de cadastro', async function(assert) {
    await visit('/cadastre-se'),
    assert.equal(currentURL(), '/cadastre-se', 'Rota de cadastro existente');
  });

  test('Visitando a rota index', async function (assert){
    await visit('/cadastre-se');
    click('[data-test-index]').then(()=>{
      assert.equal(currentURL(), '/', 'Acesso à rota index ok');
    });
  });

  test('Visitando a rota sobre', async function(assert){
    await visit('/cadastre-se');
    click('[data-test-about]').then(()=>{
      assert.equal(currentURL(), '/sobre', 'Acesso à rota sobre ok');
    });
  });
  test('Visitando a rota contato', async function(assert){
    await visit('/cadastre-se');
    click('[data-test-contact]').then(()=>{
assert.equal(currentURL(), '/contato', 'Acesso à rota contato ok');
    });
  });
});
