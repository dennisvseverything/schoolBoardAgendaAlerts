define('school-board-agenda-alerts/tests/helpers/resolver', ['exports', 'school-board-agenda-alerts/resolver', 'school-board-agenda-alerts/config/environment'], function (exports, _schoolBoardAgendaAlertsResolver, _schoolBoardAgendaAlertsConfigEnvironment) {

  var resolver = _schoolBoardAgendaAlertsResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _schoolBoardAgendaAlertsConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _schoolBoardAgendaAlertsConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});