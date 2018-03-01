import { module, test } from 'qunit';
import { visit, currentURL, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | signin', function(hooks) {
  setupApplicationTest(hooks);

  test('Visitando a rota de cadastro', async function(assert) {
    await visit('/'),
    await click('button');
    assert.equal(currentURL(), '/signin', 'Rota de cadastro acessada');
  });
});
