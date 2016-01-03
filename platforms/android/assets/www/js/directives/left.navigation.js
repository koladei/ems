(function(){
    var module = angular.module('com.cradlesoft.ems');
    module.directive('dirLeftNavigation', [function(){
            return {
                templateUrl: 'templates/directive.left.navigation.html'
            };
    }]);
})();