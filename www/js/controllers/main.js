(function () {
    var module = angular.module('com.cradlesoft.ems');
    module.controller('MainController', [function ($scope, $cordovaSms) {
            
            

//            document.addEventListener("deviceready", function () {
//                alert('SSM Lists');
            try {
                $cordovaSms
                        .send('08088473115', 'SMS content', {})
                        .then(function () {
                            alert('Success');
                        }, function (error) {
                            alert('Failed');
                        });
            } catch (e) {
//                alert('Something went wrong' + e.message);
            }

//            });
        }]);
})();