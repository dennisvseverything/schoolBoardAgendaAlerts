define('school-board-agenda-alerts/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'school-board-agenda-alerts/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _schoolBoardAgendaAlertsConfigEnvironment) {
  var _config$APP = _schoolBoardAgendaAlertsConfigEnvironment['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(name, version)
  };
});