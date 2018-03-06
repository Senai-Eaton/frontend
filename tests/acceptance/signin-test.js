import { module, test } from 'qunit';
import { visit, currentURL, click, fillIn } from '@ember/test-helpers';
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
  test('Deverá efetuar o cadastro de usuário', async assert =>{
    await visit('/cadastre-se');
    await fillIn(('[data-test-name]'), 'Fulano da Silva');
    await fillIn(('[data-test-birth]'), '30/03/1993');
    await fillIn(('[data-test-email]'), 'yagosenhorini30@gmail.com');
    await fillIn(('[data-test-password]'), 'mudar1234');
    await fillIn(('[data-test-confirmation]'), 'mudar1234');
    await click('[data-test-ok]').then(()=>{
    assert.equal(currentURL(), '/home', 'Usuário cadastrado com sucesso');
    }); 
  });
});
