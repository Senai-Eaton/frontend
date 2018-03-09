import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | navbar-content', function(hooks) {
  setupRenderingTest(hooks);

  test('Renderização de Componente', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    // Template block usage:
    await render(hbs`
      {{#navbar-content}}
      <header>
      <nav>
          <ul>
              <li class="home">Agir</li>
              <li class="menu cadastrar">Cadastrar</li>
          </ul>
      </nav>
      </header>
      {{/navbar-content}}
    `);
    
    assert.equal(this.element.textContent.replace(/[\r\n\s]s* /g, '').trim(), 'Cadastrar Login', 'Texto renderizado no bloco do componente');
  });
});
