import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | footer-component', function(hooks) {
  setupRenderingTest(hooks);

  test('Renderização de conteúdo', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{footer-component}}`);

    assert.equal(this.element.textContent.trim(), '2018', 'Renderiza o conteúdo de texto');

    // Template block usage:
    await render(hbs`
      {{#footer-component}}
        2018
      {{/footer-component}}
    `);

    assert.equal(this.element.textContent.trim(), '2018', 'Renderiza conteúdo depois do carregamento do componente');
  });
});
