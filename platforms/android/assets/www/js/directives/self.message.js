(function(){
    var module = angular.module('com.cradlesoft.ems');
    module.directive('dirSelfMessage', [function(){
            return {
                templateUrl: 'templates/directive.self.message.html'
            };
    }]);
})();