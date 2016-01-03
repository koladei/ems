(function () {
    var module = angular.module('com.cradlesoft.ems');
    module.directive('dirConversationLog', ['$sce', function () {
            return {
                scope: {},
                templateUrl: 'templates/directive.conversation.log.html',
                link: function (scope) {

                    

//                    app.sendSms('2348088473115', 'Test message');
//                    alert(typeof sms)
                    var vK = "";
                    var o = angular.element(document).find('script');
                    vK += (typeof o) + "<br/>";
                    vK += "Length: " + o.length + "<br/>";
//                    var o = sms;
                    if (o) {
                        angular.forEach(o, function (v, k) {
                            if ((/.+(Sms\.js)/gi).test(v.src))
                                vK += v.src + "<br/><br/>";
                        });

//                        angular.forEach(Object.keys(o), function (v, k) {
//                            vK += v + "<br/>";
//                        });
                    } else {
                        vK = 'No existent';
                    }
                    
//                    vK = typeof SMS;
                    scope.WindowKeys = vK;
                }
            };
        }]);
})();