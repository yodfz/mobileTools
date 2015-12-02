sysAdminAppControllers.controller(
    'homeCtrl',
    ['$scope', '$rootScope', '$state', '$http', 'login', '$location', 'admin',
        function ($scope, $rootScope, $http, $state, login, $location, admin) {
            $scope.title = "系统管理";
            $scope.className = 'theme-asphalt main-menu-animated page-invoice main-navbar-fixed main-menu-fixed animate-mm-sm animate-mm-md animate-mm-lg';
            admin.set({
                "id": 1,
                "loginame": "admin",
                "nick": "昵称",
                "phone": "1888888888",
                "type": 1,
                "image": "",
                "createdAt": "",
                "updatedAt": ""
            });
            $scope.user = admin.get();
            var init = [];
            //init.push(function () {
            //    $('#main-navbar-notifications').slimScroll({ height: 250 });
            //});
            //init.push(function () {
            //    $('#main-navbar-messages').slimScroll({ height: 250 });
            //});
            //window.PixelAdmin.start(init);

            // active
            $("#main-menu .navigation").on("click", "li", function (e) {
                if (!$(this).hasClass('mm-dropdown')) {
                    e.stopPropagation();
                    $("#main-menu .navigation li").removeClass("active");
                    $(this).addClass("active");
                }

            });

            $("#main-menu").on("click", ".mm-dropdown", function (e) {
                //if(!$(this).hasClass('mm-dropdown')){
                e.stopPropagation();
                if (!$(this).hasClass('open')) {
                    $("#main-menu .mm-dropdown").removeClass("open");
                    $(this).addClass("open");
                }else{
                    $("#main-menu .mm-dropdown").removeClass("open");

                }



                //}

            });

            win = nw.gui.Window.get();
            var nativeMenuBar = new nw.gui.Menu({ type: "menubar" });
            try {
                nativeMenuBar.createMacBuiltin("My App");
                win.menu = nativeMenuBar;
            } catch (ex) {
                console.log(ex.message);
            }
        }]);