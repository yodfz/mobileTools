sysAdminAppControllers.controller(
    'loginCtrl',
    ['$scope', '$rootScope', '$state', '$http', 'login','$location','admin',
        function ($scope, $rootScope, $http, $state, login,$location,admin) {
            $scope.isLogin = false;
            $scope.className='theme-default page-signin';
            $scope.error={};
            $scope.user={phone:'',pass:''};

            $scope.login = function () {
                var $user=$scope.user;
                if($user.phone==''){
                    $scope.error.phone=true;
                    $("#phone").focus();
                    return;
                }else{
                    $scope.error.phone=false;
                }

                if($user.pass==''){
                    $scope.error.pass=true;
                    $("#pass").focus();
                    return;
                }else{
                    $scope.error.pass=false;
                }



                $scope.isLogin = true;
                login.login($scope.user)
                    .success(function (data, status, hearders, config) {
                        //$scope.isLogin = false;
                        if(data.errorCode==200){
                            $rootScope.user=data.data;
                            //这里需要放个切换效果?
                            $location.url('/home');
                        }else{
                            $("#phone").focus();
                            $scope.isLogin=false;
                        }
                    })
                    .error(function (data, status, hearders, config) {
                        $("#phone").focus();
                        $scope.isLogin = false;
                    });
            }
        }]);