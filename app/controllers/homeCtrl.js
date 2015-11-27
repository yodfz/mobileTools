
sysAdminAppControllers.controller(
    'homeCtrl',
    ['$scope', '$rootScope', '$state', '$http', 'login','$location','admin',
        function ($scope, $rootScope, $http, $state, login,$location,admin) {
            $scope.title="系统管理";
            $scope.className='theme-asphalt main-menu-animated page-invoice main-navbar-fixed main-menu-fixed animate-mm-sm animate-mm-md animate-mm-lg';
            admin.set({
                "id":1,
                "loginame":"admin",
                "nick":"昵称",
                "phone":"1888888888",
                "type":1,
                "image":"",
                "createdAt":"",
                "updatedAt":""
            });
            $scope.user=admin.get();
            var init=[];
            init.push(function () {
                $('#main-navbar-notifications').slimScroll({ height: 250 });
            });
            init.push(function () {
                $('#main-navbar-messages').slimScroll({ height: 250 });
            });
            window.PixelAdmin.start(init);

            // active
            $("#main-menu .navigation").on("click","li",function(e){
                if(!$(this).hasClass('mm-dropdown')){
                    e.stopPropagation();
                    $("#main-menu .navigation li").removeClass("active");
                    $(this).addClass("active");
                }

            });
        }]);