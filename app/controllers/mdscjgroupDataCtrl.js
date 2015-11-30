
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

            /**
             * 选项添加
             * @param type
             */
            $scope.add=function(type){
                vm.data.push({
                    type:type,
                    title: "",
                    price: "",
                    oldPrice: "",
                    tag: "",
                    url: "",
                    imgUrl: ""
                });
            };

            /**
             * 导入数据
             */
            $scope.import=function(){
                var vmdata=$("#vmdata").val();
                vm.data=JSON.parse(vmdata);
                UI.message.alertSuccess("导入数据成功!");
                vm.tabIndex=1;
            };

            $scope.copy=function(){
                nw.clipboard.set($("#vmdata").val());
                UI.message.alertSuccess("复制数据成功!");
            };

            /**
             * 数据追加
             */
            $scope.append=function(){

            };

            $scope.save=function(){
                var $file=$("#fileDialog");

                $file.change=function(){
                    nw.fs.writeFile($file.val(), $("#vmdata").val(), function(err) {
                        if (err) {
                            console.log("Error Writing file.");
                            return;
                        }
                    });
                };
                $file.trigger('click');

            }
        }]);