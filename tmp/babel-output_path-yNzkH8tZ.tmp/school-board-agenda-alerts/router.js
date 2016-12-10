define('school-board-agenda-alerts/router', ['exports', 'ember', 'school-board-agenda-alerts/config/environment'], function (exports, _ember, _schoolBoardAgendaAlertsConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _schoolBoardAgendaAlertsConfigEnvironment['default'].locationType,
    rootURL: _schoolBoardAgendaAlertsConfigEnvironment['default'].rootURL
  });

  Router.map(function () {
    this.route('card');
  });

  exports['default'] = Router;
});