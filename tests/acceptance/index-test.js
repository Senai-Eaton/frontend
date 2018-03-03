import { module, test } from 'qunit';
import { visit, currentURL, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | index', function (hooks) {
  setupApplicationTest(hooks);

  test('visiting /index', async function (assert) {
    assert.expect(1);
    await visit('/');
    assert.equal(currentURL(), '/');
  });

  test('Deve visitar a rota contato', async function (assert) {
    assert.expect(1);
    await visit('/');
    await click('[data-test-contact]').then(() => {
      assert.equal(currentURL(), '/contato', 'Acesso à rota index');
    });
  });

  test('Deve visitar a rota /sobre', async function (assert) {
    assert.expect(1);
    await visit('/');
    await click('[data-test-about]').then(() => {
      assert.equal(currentURL(), '/sobre', 'Acesso à rota /sobre');
    });
  });

});
