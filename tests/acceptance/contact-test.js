import { module, test } from 'qunit';
import { visit, currentURL, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | contact', function (hooks) {
  setupApplicationTest(hooks);

  test('visiting /contact', async function (assert) {
    await visit('/contato');
    assert.equal(currentURL(), '/contato');
  });
  test('visitando a index', async function (assert) {
    await visit('/contato');
    await click('[data-test-index]').then(() => {
      assert.equal(currentURL(), '/', 'Acesso à rota index ok');
    });
  });

  test('visitando a rota sobre', async function(assert){
    await visit('/contato');
    await click('[data-test-about]').then(()=>{
      assert.equal(currentURL(), '/sobre', 'Acesso à rota sobre ok')  
    });
  });

  test('visitando a rota signin', async function(assert){
    await visit('/contato');
    await click('[data-test-signin]').then(()=>{
      assert.equal(currentURL(), '/cadastre-se', 'Acesso à rota de cadastro ok');
    });
  });
});
