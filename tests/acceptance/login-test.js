import { module, test } from 'qunit';
import { visit, currentURL, click, fillIn } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | login', function (hooks) {
  setupApplicationTest(hooks);

  test('visiting /login', async function (assert) {
    await visit('/login');
    assert.equal(currentURL(), '/login');
  });

  test('Visitando a rota de cadastro', async function (assert) {
    await visit('/login'),
      await click('[data-test-signin');
    assert.equal(currentURL(), '/cadastre-se', 'Rota de cadastro existente');
  });

  test('Visitando a rota index', async function (assert) {
    await visit('/login');
    click('[data-test-index]').then(() => {
      assert.equal(currentURL(), '/', 'Acesso à rota index ok');
    });
  });

  test('Deve efetuar o login', async function (assert) {
    await visit('/login');
    await fillIn(('[data-test-identification]'), 'exemplo@exemplo.com');
    await fillIn(('[data-test-password]'), 'mudar1234');
    await click('[data-test-loginButton]').then(() => {
      assert.equal(currentURL(), '/home', 'Login efetuado com sucesso');
    });
  });

});
