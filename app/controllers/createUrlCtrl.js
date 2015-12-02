sysAdminAppControllers.controller(
    'createUrlCtrl',
    ['$scope', '$rootScope', '$state', '$http', 'login', '$location', 'admin',
        function ($scope, $rootScope, $http, $state, login, $location, admin) {
            $scope.create = function () {
                var $urlTemplate = [
                    "id={0}&path={1}",
                    "id={0}"
                ];
                var type;
                if ($scope.sourceUrl.toLowerCase().indexOf('item.taobao.com') > -1) {
                    type = 2;
                }
                else {
                    type = 1;
                }
                switch (type * 1) {
                    case 1:
                    {
                        $gotoUrl = $urlTemplate[0]
                            .replace("{0}", $scope.sourceUrl.match(/http[s]?:\/\/(.*?).taobao.com/i)[1])
                            .replace("{1}", $scope.sourceUrl.match(/http[s]?:\/\/(.*?).taobao.com\/(.*?)\?/i)[2] || '');

                    }
                        break;
                    case 2:
                    {
                        $gotoUrl = $urlTemplate[1].replace("{0}", $scope.sourceUrl.match(/id=(\d+)/i)[1]);
                    }
                        break;
                    default:
                    {
                        $gotoUrl = "#";
                    }
                        break;
                }
                $scope.url = "http://www.mdscj.com/convertTaobaoUrl/index.html?type=" + type + "&" + $gotoUrl;
            };

            $scope.copy=function(){
                nw.clipboard.set($scope.url);
                UI.message.alertSuccess("复制数据成功!");
            };
        }]);