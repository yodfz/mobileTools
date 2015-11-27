sysAdminAppServices.service('shoppool', function($rootScope,$http){
    this.poolShoplist=function(_p){
        return $http.post(window.URL.shoppoolpoolshoplist,_p);
    };
    this.up=function(_p){
        return $http.post(window.URL.navUp,_p);
    };
    this.down=function(_p){
        return $http.post(window.URL.navDown,_p);
    };
    this.delete=function(_p){
        return $http.post(window.URL.navDelete,_p);
    };
    this.hide=function(_p){
        return $http.post(window.URL.navHide,_p);
    };
});
