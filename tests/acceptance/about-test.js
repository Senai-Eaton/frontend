import { module, test } from 'qunit';
import { visit, currentURL, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | about', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /about', async function(assert) {
    await visit('/sobre');

    assert.equal(currentURL(), '/sobre');
  });

  test('Deve visitar a rota index', async function(assert){
    await visit('/sobre');
    click('[data-test-index]').then(()=>{
      assert.equal(currentURL(), '/', 'Rota index acessada');
    });
  });
  test('Deve visitar a rota contato', async function(assert){
    await visit('/sobre');
    click('[data-test-contact]').then(()=>{
      assert.equal(currentURL(), '/contato', 'Rota sobre acessada');
    });
  });
  test('Deve visitar a rota de cadastro', async function(assert){
    await visit('/cadastre-se');
    click('[data-test-signin]').then(()=>{
      assert.equal(currentURL(), '/cadastre-se', 'Rota de cadastro acessada');
    })
  })
});
