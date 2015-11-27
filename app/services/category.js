sysAdminAppServices.service('category', function($rootScope,$http){
    this.list=function(_p){
        return $http.post(window.URL.categoryList,_p);
    };
    this.up=function(_p){
        return $http.post(window.URL.categoryUp,_p);
    };
    this.down=function(_p){
        return $http.post(window.URL.categoryDown,_p);
    };
    this.delete=function(_p){
        return $http.post(window.URL.categoryDelete,_p);
    };
    this.hide=function(_p){
        return $http.post(window.URL.categoryHide,_p);
    };
    this.poolList=function(_p){
        return $http.post(window.URL.categoryPoolList,_p);
    };

});
