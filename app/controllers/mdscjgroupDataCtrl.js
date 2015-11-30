
sysAdminAppControllers.controller(
    'mdscjgroupDataCtrl',
    ['$scope', '$rootScope', '$state', '$http', 'login','$location','admin',
        function ($scope, $rootScope, $http, $state, login,$location,admin) {
            $scope.vm={};
            var vm=$scope.vm;
            vm.tabIndex=1;
            vm.data=[];

            /**
             * TAB切换函数
             * @param index
             */
            $scope.tab=function(index){
                if(index<1){
                    alert("TAB Index异常!");
                    return;
                }
                vm.tabIndex=index;

            };
        }]);