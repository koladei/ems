(function(){
    var module = angular.module('com.cradlesoft.ems');
    module.directive('dirFriendMessage', [function(){
            return {
                templateUrl: 'templates/directive.friend.message.html'
            };
    }]);
})();