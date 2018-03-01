import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | navbar-content', function(hooks) {
  setupRenderingTest(hooks);

  test('Renderização de Componente', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{navbar-content}}`);

    assert.equal(this.$('ul li.home').text(), 'Agir', 'Texto do ícone');
    assert.equal(this.$('ul li.menu:first').text(), 'Contato', 'Texto de contato');

    // Template block usage:
    await render(hbs`
      {{#navbar-content}}
      <header>
      <nav>
          <ul>
              <li class="home">Agir</li>
              <li class="menu">Contato</li>
              <li class="menu">Sobre</li>
              <li class="menu cadastrar">Cadastrar</li>
          </ul>
      </nav>
      </header>
      {{/navbar-content}}
    `);
    
    assert.equal(this.element.textContent.replace(/[\r\n\s]s* /g, '').trim(), 'Agir Contato Sobre Cadastrar', 'Texto renderizado no bloco do componente');
  });
});
