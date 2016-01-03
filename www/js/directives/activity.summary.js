(function(){
    var module = angular.module('com.cradlesoft.ems');
    module.directive('dirActivitySummary', [function(){
            return {
                templateUrl: 'templates/directive.activity.summary.html'
            };
    }]);
})();