define('school-board-agenda-alerts/app', ['exports', 'ember', 'school-board-agenda-alerts/resolver', 'ember-load-initializers', 'school-board-agenda-alerts/config/environment'], function (exports, _ember, _schoolBoardAgendaAlertsResolver, _emberLoadInitializers, _schoolBoardAgendaAlertsConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _schoolBoardAgendaAlertsConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _schoolBoardAgendaAlertsConfigEnvironment['default'].podModulePrefix,
    Resolver: _schoolBoardAgendaAlertsResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _schoolBoardAgendaAlertsConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});