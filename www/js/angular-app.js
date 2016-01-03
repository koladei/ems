//declare the angular app
(function () {
    var module = angular.module('com.cradlesoft.ems', ['ngRoute', 'ngSanitize', 'ngCordova']);

    module.config(function ($routeProvider, $locationProvider) {
        $routeProvider.when('/', {
            templateUrl: 'templates/home.html'
        });

        $routeProvider.when('/conversation', {
            template: '<dir-conversation-log></dir-conversation-log>'
        });
    });
})();