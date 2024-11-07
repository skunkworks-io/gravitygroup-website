import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | roadside-assist', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:roadside-assist');
    assert.ok(route);
  });
});
