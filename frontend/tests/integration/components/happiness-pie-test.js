import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('happiness-pie', 'Integration | Component | happiness pie', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{happiness-pie}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#happiness-pie}}
      template block text
    {{/happiness-pie}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
