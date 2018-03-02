import { module, test } from 'qunit';
import { visit, currentURL, click, fillIn } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | login', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /login', async function(assert) {
    await visit('/login');
    assert.equal(currentURL(), '/login');
  });

  test('Deve efetuar o login', async function(assert){
    await visit('/login');
    await fillIn(('[data-test-identification]'), 'exemplo@exemplo.com');
    await fillIn(('[data-test-password]'), 'mudar1234');
    await click('[data-test-loginButton]').then(()=>{
      assert.equal(currentURL(), '/home', 'Login efetuado com sucesso');
    });
  });

  test('Não deve efetuar o login corretamente', async assert=>{
    await visit('/login');
    await fillIn(('[data-test-identification]'), 'exempro@ezempro.coum');
    await fillIn(('[data-test-password]'), 'nao sei a senha');
    await click('[data-test-loginButton]').then(()=>{
      assert.deepEqual('exemplo@exemplo.com', 'Usuário inválido');
    });
  });

});
