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