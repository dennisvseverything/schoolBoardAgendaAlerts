define('school-board-agenda-alerts/tests/pods/card/model.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | pods/card/model.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'pods/card/model.js should pass jshint.\npods/card/model.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\npods/card/model.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});