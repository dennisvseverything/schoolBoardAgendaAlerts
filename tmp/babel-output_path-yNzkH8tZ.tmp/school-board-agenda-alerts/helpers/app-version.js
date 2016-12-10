define('school-board-agenda-alerts/helpers/app-version', ['exports', 'ember', 'school-board-agenda-alerts/config/environment'], function (exports, _ember, _schoolBoardAgendaAlertsConfigEnvironment) {
  exports.appVersion = appVersion;
  var version = _schoolBoardAgendaAlertsConfigEnvironment['default'].APP.version;

  function appVersion() {
    return version;
  }

  exports['default'] = _ember['default'].Helper.helper(appVersion);
});