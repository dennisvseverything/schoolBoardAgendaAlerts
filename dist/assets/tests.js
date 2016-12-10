'use strict';

define('school-board-agenda-alerts/tests/app.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'app.js should pass jshint.\napp.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\napp.js: line 2, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\napp.js: line 3, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\napp.js: line 4, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\napp.js: line 6, col 1, \'let\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\napp.js: line 13, col 3, \'object short notation\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\napp.js: line 18, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n7 errors');
  });
});
define('school-board-agenda-alerts/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('school-board-agenda-alerts/tests/helpers/destroy-app.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/destroy-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('school-board-agenda-alerts/tests/helpers/ember-keyboard/register-test-helpers', ['exports', 'ember', 'ember-keyboard'], function (exports, _ember, _emberKeyboard) {

  var keyEvent = function keyEvent(app, attributes, type) {
    var event = attributes.split('+').reduce(function (event, attribute) {
      if (['ctrl', 'meta', 'alt', 'shift'].indexOf(attribute) > -1) {
        event[attribute + 'Key'] = true;
      } else {
        event.keyCode = (0, _emberKeyboard.getKeyCode)(attribute);
      }

      return event;
    }, {});

    return app.testHelpers.triggerEvent(document, type, event);
  };

  exports['default'] = function () {
    _ember['default'].Test.registerAsyncHelper('keyDown', function (app, attributes) {
      return keyEvent(app, attributes, 'keydown');
    });

    _ember['default'].Test.registerAsyncHelper('keyUp', function (app, attributes) {
      return keyEvent(app, attributes, 'keyup');
    });

    _ember['default'].Test.registerAsyncHelper('keyPress', function (app, attributes) {
      return keyEvent(app, attributes, 'keypress');
    });
  };
});
define('school-board-agenda-alerts/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember', 'school-board-agenda-alerts/tests/helpers/start-app', 'school-board-agenda-alerts/tests/helpers/destroy-app'], function (exports, _qunit, _ember, _schoolBoardAgendaAlertsTestsHelpersStartApp, _schoolBoardAgendaAlertsTestsHelpersDestroyApp) {
  var Promise = _ember['default'].RSVP.Promise;

  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _schoolBoardAgendaAlertsTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Promise.resolve(afterEach).then(function () {
          return (0, _schoolBoardAgendaAlertsTestsHelpersDestroyApp['default'])(_this.application);
        });
      }
    });
  };
});
define('school-board-agenda-alerts/tests/helpers/module-for-acceptance.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/module-for-acceptance.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('school-board-agenda-alerts/tests/helpers/resolver', ['exports', 'school-board-agenda-alerts/resolver', 'school-board-agenda-alerts/config/environment'], function (exports, _schoolBoardAgendaAlertsResolver, _schoolBoardAgendaAlertsConfigEnvironment) {

  var resolver = _schoolBoardAgendaAlertsResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _schoolBoardAgendaAlertsConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _schoolBoardAgendaAlertsConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('school-board-agenda-alerts/tests/helpers/resolver.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('school-board-agenda-alerts/tests/helpers/start-app', ['exports', 'ember', 'school-board-agenda-alerts/app', 'school-board-agenda-alerts/config/environment'], function (exports, _ember, _schoolBoardAgendaAlertsApp, _schoolBoardAgendaAlertsConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    // use defaults, but you can override
    var attributes = _ember['default'].assign({}, _schoolBoardAgendaAlertsConfigEnvironment['default'].APP, attrs);

    _ember['default'].run(function () {
      application = _schoolBoardAgendaAlertsApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('school-board-agenda-alerts/tests/helpers/start-app.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/start-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('school-board-agenda-alerts/tests/pods/card/model.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | pods/card/model.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'pods/card/model.js should pass jshint.\npods/card/model.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\npods/card/model.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});
define('school-board-agenda-alerts/tests/pods/card/route.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | pods/card/route.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'pods/card/route.js should pass jshint.\npods/card/route.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\npods/card/route.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});
define('school-board-agenda-alerts/tests/resolver.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'resolver.js should pass jshint.\nresolver.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nresolver.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});
define('school-board-agenda-alerts/tests/router.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | router.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'router.js should pass jshint.\nrouter.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nrouter.js: line 2, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nrouter.js: line 4, col 1, \'const\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nrouter.js: line 13, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n4 errors');
  });
});
define('school-board-agenda-alerts/tests/test-helper', ['exports', 'school-board-agenda-alerts/tests/helpers/resolver', 'ember-qunit'], function (exports, _schoolBoardAgendaAlertsTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_schoolBoardAgendaAlertsTestsHelpersResolver['default']);
});
define('school-board-agenda-alerts/tests/test-helper.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | test-helper.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
define('school-board-agenda-alerts/tests/unit/pods/card/model-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('card', 'Unit | Model | card', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('school-board-agenda-alerts/tests/unit/pods/card/model-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/pods/card/model-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/pods/card/model-test.js should pass jshint.');
  });
});
define('school-board-agenda-alerts/tests/unit/pods/card/route-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:card', 'Unit | Route | card', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('school-board-agenda-alerts/tests/unit/pods/card/route-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/pods/card/route-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/pods/card/route-test.js should pass jshint.');
  });
});
/* jshint ignore:start */

require('school-board-agenda-alerts/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map
